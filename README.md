# Ahle Sunnat Front

A Next.js project with Redux integration and modern UI components.

## Features

- Next.js 14 with JavaScript (no TypeScript)
- Redux Toolkit for state management
- Modular component structure
- API routes
- Responsive design
- CSS Modules for styling

## Project Structure

```
ahlesunnat_front/
├── components/          # Shared UI components
│   └── Header.js       # Header component
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   │   └── hello.js    # Sample API endpoint
│   ├── _app.js         # App wrapper with Redux Provider
│   └── index.js        # Home page with counter example
├── public/             # Static files
│   └── assets/         # Images and other assets
├── redux/              # Redux configuration
│   ├── slices/         # Redux slices
│   │   └── counterSlice.js
│   └── store.js        # Redux store configuration
├── styles/             # CSS modules
│   ├── globals.css     # Global styles
│   ├── Home.module.css # Home page styles
│   └── Header.module.css # Header styles
├── package.json        # Dependencies and scripts
├── next.config.js      # Next.js configuration
└── README.md           # This file
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Redux Usage

The project includes a counter example demonstrating Redux usage:

- Counter state is managed in `redux/slices/counterSlice.js`
- Store is configured in `redux/store.js`
- App is wrapped with Redux Provider in `pages/_app.js`
- Counter is used in `pages/index.js` with increment/decrement buttons

## API Routes

- `/api/hello` - Returns `{ message: "Hello from API!" }`

## Adding Assets

Place images and other static files in the `public/assets/` directory. They will be accessible at `/assets/filename`.

## Technologies Used

- Next.js 14
- React 18
- Redux Toolkit
- React Redux
- CSS Modules 