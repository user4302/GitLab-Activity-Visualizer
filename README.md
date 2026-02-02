# GitLab Activity Visualizer 🚀

A high-performance, real-time GitLab contribution calendar generator for GitHub Profile READMEs and personal portfolios.

![GitLab Activity](https://user4302-gitlab-activity-visualizer.netlify.app/api/calendar?username=user4302&theme=orange)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitLab Issues](https://img.shields.io/badge/GitLab-Issues-blue?logo=gitlab)](https://gitlab.com/user4302_Projects/coding/next-js/gitlab-activity-visualizer/-/issues)
[![Deployment Status](https://img.shields.io/badge/Netlify-Deployed-success?logo=netlify)](https://user4302-gitlab-activity-visualizer.netlify.app)

## Features ✨

- **Real-Time Data**: Fetches directly from GitLab's official activity API.
- **5-Range Precision**: Matches GitLab's official breakdown: `0, 1-9, 10-19, 20-29, 30+`.
- **Multiple Themes**: Supports `GitLab Light`, `GitLab Dark`, `Sky Blue`, and `Warm Orange`.
- **High Performance**: Optimized with SVG rendering and caching for instant loads.
- **Easy Embed**: Simple Markdown syntax for GitHub and GitLab READMEs.
- **Premium UI**: Interactive generator with live preview and theme selector.

## Tech Stack / Built With 🛠️

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: Next.js API Routes (Serverless)
- **Deployment**: [Netlify](https://www.netlify.com/)

## Quick Start 🚀

No setup required! Simply visit the live generator to create your embed link in seconds:

👉 **[Live Generator Tool](https://user4302-gitlab-activity-visualizer.netlify.app)**

1. Enter your GitLab username.
2. Select your favorite theme.
3. Copy the Markdown code and paste it into your README!

## Manual Usage ⚡

If you prefer to construct the URL yourself, use the following Markdown syntax:

```markdown
![GitLab Activity](https://user4302-gitlab-activity-visualizer.netlify.app/api/calendar?username=YOUR_USERNAME&theme=dark)
```

### URL Parameters
- `username`: Your GitLab username (required).
- `theme`: Choice of `classic`, `dark`, `blue`, or `orange` (default: `classic`).

## Self-Hosting / Installation 📥

If you want to run your own instance:

1. **Clone the repository**:
   ```bash
   git clone https://gitlab.com/user4302_Projects/coding/next-js/gitlab-activity-visualizer.git
   cd gitlab-activity-visualizer
   ```

2. **Install & Run**:
   ```bash
   npm install
   npm run dev
   ```

## Project Structure 📂

- `src/app/api/calendar/route.ts`: Core API logic for fetching data and generating SVG.
- `src/components/Generator.tsx`: Interactive frontend for URL generation.
- `src/app/page.tsx`: Landing page layout.

## Configuration 🔧

No API keys are required as it uses public GitLab profile data.

## Development 🏗️

```bash
# Start development server
npm run dev

# Run linting
npm run lint
```

## Building for Production 🏭

```bash
npm run build
```

## Deployment 🚀

This project is optimized for **Netlify**.
- **Build Command**: `npm run build`
- **Publish Directory**: `.next`

The repository includes a `netlify.toml` for automatic configuration.

## Contributing 🤝

Contributions are highly encouraged! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details. All communication and pull requests must be handled via [GitLab Merge Requests](https://gitlab.com/user4302_Projects/coding/next-js/gitlab-activity-visualizer/-/merge_requests).

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support & Contact 👋

For any questions, bug reports, feature requests, or security concerns, please open an issue on GitLab: [Issues Page](https://gitlab.com/user4302_Projects/coding/next-js/gitlab-activity-visualizer/-/issues). No email or direct messaging support is available.
