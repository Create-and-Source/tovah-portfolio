import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA — Every shipped project
   ═══════════════════════════════════════════════════════════ */
const projects = [
  // AI & Agentic Products
  {
    id: 'merchos',
    name: 'MerchOS',
    category: 'AI Platform',
    tagline: 'AI-Powered Merchandise Sourcing',
    description: 'Full SaaS platform where AI handles client communication, product sourcing, quoting, invoicing, and supplier management. 8 API integrations working together.',
    url: 'https://merchos-app.vercel.app',
    tech: ['React', 'TypeScript', 'Supabase', 'Stripe Connect', 'Gmail API', 'SAGE', 'OpenAI', 'Printify'],
    github: 'Create-and-Source/merchos',
    highlight: true,
  },
  {
    id: 'olive',
    name: 'Olive',
    category: 'AI Product',
    tagline: 'Personal AI Companion',
    description: 'Conversational AI with journal, visualizations, task/goal management, Gmail and GitHub integration, and text-to-speech.',
    url: 'https://askolive.vercel.app',
    tech: ['React', 'Claude API', 'TTS', 'Gmail API', 'GitHub API', 'Supabase'],
    github: 'Create-and-Source/olive-app',
  },
  // Client Platforms
  {
    id: 'darksky-admin',
    name: 'Dark Sky Admin',
    category: 'Client Platform',
    tagline: 'Museum Operations System',
    description: 'Full admin platform for the International Dark-Sky Discovery Center — inventory management, Square POS integration, ticketing, gift shop, staff management, and AI analytics.',
    url: 'https://darksky-admin.vercel.app',
    tech: ['React', 'Supabase', 'Square API', 'AWS Lambda', 'DynamoDB', 'Webhooks'],
    github: 'Create-and-Source/DarkSky_client',
    highlight: true,
  },
  {
    id: 'darksky-website',
    name: 'Dark Sky Website',
    category: 'Client Website',
    tagline: 'International Dark-Sky Discovery Center',
    description: 'Public-facing website for the museum — gold design system, real photos, IDSDC branding, mobile-responsive with dynamic navigation.',
    url: 'https://darksky-website.vercel.app',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'Create-and-Source/darksky-website',
  },
  {
    id: 'cs-platform',
    name: 'CS Platform',
    category: 'AI Platform',
    tagline: 'Business Operations Dashboard',
    description: 'Internal ops tool with real Stripe data ($52K tracked), Gmail inbox integration, SAGE product search, supplier management, and glass UI design.',
    url: 'https://cs-platform-app.vercel.app',
    tech: ['React', 'TypeScript', 'Stripe', 'Gmail API', 'SAGE API', 'Supabase'],
    github: 'Create-and-Source/cs-platform',
  },
  // E-Commerce Stores
  {
    id: 'nutanix',
    name: 'Nutanix Store',
    category: 'E-Commerce',
    tagline: 'Corporate Employee Merchandise',
    description: 'Enterprise merch store for Fortune 500 tech company Nutanix — employee request/approval workflows, fulfillment tracking, admin management panel.',
    url: 'https://nutanix-store.vercel.app',
    tech: ['React', 'Supabase', 'Admin Dashboard'],
    github: 'Create-and-Source/nutanix-store',
    highlight: true,
  },
  {
    id: 'eastwood',
    name: 'Eastwood Co. Supply',
    category: 'E-Commerce',
    tagline: 'Western Streetwear',
    description: 'Full apparel line for content creator @eastwood0100 — hoodies, crop tees, crewnecks, and matching sets with AI-generated lifestyle photography.',
    url: 'https://eastwood-store.vercel.app',
    tech: ['React', 'Stripe', 'Printify', 'Order Desk'],
    github: 'Create-and-Source/eastwood-store',
  },
  {
    id: 'clublumen',
    name: 'Club Lumen',
    category: 'E-Commerce',
    tagline: 'Desert-Disco Morning Rave Merch',
    description: 'Merch store for Phoenix morning rave brand — hoodies, crop tees, tumblers, tote bags. Full dropshipping fulfillment, zero inventory held.',
    url: 'https://clublumen-store.vercel.app',
    tech: ['React', 'Stripe', 'Order Desk', 'Dropshipping'],
    github: 'Create-and-Source/clublumen-store',
  },
  {
    id: 'shift',
    name: 'Shift',
    category: 'E-Commerce',
    tagline: 'Streetwear Dropshipping',
    description: 'Streetwear brand store with Order Desk fulfillment and Stripe Connect split payments between brand owner and C&S.',
    url: 'https://shift-store.vercel.app',
    tech: ['React', 'Stripe Connect', 'Order Desk'],
    github: 'Create-and-Source/shift-store',
  },
  {
    id: 'une3q',
    name: 'UNE3Q LLC',
    category: 'E-Commerce',
    tagline: 'Handmade Jewelry & Art',
    description: 'E-commerce store for handmade jewelry, art, and home decor with Supabase backend, full admin panel, and inventory management.',
    url: 'https://une3q-store.vercel.app',
    tech: ['React', 'Supabase', 'Admin Panel'],
    github: 'Create-and-Source/une3q-store',
  },
  {
    id: 'stefs',
    name: "Stef's Kitchen",
    category: 'E-Commerce',
    tagline: 'Where The Hooks Get Cooked',
    description: 'Merch store and artist site for $tef the Chef — viral jingle creator from Jackson, MS. Tees, hoodies, varsity jacket. Shopify integration.',
    url: 'https://stefs-kitchen.vercel.app/home',
    tech: ['React', 'Shopify', 'Framer Motion'],
    github: 'Create-and-Source/stefs-kitchen',
  },
  // Client Websites
  {
    id: 'brickroad',
    name: 'Brick Road Media',
    category: 'Client Website',
    tagline: 'Videography Portfolio',
    description: 'Portfolio site for Cameron Jacobs — videography showcase with modern design, video embeds, and contact integration.',
    url: 'https://brickroad-website.vercel.app',
    tech: ['React', 'Vite', 'Supabase'],
    github: 'Create-and-Source/brickroad-website',
  },
  {
    id: 'sonoran',
    name: 'Sonoran Family Concierge',
    category: 'Client Website',
    tagline: 'Senior Care & Nanny Services',
    description: 'Full service website with SEO optimization, Google Search Console verified, custom domain — senior care and nanny placement in Scottsdale.',
    url: 'https://sonoranfamilyconcierge.com',
    tech: ['React', 'SEO', 'Google Search Console', 'Custom Domain'],
    github: 'Create-and-Source/sonoran-senior-concierge',
  },
  {
    id: 'motionalsoul',
    name: 'Motional Soul',
    category: 'Client Website',
    tagline: 'GYROTONIC & Pilates Training',
    description: 'Personal training platform for Natasha Rachelle — GYROTONIC, Pilates, and Barre training with class scheduling and instructor profile.',
    url: 'https://motionalsoul.vercel.app',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'Create-and-Source/motionalsoul',
  },
  // Wellness & Lifestyle
  {
    id: 'rewire',
    name: 'REWIRE',
    category: 'Wellness App',
    tagline: 'Neural Recovery Companion',
    description: 'Sobriety tracker, dream journal, visualization tools, and Neville Goddard techniques for neural pathway recovery.',
    url: 'https://rewire-app-kappa.vercel.app',
    tech: ['React', 'Supabase', 'Vite'],
    github: 'Create-and-Source/rewire-app',
  },
  {
    id: 'personaltrainer',
    name: 'FORGE Performance',
    category: 'Wellness App',
    tagline: 'Personal Training Platform',
    description: 'Workout builder with ExerciseDB API integration, warm taupe design system, trainer profiles, and exercise library.',
    url: 'https://personaltrainer-alpha.vercel.app',
    tech: ['React', 'ExerciseDB API', 'Vite'],
    github: 'Create-and-Source/personaltrainer',
  },
  {
    id: 'xpro',
    name: 'XPRO Events',
    category: 'Wellness App',
    tagline: 'Event Management',
    description: 'Event management app with Stitch design system, pass management, and comprehensive event screens.',
    url: 'https://xpro-app-blue.vercel.app',
    tech: ['React', 'Vite'],
    github: 'Create-and-Source/xpro-app',
  },
  {
    id: 'heytovah',
    name: 'Hey Tovah',
    category: 'Social App',
    tagline: 'TikTok Live Q&A Companion',
    description: 'Anonymous question submission for TikTok live streams with live moderation panel and daisy-themed design.',
    url: 'https://hey-tovah.vercel.app',
    tech: ['React', 'Supabase', 'Realtime'],
    github: 'Create-and-Source/hey-tovah',
  },
  // Agency & Demo Platforms
  {
    id: 'brandsbystatus',
    name: 'Brands By Status',
    category: 'Agency Platform',
    tagline: 'Merch Stores for Influencers',
    description: 'Agency site showcasing merch store creation for influencers — AI product photos, custom stores, revenue share model.',
    url: 'https://brandsbystatus.vercel.app',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'Create-and-Source/brandsbystatus',
  },
  {
    id: 'creativejazz',
    name: 'Creative Jazz LLC',
    category: 'Agency Platform',
    tagline: 'Social Media Agency Demo',
    description: '4-role interactive SPA with shared state — social media marketing agency platform with campaign management and analytics.',
    url: 'https://creative-jazz.vercel.app',
    tech: ['React', 'Shared State', 'Multi-Role'],
    github: 'Create-and-Source/creative-jazz',
  },
  {
    id: 'media4you',
    name: 'Media4You',
    category: 'Agency Platform',
    tagline: '5-Role Media Company Platform',
    description: 'Full agency platform for Sabrina & Jaden\'s media company — 5 distinct user roles, campaign management, ~4500 line single-file application.',
    url: 'https://media4you.vercel.app',
    tech: ['React', 'Multi-Role', 'Vite'],
    github: 'Create-and-Source/media4you',
  },
  {
    id: 'medspa',
    name: 'MedSpa Platform',
    category: 'Agency Platform',
    tagline: 'White-Label Medspa Software',
    description: '22-page white-label medspa management platform — appointments, patients, payments, charting, inventory, and analytics.',
    url: 'https://medspa-platform.vercel.app',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'Create-and-Source/medspa-platform',
  },
  {
    id: 'makayla',
    name: "Makayla Me'chelle",
    category: 'Client Platform',
    tagline: 'Talent Command Center',
    description: 'Model portfolio and self-management dashboard — talent command center for bookings, portfolio, and career management.',
    url: 'https://makayla-app.vercel.app',
    tech: ['React', 'Vite', 'Supabase'],
    github: 'tovahmarx/makayla-app',
  },
  // Design & Branding
  {
    id: 'createandsource',
    name: 'Create & Source',
    category: 'Portfolio Site',
    tagline: 'Studio Blonde Editorial Design',
    description: 'Company portfolio site with editorial design language — showcases client stores, lookbook, services, and contact form.',
    url: 'https://createandsource-website.vercel.app',
    tech: ['React', 'Framer Motion', 'Vite'],
    github: 'Create-and-Source/createandsource-website',
  },
  {
    id: 'getstoa',
    name: 'Get Stoa',
    category: 'Design Showcase',
    tagline: "The Seller's Platform",
    description: 'Interactive "I am a..." selector with browser frame showcases, feature bubbles, and animated descriptions.',
    url: 'https://getstoa.vercel.app',
    tech: ['React', 'Framer Motion', 'Vite'],
    github: 'Create-and-Source/getstoa',
  },
  {
    id: 'getstoa-app',
    name: 'Stoa App',
    category: 'Design Showcase',
    tagline: 'Dark Editorial Experience',
    description: 'Dark editorial design — full-bleed photography, botanical/moody imagery, Inter font, premium minimal aesthetic.',
    url: 'https://getstoa-app.vercel.app',
    tech: ['React', 'Dark Theme', 'Vite'],
    github: 'Create-and-Source/getstoa-app',
  },
  {
    id: 'continuum',
    name: 'Continuum Club',
    category: 'Design Showcase',
    tagline: 'Dark Mode Design System',
    description: 'Design reference — #0D0D0D background, Inter 900 weight, all-caps typography, grayscale images, Framer Motion animations.',
    url: 'https://continuum-club.vercel.app',
    tech: ['React', 'Framer Motion', 'Design System'],
    github: 'Create-and-Source/continuum-club',
  },
]

