# ArcNation Website

A modern, responsive website for ArcNation - a video production company specializing in customer testimonial videos.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Interactive Components**: Video sliders, testimonials, and pricing sections
- **Lead Generation**: Integrated contact forms and booking system
- **Performance Optimized**: Fast loading with optimized images and code splitting

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI + Custom components
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/arcnation-website.git
cd arcnation-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Base UI components (buttons, cards, etc.)
├── screens/            # Page components
│   ├── MainPageDesktop/    # Main landing page
│   ├── ImpressumPage/      # Legal/Impressum page
│   └── LeadgenPage/        # Lead generation page
├── lib/                # Utility functions
└── index.tsx           # Application entry point
```

## Deployment

The site can be deployed to various platforms:

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel
1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with zero configuration

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For questions about this project, please contact:
- Email: kontakt@arcnation.de
- Website: [ArcNation](https://arcnation.de)