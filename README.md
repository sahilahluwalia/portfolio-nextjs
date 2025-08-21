# Sahil Ahluwalia's Portfolio

A modern, responsive personal portfolio website built with Next.js, showcasing professional experience, skills, and blog content.

## 🚀 Features

- **Clean, Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Dynamic Blog Integration** - Fetches latest articles from Hashnode via GraphQL
- **Professional Experience** - Detailed work history and project showcases
- **Skills Showcase** - Comprehensive display of technical competencies
- **Social Media Integration** - Direct links to all professional profiles
- **SEO Optimized** - Complete metadata and social sharing support
- **Modern UI/UX** - Polished interface with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: Apollo Client (GraphQL)
- **Blog Content**: Hashnode API integration
- **Deployment**: Vercel-ready

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sahilahluwalia/portfolio-nextjs.git
cd portfolio-nextjs

# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── actions/          # Server actions for data fetching
│   ├── blog/            # Blog listing page
│   ├── constants/       # Site configuration and data
│   ├── fancy-resume/    # Resume page
│   └── layout.tsx       # Root layout with SEO
├── components/
│   ├── hero.tsx         # Animated hero section
│   ├── navbar.tsx       # Navigation component
│   ├── project.tsx      # Project showcase
│   └── writing.tsx      # Blog posts display
├── icons/               # Custom SVG icons
└── util/               # GraphQL client configuration
```

## ✨ Key Sections

- **Hero**: Animated landing section with starfield background
- **About**: Professional introduction and skills showcase
- **Experience**: Detailed work history with technology stacks
- **Blog**: Dynamic content from Hashnode publication
- **Contact**: Multiple ways to connect and collaborate

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🌐 Deployment

This portfolio is optimized for deployment on [Vercel](https://vercel.com). Simply connect your GitHub repository to Vercel for automatic deployments.

## 📝 Content Management

Blog content is automatically fetched from Hashnode using GraphQL. Update the `socialMediaLink.hashNodeHost` in constants to point to your Hashnode publication.

---

Built with ❤️ by [Sahil Ahluwalia](https://sahilahluwalia.com)