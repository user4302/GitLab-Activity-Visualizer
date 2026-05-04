# Changelog 📜

All notable changes to this project will be documented in this file.

## [Unreleased]

## [v0.1.1] - 2026-05-04

### Fixed 🛠️

- **Hydration**: Resolved SSR/CSR mismatch issues by replacing HTML img with Next.js Image component and simplifying URL construction.
- **Performance**: Optimized image loading with Next.js Image component for better LCP and bandwidth usage.

## [v0.1.0] - 2026-02-02

### Added ✨

- **Core API**: Implemented SVG generation with real-time GitLab activity data.
- **5-Range Logic**: Precise contribution thresholds (`0, 1-9, 10-19, 20-29, 30+`).
- **Interactive UI**: Added `Generator` component with theme selection and live preview.
- **Themes**: Support for `GitLab Light`, `GitLab Dark`, `Sky Blue`, and `Warm Orange`.
- **Netlify Ready**: Added `netlify.toml` and documentation for instant deployment.
- **Caching Fixes**: Implemented aggressive `no-store` headers and cache-busting for fast, reliable live updates on Netlify.
- **State Debouncing**: Added a 500ms debounce to the preview generator to eliminate race conditions and reduce API spam.

### Fixed 🛠️

- **Hydration**: Resolved SSR/CSR mismatch issues in Next.js.
- **API Resilience**: Added error Handling for 404/Not Found usernames.
- **Netlify Config**: Corrected Node.js versioning in `netlify.toml`.
- **UI Sync**: Fixed a race condition where specific typing speeds could show out-of-order preview data.
- **Legend Labels**: Updated visibility legend to use "Less" and "High" for better clarity.
