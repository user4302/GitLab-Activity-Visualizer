
import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

/**
 * Handles GET requests to generate a GitLab contribution calendar SVG.
 * 
 * @param req - The incoming Next.js request containing 'username' and 'theme' query parameters.
 * @returns A Response object containing the generated SVG or an error SVG.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get('username');
  const theme = searchParams.get('theme') || 'classic';

  if (!username) {
    return new NextResponse('Username is required', { status: 400 });
  }

  try {
    const response = await fetch(`https://gitlab.com/users/${username}/calendar.json?v=${Date.now()}`, {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        return new NextResponse(generateErrorSVG(`User "${username}" not found`), {
          headers: { 'Content-Type': 'image/svg+xml' },
        });
      }
      throw new Error(`GitLab API responded with ${response.status}`);
    }

    const data = await response.json();
    const svg = generateSVG(data, theme);

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Vary': 'Accept-Encoding, Cookie',
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    return new NextResponse(generateErrorSVG('Could not fetch activity'), {
      headers: { 'Content-Type': 'image/svg+xml' },
    });
  }
}

/**
 * Generates an SVG representation of an error message.
 * 
 * @param message - The error message to display in the SVG.
 * @returns An SVG string showing the error.
 */
function generateErrorSVG(message: string) {
  return `<svg width="400" height="100" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="100" fill="#161b22" rx="10"/>
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#f87171" font-family="sans-serif" font-size="14">${message}</text>
  </svg>`;
}

type ContributionData = { [date: string]: number };

/**
 * Generates the main contribution calendar SVG based on GitLab data.
 * 
 * @param data - The contribution data object (date -> count).
 * @param theme - The selected theme ID (classic, dark, blue, orange).
 * @returns A complete SVG string representing the activity calendar.
 */
function generateSVG(data: ContributionData, theme: string) {
  const squareSize = 10;
  const gap = 3;
  const leftPadding = 35; // Space for day labels
  const topPadding = 25;  // Space for month labels
  const bottomPadding = 30; // Space for legend

  const themes: Record<string, string[]> = {
    light: ['#f2f2f2', '#d2dcff', '#97acff', '#617ae2', '#3f51ae'],
    dark: ['#161b22', '#303470', '#3f51ae', '#617ae2', '#97acff'],
    green: ['#161b22', '#104d2c', '#1b7d41', '#28a745', '#39d353'],
    orange: ['#161b22', '#5c2d1b', '#92400e', '#f97316', '#fde047']
  };

  const colors = themes[theme] || themes.light;

  // Official GitLab Ranges: none, 1-9, 10-19, 20-29, 30+
  const getColor = (count: number) => {
    if (count === 0) return colors[0];
    if (count <= 9) return colors[1];
    if (count <= 19) return colors[2];
    if (count <= 29) return colors[3];
    return colors[4];
  };

  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  // Normalized "today" at 12:00 to avoid timezone shifting during arithmetic
  const todayMidday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);
  const startDate = new Date(todayMidday);
  startDate.setDate(todayMidday.getDate() - 364); // Go back 52 weeks
  startDate.setDate(startDate.getDate() - startDate.getDay()); // Snap to preceding Sunday

  let rects = '';
  let labels = '';
  const monthLabels: { [key: string]: number } = {};

  const currentDate = new Date(startDate);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Day labels
  [1, 3, 5].forEach(dayIdx => {
    const y = dayIdx * (squareSize + gap) + topPadding + squareSize - 1;
    labels += `<text x="5" y="${y}" class="label">${dayNames[dayIdx][0]}</text>`;
  });

  for (let week = 0; week < 53; week++) {
    const x = week * (squareSize + gap) + leftPadding;

    for (let day = 0; day < 7; day++) {
      const yyyy = currentDate.getFullYear();
      const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
      const dd = String(currentDate.getDate()).padStart(2, '0');
      const dateStr = `${yyyy}-${mm}-${dd}`;

      const count = Number(data[dateStr] || 0);
      const y = day * (squareSize + gap) + topPadding;

      if (day === 0) {
        const month = months[currentDate.getMonth()];
        const monthKey = `${month}-${currentDate.getFullYear()}`;
        if (monthLabels[monthKey] === undefined) {
          labels += `<text x="${x}" y="15" class="label">${month}</text>`;
          monthLabels[monthKey] = week;
        }
      }

      rects += `
        <g>
          <title>${dateStr}${dateStr === todayStr ? ' (Today)' : ''}: ${count} contribution${count === 1 ? '' : 's'}</title>
          <rect x="${x}" y="${y}" width="${squareSize}" height="${squareSize}" fill="${getColor(count)}" rx="2" />
        </g>
      `.trim();
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  // Legend Refinement
  const legendX = leftPadding;
  const legendY = 7 * (squareSize + gap) + topPadding + 15;
  labels += `<text x="${legendX}" y="${legendY + squareSize - 1}" class="label" style="font-size: 8px;">Less</text>`;
  colors.forEach((color, i) => {
    const x = legendX + 35 + i * (squareSize + gap);
    labels += `<rect x="${x}" y="${legendY}" width="${squareSize}" height="${squareSize}" fill="${color}" rx="2" />`;
  });
  labels += `<text x="${legendX + 35 + 5 * (squareSize + gap) + 5}" y="${legendY + squareSize - 1}" class="label" style="font-size: 8px;">High</text>`;

  const width = 53 * (squareSize + gap) + leftPadding + 10;
  const height = 7 * (squareSize + gap) + topPadding + bottomPadding;

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .label { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif; font-size: 10px; fill: #666; }
      </style>
      ${labels}
      ${rects}
    </svg>
  `.trim();
}
