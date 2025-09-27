# ALX Listing App

A modern, responsive Airbnb clone listing page built with Next.js and TypeScript. This project demonstrates advanced React concepts, responsive design, and clean architecture patterns to create a seamless property listing experience.

## 🎯 Project Goals

- Create a pixel-perfect clone of Airbnb's listing page interface
- Implement responsive design that works across all device sizes
- Demonstrate modern React patterns and TypeScript usage
- Build reusable components with clean separation of concerns
- Showcase professional frontend development practices

## 🏗️ Project Structure

```
alx-listing-app/
├── components/           # Reusable UI components
│   ├── common/          # Shared components (buttons, cards, etc.)
│   ├── layout/          # Layout components (header, footer, etc.)
│   └── listing/         # Listing-specific components
├── interfaces/          # TypeScript type definitions and interfaces
│   ├── index.ts         # Main interface exports
│   └── types.ts         # Custom type definitions
├── constants/           # Application constants and configuration
│   ├── index.ts         # General constants
│   └── api.ts           # API endpoints and configurations
├── public/assets/       # Static assets
│   ├── images/          # Image files
│   ├── icons/           # Icon assets
│   └── logos/           # Brand logos
├── pages/               # Next.js pages (routing)
├── styles/              # Global styles and CSS modules
└── utils/               # Utility functions and helpers
```

### 📁 Directory Purpose

- **`components/`**: Contains all reusable React components organized by feature and functionality
- **`interfaces/`**: TypeScript interfaces and type definitions for type safety and code documentation
- **`constants/`**: Application-wide constants, configuration values, and static data
- **`public/assets/`**: Static assets like images, icons, and other media files served directly

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd alx-listing-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

The page will automatically reload when you make changes to the code.

## 🛠️ Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality checks
- `npm run type-check` - Runs TypeScript compiler for type checking

## 🔧 Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

## 📝 Development Guidelines

- Follow TypeScript best practices for type safety
- Use Tailwind CSS for styling with responsive design principles
- Maintain component reusability and clean architecture
- Write meaningful commit messages and maintain clean Git history

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is created for educational purposes as part of the ALX Software Engineering Program.

---

Built with ❤️ for the ALX Software Engineering Program