const categories = ['All', 'AI Platform', 'AI Product', 'Client Platform', 'Client Website', 'E-Commerce', 'Wellness App', 'Social App', 'Agency Platform', 'Portfolio Site', 'Design Showcase']

/* ═══════════════════════════════════════════════════════════
   STATS
   ═══════════════════════════════════════════════════════════ */
const stats = [
  { number: '46+', label: 'Repositories' },
  { number: '27', label: 'Live Apps' },
  { number: '4', label: 'Chrome Extensions' },
  { number: '8+', label: 'API Integrations' },
]

/* ═══════════════════════════════════════════════════════════
   BROWSER FRAME COMPONENT
   ═══════════════════════════════════════════════════════════ */
function BrowserFrame({ project, index }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <motion.div
      className={`project-card ${project.highlight ? 'highlighted' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
    >
      {/* Browser Chrome */}
      <div className="browser-chrome">
        <div className="browser-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="browser-url">
          <span className="url-text">{project.url.replace('https://', '')}</span>
        </div>
      </div>

      {/* Iframe Content */}
      <div className="browser-viewport">
        {!loaded && !error && (
          <div className="iframe-loading">
            <div className="loading-spinner" />
            <span>Loading {project.name}...</span>
          </div>
        )}
        {error ? (
          <div className="iframe-error">
            <span className="error-icon">~</span>
            <span>{project.name}</span>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="visit-link">Visit Site</a>
          </div>
        ) : (
          <iframe
            src={project.url}
            title={project.name}
            className={`project-iframe ${loaded ? 'loaded' : ''}`}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
          />
        )}
      </div>

      {/* Project Info */}
      <div className="project-info">
        <div className="project-header">
          <div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>
          <span className="project-category">{project.category}</span>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Site <span className="arrow">&rarr;</span>
          </a>
          <a href={`https://github.com/${project.github}`} target="_blank" rel="noopener noreferrer" className="project-link github-link">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

/* ═══════════════════════════════════════════════════════════
   CHROME EXTENSIONS SECTION
   ═══════════════════════════════════════════════════════════ */
const extensions = [
  { name: 'Sebastian AI', description: 'Side panel AI copilot — 5 tab workers observe browsing context, feed data to Sebastian AI for progressive learning', tech: 'Manifest V3, Side Panel, 5 Workers' },
  { name: 'Alibaba Importer', description: 'One-click product import from Alibaba supplier pages directly into MerchOS', tech: 'Manifest V3, Content Scripts' },
  { name: 'SiteScout', description: 'CRM-connected browser tool for prospecting and site analysis during outreach', tech: 'Manifest V3, Side Panel' },
  { name: 'MerchOS Extension', description: 'Product import and management from any supplier website into the platform', tech: 'Manifest V3, Content Scripts' },
]

/* ═══════════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

  return (
    <div className="app">
      {/* HERO */}
      <header className="hero">
        <motion.div className="hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="hero-label">Portfolio</p>
          <h1 className="hero-title">
            Tovah Marx
          </h1>
          <p className="hero-subtitle">
            46+ repositories. 27 live applications. 4 Chrome extensions. 8+ API integrations.
            <br />
            Built with Claude Code, shipped on Vercel, powered by Supabase.
          </p>
          <div className="hero-links">
            <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer" className="hero-link">GitHub Organization</a>
            <a href="mailto:Tovah.Marx@gmail.com" className="hero-link secondary">Tovah.Marx@gmail.com</a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div className="stats-row" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
          {stats.map((s, i) => (
            <div key={i} className="stat">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </header>

      {/* CHROME EXTENSIONS */}
      <section className="extensions-section">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label">Chrome Extensions</p>
          <h2 className="section-title">4 Published Extensions — Manifest V3</h2>
        </motion.div>
        <div className="extensions-grid">
          {extensions.map((ext, i) => (
            <motion.div key={i} className="extension-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="ext-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M3 9h18"/></svg>
              </div>
              <h3 className="ext-name">{ext.name}</h3>
              <p className="ext-desc">{ext.description}</p>
              <span className="ext-tech">{ext.tech}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="filter-section">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label">Live Applications</p>
          <h2 className="section-title">Every project, live and embedded</h2>
        </motion.div>
        <div className="filter-bar">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
              {cat !== 'All' && <span className="filter-count">{projects.filter(p => p.category === cat).length}</span>}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="projects-section">
        <AnimatePresence mode="popLayout">
          <div className="projects-grid">
            {filtered.map((project, i) => (
              <BrowserFrame key={project.id} project={project} index={i} />
            ))}
          </div>
        </AnimatePresence>
      </section>

      {/* TECH STACK SUMMARY */}
      <section className="stack-section">
        <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="section-label">Built With</p>
          <h2 className="section-title">Tech stack across all projects</h2>
        </motion.div>
        <div className="stack-grid">
          {[
            { label: 'AI Development', items: 'Claude Code, Claude API, OpenAI API' },
            { label: 'Frontend', items: 'React, Vite, Next.js, TypeScript, JavaScript, Astro' },
            { label: 'Backend', items: 'Supabase, AWS Lambda, DynamoDB, API Gateway' },
            { label: 'Payments', items: 'Stripe, Stripe Connect, Square API' },
            { label: 'APIs', items: 'Gmail, SAGE, Printify, Alibaba, SSActivewear, Fulfill Engine, Resend, ExerciseDB' },
            { label: 'Deployment', items: 'Vercel (CI/CD), GitHub Organizations, Custom Domains' },
            { label: 'Extensions', items: 'Chrome Manifest V3, Side Panels, Background Workers, Content Scripts' },
            { label: 'Design', items: 'Framer Motion, Design Systems, Responsive UI, Accessibility' },
          ].map((stack, i) => (
            <motion.div key={i} className="stack-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
              <h3 className="stack-label">{stack.label}</h3>
              <p className="stack-items">{stack.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <p className="footer-name">Tovah Marx</p>
            <p className="footer-sub">Scottsdale, AZ &middot; Tovah.Marx@gmail.com &middot; 619-955-0507</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://createandsource-website.vercel.app" target="_blank" rel="noopener noreferrer">Create & Source</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
