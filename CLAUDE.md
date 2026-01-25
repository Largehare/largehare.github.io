# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio template built with Astro and Tailwind CSS v4. It's designed to be easily customizable through a single configuration file while maintaining a clean, professional appearance.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): Individual Astro components for each section (Hero, About, Projects, Publications, Experience, Education, Honors, Referees, Header, Footer, Lightbox)
- **Main Layout** (`src/pages/index.astro`): Single-page layout that imports all components
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config propagates throughout the site via CSS custom properties

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- The project uses IBM Plex Mono font loaded from Google Fonts
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:
1. Components read directly from the imported `siteConfig` object
2. Use Tailwind utility classes for styling
3. Maintain the existing monospace font aesthetic
4. Use Tabler Icons for consistency with existing icons

## Configuration Structure

The `src/config.ts` exports a `siteConfig` object with these sections:
- Basic info: name, title, description, accentColor, linkUnavailableText
- Social links: email, linkedin, github (all optional)
- aboutMe: string
- skills: string[]
- projects: array of {name, description, link, linkNote, skills, images}
- publications: array of {title, authors, venue, link, images}
- experience: array of {company, title, dateRange, description, link, linkNote, images}
- education: array of {school, degree, dateRange, achievements, description}
- honors: array of {title, issuer, association, date, description}
- referees: array of {name, affiliation, email, linkedin, avatar}

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on push to `master`. The workflow is defined in `.github/workflows/deploy.yml` using the official Astro action.

## Adding a New Section

1. Create a new component in `src/components/`
2. Add the corresponding data structure to `src/config.ts`
3. Import and add the component to `src/pages/index.astro`
4. Ensure it renders conditionally based on config data