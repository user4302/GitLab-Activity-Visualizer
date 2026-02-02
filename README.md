# GitLab Contribution Calendar Generator

🚀 A dynamic, high-performance service to visualize your GitLab activity via embedded SVGs.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?logo=next.js)](https://nextjs.org/)

## Features ✨
- **Dynamic SVG API**: Direct embedding in READMEs via a simple URL.
- **Classic & Custom Themes**: Choose from multiple color schemes including GitLab Classic, Dark Mode, Sky Blue, and Warm Orange.
- **Month & Day Labels**: Professional layout with clear temporal markers.
- **Premium Generator UI**: Interactive web interface with live preview and one-click copy.
- **Performant & Scalable**: Server-side rendering with caching for optimal speed.

## Tech Stack / Built With 🛠️
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: Optimized for [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)

## Prerequisites
- **Node.js**: v18.17.0 or higher
- **npm**: v9.0.0 or higher

## Installation 📥
```bash
# Clone the repository
git clone [YOUR_GITLAB_REPO_URL_HERE]

# Navigate to the project directory
cd gitlab-contribution-calendar

# Install dependencies
npm install
```

## Usage / Quick Start ⚡
To embed your calendar in a README, use the following Markdown syntax:

```markdown
![GitLab Activity](https://your-deployment-url.com/api/calendar?username=oregand&theme=dark)
```

### URL Parameters
| Parameter | Description | Options | Default |
|-----------|-------------|---------|---------|
| `username`| Your GitLab username | (string) | Required |
| `theme`   | Visual color palette | `classic`, `dark`, `blue`, `orange` | `classic` |

## Project Structure 📂
```text
├── src/
│   ├── app/
│   │   ├── api/calendar/route.ts  # Core SVG Rendering Logic
│   │   ├── layout.tsx             # Root Layout
│   │   └── page.tsx               # Landing Page UI
│   └── components/
│       └── Generator.tsx          # Interactive Generator Component
├── public/                        # Static Assets
└── tailwind.config.ts             # Styling Configuration
```

## Development / Running Locally 🏗️
```bash
# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

## Building for Production 🏭
```bash
# Create production build
npm run build

# Start production server
npm start
```

## Contributing 🤝
Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details. For any communication, please use GitLab Issues.

## License 📄
Distributed under the MIT License. See `LICENSE` for more information.

## Support & Contact 👋
For any questions, bug reports, feature requests, or security concerns, please open an issue on GitLab: [YOUR_GITLAB_REPO_URL_HERE]/-/issues. No email or direct messaging support is available.

---
*Note: This project is not affiliated with GitLab Inc.*
