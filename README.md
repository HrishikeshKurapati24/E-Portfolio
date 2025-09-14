# Hrishikesh Kurapati - Portfolio Website

A modern, interactive portfolio website built with React + TypeScript, featuring Windows 98 themed project showcase, 3D animations, and Framer Motion. This portfolio showcases projects with an authentic retro computing experience while maintaining modern web standards.

## ✨ Features

- **Modern Tech Stack**: React 19 + TypeScript + Tailwind CSS
- **Windows 98 Theme**: Authentic retro computing experience with classic UI elements
- **Interactive Project Showcase**: Double-click to open project windows with detailed modals
- **3D Graphics**: Spline 3D scenes and animations
- **Advanced Animations**: Framer Motion with spring physics and scroll-based animations
- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Project Details Modal**: Comprehensive project information with features and technologies
- **Resume Integration**: PDF viewer with download functionality
- **Performance Optimized**: Lazy loading, dynamic imports, compressed assets

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## 🎨 Design System

### Colors
- **Dark Background**: `#0d0e12`
- **Primary Accent**: `#7f5af0` (Purple)
- **Secondary Accent**: `#2cb67d` (Green)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Glass Cards**: `bg-[#16171d]/60 backdrop-blur-md border border-white/5`
- **Gradients**: Primary to secondary color transitions
- **Hover Effects**: Scale animations with glow shadows

## 📱 Sections

### 1. Navigation (`Header.tsx`)
- Sticky navigation with glassmorphism
- Mobile-responsive hamburger menu
- Smooth scroll navigation to sections
- Resume download button

### 2. Hero (`Hero.tsx`)
- Full-viewport layout with 3D Spline robot
- Typewriter effect for role titles
- Mouse-following spotlight effect
- Professional introduction

### 3. About (`About.tsx`)
- Project icons showcase
- Professional background information
- Technology highlights
- Interactive hover effects

### 4. Projects (`Projects.tsx`)
- **Windows 98 Theme**: Authentic retro desktop experience
- **Interactive Icons**: Double-click to open project windows
- **Project Windows**: Windows 98 style windows with minimize/maximize/close
- **Project Details Modal**: Comprehensive project information
- **Progressive Loading**: Authentic loading animations
- **Project Showcase**: Featured projects with detailed descriptions

### 5. Contact (`Contact.tsx`)
- Contact form with Formspree integration
- Social media links
- Professional contact information

## 🎬 Animation System

### Motion Configuration (`motion.config.ts`)
- **Spring Physics**: `{ stiffness: 400, damping: 40 }`
- **Cubic Bezier Easings**: Custom easing curves
- **Reusable Variants**: `fadeUp`, `scaleIn`, `stagger`, `slideLeft`
- **Reduced Motion**: Respects user preferences

### Windows 98 Theme
- **Authentic UI Elements**: Classic window controls, borders, and styling
- **Interactive Windows**: Minimize, maximize, and close functionality
- **Progressive Loading**: Windows 95 style loading animations
- **Retro Cursors**: Custom cursor images for authentic experience

## 🔧 Performance Optimizations

- **Dynamic Imports**: Spline 3D assets load after `useInView`
- **Lazy Loading**: Components load when needed
- **Image Compression**: Optimized project images
- **Smooth Scrolling**: CSS `scroll-behavior: smooth`
- **Code Splitting**: Removed unused components and dependencies

## 📦 Dependencies

### Core
- `react` - UI library
- `typescript` - Type safety
- `framer-motion` - Animations
- `tailwindcss` - Styling

### 3D Graphics
- `@splinetool/react-spline` - Spline 3D scenes
- `@splinetool/runtime` - Spline runtime
- `@react-three/fiber` - React Three.js renderer
- `@react-three/drei` - Three.js helpers
- `three` - 3D graphics library

### Utilities
- `react-intersection-observer` - Scroll-based animations

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload build folder to Netlify
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 🔧 Customization

### Colors
Update `tailwind.config.js`:
```js
colors: {
  dark: "#your-dark-color",
  primary: "#your-primary-color",
  secondary: "#your-secondary-color",
}
```

### Animations
Modify `src/motion.config.ts` for custom animations:
```ts
export const customVariant: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};
```

### Content
Update component content by editing the respective `.tsx` files in `src/components/`.

## 🐛 Troubleshooting

### TypeScript Errors
Make sure all dependencies are installed with `--legacy-peer-deps` flag.

### Three.js Performance
Reduce the number of 3D objects or lower the quality for better performance on slower devices.

### Animation Issues
Check if `prefers-reduced-motion` is enabled in browser settings.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please reach out through the contact form on the website or create an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Framer Motion
