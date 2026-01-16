# GEMINI.md

## Project Overview

This project is a personal portfolio website built with **Astro** and **Tailwind CSS v4**. It is a modern, minimalist template designed to showcase skills, experience, and projects.

The key feature of this project is its centralized configuration in `src/config.ts`, allowing for easy customization of content without deep code changes.

### Tech Stack

*   **Framework:** Astro
*   **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`)
*   **Language:** TypeScript (for configuration) & Astro
*   **Icons:** Tabler Icons
*   **Extras:** LaTeX CV generation (located in `cv/`)

## Architecture

The project follows a straightforward Astro structure:

*   **`src/config.ts`**: The single source of truth for all site content (profile info, experience, projects, social links).
*   **`src/components/`**: UI components for different sections of the page (Hero, About, Experience, etc.).
*   **`src/pages/`**: Contains `index.astro`, the main entry point assembling the components.
*   **`src/styles/`**: Global styles.
*   **`cv/`**: Contains LaTeX source files (`overleaf/`) for generating a PDF resume/CV.

## Building and Running

### Prerequisites
*   Node.js installed.

### Commands

| Command | Description |
| :--- | :--- |
| `npm install` | Install dependencies. |
| `npm run dev` | Start the local development server (usually at `http://localhost:4321`). |
| `npm run build` | Build the site for production. |
| `npm run preview` | Preview the production build locally. |

## Development Conventions

*   **Content Updates:** Prefer modifying `src/config.ts` for changing text, links, or adding/removing items (experience, projects).
*   **Styling:** Use Tailwind utility classes. The project uses v4, configured via Vite plugin in `astro.config.mjs`.
*   **Components:** Components are pure `.astro` files. They should import data from `src/config.ts` or accept props if reused.
*   **CV:** The `cv/` directory appears to hold LaTeX files for a matching PDF resume. Changes to the website content might often correlate with updates needed here.

## Key Files

*   `src/config.ts`: **Most important file.** Configure name, title, bio, links, and data arrays here.
*   `astro.config.mjs`: Astro configuration, including the Tailwind Vite plugin.
*   `src/pages/index.astro`: The main layout file.
*   `package.json`: Dependencies and scripts.
