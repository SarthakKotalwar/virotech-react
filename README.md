# Virotech React Web Application

A modern, responsive web application built with React and Vite, showcasing Virotech's digital services, solutions, and enterprise tech offerings.

---

## Features

* **Modern Stack**: Powered by React 18 and Vite for fast development and optimized bundling.
* **Component Architecture**: Reusable UI components for services, case studies, blogs, and contact workflows.
* **Responsive Layout**: Designed for seamless experiences across mobile, tablet, and desktop viewports.
* **Production-Ready Assets**: Configured with pre-packaged static assets, routing, and deployment configurations.

---

## Project Structure

```text
virotech-react/
└── client/
    ├── public/             # Static files, images, and server configs (.htaccess)
    ├── src/                # React source code (components, pages, styles)
    ├── index.html          # HTML entry point
    ├── eslint.config.js    # Linting rules
    ├── package.json        # Dependencies and scripts
    └── vite.config.js      # Vite build configuration

## Prerequisites

Before running the application, make sure the following are installed:

* **Node.js**: Version `18.x` or higher recommended
* **npm**: Version `9.x` or higher (comes bundled with Node.js) or **yarn** / **pnpm**

Check versions via terminal:

```bash
node -v
npm -v

```

---

## Installation and Setup

Follow these steps to clone, configure, and launch the application locally:

### 1. Clone the Repository

```bash
git clone [https://github.com/SarthakKotalwar/virotech-react.git](https://github.com/SarthakKotalwar/virotech-react.git)
cd virotech-react

```

### 2. Navigate to the Client Directory

The frontend React application resides within the `client` folder:

```bash
cd client

```

### 3. Install Dependencies

Install the necessary `node_modules`:

```bash
npm install

```

---

## Running the Application

### Development Mode

Start the local Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev

```

Once running, access the app in your browser at:

```text
http://localhost:5173

```

*(If port `5173` is occupied, Vite will assign and print an alternative port in your terminal.)*

---

## Available Scripts

Run these commands inside the `client` directory:

| Command | Action |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Compiles and optimizes assets into `client/dist` for production |
| `npm run preview` | Spins up a local web server to preview production build artifacts |
| `npm run lint` | Analyzes code for errors and linting warnings via ESLint |

---

## Production Build and Deployment

### Building for Production

To create a minified, production-ready build:

```bash
npm run build

```

This generates an optimized static bundle inside the `client/dist/` directory.

### Preview the Build

Verify the production build locally before deployment:

```bash
npm run preview

```

### Deployment Guidelines

* **Apache Hosting**: The `public/.htaccess` file contains rewrite rules designed for handling single-page application (SPA) client-side routing. Upload the contents of `dist/` directly to your web server root (`public_html`).
* **Vercel / Netlify / Cloudflare Pages**: Set the root directory to `client`, the build command to `npm run build`, and the output directory to `dist`. Ensure fallback rewrites to `index.html` are enabled.

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push to the branch: `git push origin feature/my-feature`.
5. Open a Pull Request.

---

## Usage & Maintenance

Managed by **Sarthak Kotalwar**.

You are free to view, fork, and use this project for personal learning and educational purposes. Commercial use or redistribution without explicit permission from the author is not permitted.
