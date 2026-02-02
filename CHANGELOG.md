# Changelog 📜

All notable changes to this project will be documented in this file.

## [v0.1.0] - 2026-02-02

### Added ✨
- **Core API**: Implemented SVG generation with real-time GitLab activity data.
- **5-Range Logic**: Precise contribution thresholds (`0, 1-9, 10-19, 20-29, 30+`).
- **Interactive UI**: Added `Generator` component with theme selection and live preview.
- **Themes**: Support for `GitLab Light`, `GitLab Dark`, `Sky Blue`, and `Warm Orange`.
- **Netlify Ready**: Added `netlify.toml` and documentation for instant deployment.
- **Caching Fixes**: Implemented Edge-optimized caching and cache-busting for fast live updates.

### Fixed 🛠️
- **Hydration**: Resolved SSR/CSR mismatch issues in Next.js.
- **API Resilience**: Added error Handling for 404/Not Found usernames.
- **Netlify Config**: Corrected Node.js versioning in `netlify.toml`.
