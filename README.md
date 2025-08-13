
# 🚀 Om's Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Designed to showcase projects, skills, and professional experience with a clean, minimal aesthetic.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📧 **Contact Form** - Integrated contact form with EmailJS
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and sitemap included
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 📄 **Resume Download** - Direct PDF download functionality

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React 18 + Vite | Modern UI framework with fast build tool |
| **Language** | TypeScript | Type safety and better developer experience |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **Icons** | Lucide Icons | Clean, customizable SVG icons |
| **Animations** | Framer Motion | Smooth transitions and animations |
| **Deployment** | Vercel | Fast hosting with automatic deployments |
| **Version Control** | Git + GitHub | Source code management |

## 🎯 Pages & Sections

### 🏠 Home
- Hero section with professional introduction
- Call-to-action buttons
- Animated elements and smooth scrolling

### 👨‍💻 About
- Professional bio and journey
- Profile photo
- Core values and interests

### 🚀 Projects
- Interactive project cards
- Technology stack highlights
- Live demo and source code links
- Detailed project descriptions

### 💼 Skills
- Technical skills with proficiency indicators
- Categorized skill groups
- Interactive hover effects

### 📞 Contact
- Contact form with validation
- Social media links
- Professional email and location info

## 🏗️ Project Structure

```
portfolio/
│
├── public/                  # Static assets
│   ├── favicon.ico
│   ├── site-preview.png
│   └── resume.pdf
│
├── src/
│   ├── assets/              # Images and media files
│   │   └── profile.jpg
│   │
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Button.tsx
│   │
│   ├── pages/               # Main page sections
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   │
│   ├── data/                # Content configuration
│   │   ├── projects.ts
│   │   └── skills.ts
│   │
│   ├── styles/              # Global styles
│   │   └── globals.css
│   │
│   └── App.tsx              # Root component
│
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check |

## 🎨 Customization

### Content Updates
- **Projects**: Edit `src/data/projects.ts` to add/modify projects
- **Skills**: Update `src/data/skills.ts` to modify skill sets
- **Personal Info**: Update contact details and bio in respective components

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Typography**: Change fonts in `src/styles/globals.css`
- **Animations**: Adjust Framer Motion configurations in components

### Adding New Sections
1. Create a new component in `src/pages/`
2. Import and add to `App.tsx`
3. Update navigation in `Navbar.tsx`

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- **Mobile** (320px - 768px): Stacked layout, hamburger menu
- **Tablet** (768px - 1024px): Adjusted grid layouts
- **Desktop** (1024px+): Full multi-column layouts

## 🔧 Performance Optimizations

- ⚡ **Vite** for lightning-fast builds and hot reload
- 🖼️ **Image optimization** with lazy loading
- 📦 **Tree shaking** to eliminate unused code
- 🎯 **Code splitting** for optimal loading
- 🗜️ **CSS purging** to remove unused Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy automatically on every push

### Netlify Alternative
1. Build the project: `npm run build`
2. Upload `dist` folder to [Netlify](https://netlify.com)
3. Configure custom domain (optional)

## 📊 SEO Features

- 🏷️ **Meta tags** for better search engine indexing
- 🌐 **Open Graph** tags for social media sharing
- 🗺️ **Sitemap** generation for search engines
- 📱 **Mobile-friendly** design
- ⚡ **Fast loading times** for better rankings

## 🔮 Future Enhancements

- [ ] 📝 Blog section with MDX support
- [ ] 🎬 3D animations with Three.js
- [ ] 🌍 Multi-language support
- [ ] 📊 Analytics integration
- [ ] 🔗 CMS integration for easy content management
- [ ] 🎨 Theme customizer
- [ ] 📬 Newsletter signup

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 📞 Contact

**Your Name** - [omengshetti@gmail.com](mailto:omengshetti@gmail.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

Live Demo: [https://yourname.vercel.app](https://yourname.vercel.app)

---

⭐ **Star this repository if it helped you!**

Built with ❤️ and lots of ☕
