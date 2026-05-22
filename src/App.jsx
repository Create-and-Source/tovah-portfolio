import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA
   ═══════════════════════════════════════════════════════════ */
const projects = [
  {
    id: 'merchos',
    name: 'MerchOS',
    category: 'AI Platform',
    tagline: 'AI-Powered Merchandise Sourcing',
    description: 'Full SaaS platform where AI handles client communication, product sourcing, quoting, invoicing, and supplier management. 8 API integrations working together.',
    url: 'https://merchos-app.vercel.app',
    tech: ['React', 'TypeScript', 'Supabase', 'Stripe Connect', 'Gmail API', 'SAGE', 'OpenAI', 'Printify'],
    github: 'Create-and-Source/merchos',
  },
  {
    id: 'olive',
    name: 'Olive',
    category: 'AI Product',
    tagline: 'Personal AI Companion',
    description: 'Conversational AI with journal, visualizations, task management, Gmail and GitHub integration, and text-to-speech.',
    url: 'https://askolive.vercel.app',
    tech: ['React', 'Claude API', 'TTS', 'Gmail API', 'GitHub API', 'Supabase'],
    github: 'Create-and-Source/olive-app',
  },
  {
    id: 'darksky-admin',
    name: 'Dark Sky Admin',
    category: 'Client Platform',
    tagline: 'Museum Operations System',
    description: 'Admin platform for the International Dark-Sky Discovery Center — inventory, Square POS, ticketing, gift shop, staff management, and AI analytics.',
    url: 'https://darksky-admin.vercel.app',
    tech: ['React', 'Supabase', 'Square API', 'AWS Lambda', 'DynamoDB', 'Webhooks'],
    github: 'Create-and-Source/DarkSky_client',
  },
  {
    id: 'darksky-website',
    name: 'Dark Sky Website',
    category: 'Client Website',
    tagline: 'International Dark-Sky Discovery Center',
    description: 'Public-facing museum website — gold design system, real photography, IDSDC branding, mobile-responsive.',
    url: 'https://darksky-website.vercel.app',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'Create-and-Source/darksky-website',
  },
  {
    id: 'cs-platform',
    name: 'CS Platform',
    category: 'AI Platform',
    tagline: 'Business Operations Dashboard',
    description: 'Internal ops tool with real Stripe data ($52K tracked), Gmail inbox, SAGE product search, supplier management.',
    url: 'https://cs-platform-app.vercel.app',
    tech: ['React', 'TypeScript', 'Stripe', 'Gmail API', 'SAGE API', 'Supabase'],
    github: 'Create-and-Source/cs-platform',
  },
  {
    id: 'nutanix',
    name: 'Nutanix Store',
    category: 'E-Commerce',
    tagline: 'Corporate Employee Merchandise',
    description: 'Enterprise merch store for Fortune 500 tech company — employee request/approval workflows, fulfillment tracking, admin panel.',
    url: 'https://nutanix-store.vercel.app',
    tech: ['React', 'Supabase', 'Admin Dashboard'],
    github: 'Create-and-Source/nutanix-store',
  },
  {
    id: 'eastwood',
    name: 'Eastwood Co. Supply',
    category: 'E-Commerce',
    tagline: 'Western Streetwear',
    description: 'Full apparel line for content creator @eastwood0100 — AI-generated lifestyle photography, western streetwear aesthetic.',
    url: 'https://eastwood-store.vercel.app',
    tech: ['React', 'Stripe', 'Printify', 'Order Desk'],
    github: 'Create-and-Source/eastwood-store',
  },
  {
    id: 'clublumen',
    name: 'Club Lumen',
    category: 'E-Commerce',
    tagline: 'Desert-Disco Morning Rave Merch',
    description: 'Merch store for Phoenix morning rave brand — full dropshipping fulfillment, zero inventory held.',
    url: 'https://clublumen-store.vercel.app',
    tech: ['React', 'Stripe', 'Order Desk', 'Dropshipping'],
    github: 'Create-and-Source/clublumen-store',
  },
  {
    id: 'shift',
    name: 'Shift',
    category: 'E-Commerce',
    tagline: 'Streetwear Dropshipping',
    description: 'Streetwear brand with Order Desk fulfillment and Stripe Connect split payments.',
    url: 'https://shift-store.vercel.app',
    tech: ['React', 'Stripe Connect', 'Order Desk'],
    github: 'Create-and-Source/shift-store',
  },
  {
    id: 'une3q',
    name: 'UNE3Q LLC',
    category: 'E-Commerce',
    tagline: 'Handmade Jewelry & Art',
    description: 'E-commerce for handmade jewelry, art, and home decor with Supabase backend and admin panel.',
    url: 'https://une3q-store.vercel.app',
    tech: ['React', 'Supabase', 'Admin Panel'],
    github: 'Create-and-Source/une3q-store',
  },
  {
    id: 'stefs',
    name: "Stef's Kitchen",
    category: 'E-Commerce',
    tagline: 'Where The Hooks Get Cooked',
    description: 'Merch store for $tef the Chef — viral jingle creator. Tees, hoodies, varsity jacket.',
    url: 'https://stefs-kitchen.vercel.app/home',
    tech: ['React', 'Shopify', 'Framer Motion'],
    github: 'Create-and-Source/stefs-kitchen',
  },
  {
    id: 'brickroad',
    name: 'Brick Road Media',
    category: 'Client Website',
    tagline: 'Videography Portfolio',
    description: 'Portfolio site for Cameron Jacobs — videography showcase, modern design, contact integration.',
    url: 'https://brickroad-website.vercel.app',
    tech: ['React', 'Vite', 'Supabase'],
    github: 'Create-and-Source/brickroad-website',
  },
  {
    id: 'sonoran',
    name: 'Sonoran Family Concierge',
    category: 'Client Website',
    tagline: 'Senior Care & Nanny Services',
    description: 'Full SEO-optimized site with Google Search Console, custom domain — senior care in Scottsdale.',
    url: 'https://sonoranfamilyconcierge.com',
    tech: ['React', 'SEO', 'Google Search Console'],
    github: 'Create-and-Source/sonoran-senior-concierge',
  },
  {
    id: 'motionalsoul',
    name: 'Motional Soul',
    category: 'Client Website',
    tagline: 'GYROTONIC & Pilates Training',
    description: 'Training platform for Natasha Rachelle — GYROTONIC, Pilates, and Barre with scheduling.',
    url: 'https://motionalsoul.vercel.app',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'Create-and-Source/motionalsoul',
  },
  {
    id: 'rewire',
    name: 'REWIRE',
    category: 'Wellness App',
    tagline: 'Neural Recovery Companion',
    description: 'Sobriety tracker, dream journal, visualization tools for neural pathway recovery.',
    url: 'https://rewire-app-kappa.vercel.app',
    tech: ['React', 'Supabase', 'Vite'],
    github: 'Create-and-Source/rewire-app',
  },
  {
    id: 'personaltrainer',
    name: 'FORGE Performance',
    category: 'Wellness App',
    tagline: 'Personal Training Platform',
    description: 'Workout builder with ExerciseDB API, trainer profiles, and exercise library.',
    url: 'https://personaltrainer-alpha.vercel.app',
    tech: ['React', 'ExerciseDB API', 'Vite'],
    github: 'Create-and-Source/personaltrainer',
  },
  {
    id: 'xpro',
    name: 'XPRO Events',
    category: 'Wellness App',
    tagline: 'Event Management',
    description: 'Event management app with Stitch design system and pass management.',
    url: 'https://xpro-app-blue.vercel.app',
    tech: ['React', 'Vite'],
    github: 'Create-and-Source/xpro-app',
  },
  {
    id: 'heytovah',
    name: 'Hey Tovah',
    category: 'Social App',
    tagline: 'TikTok Live Q&A Companion',
    description: 'Anonymous question submission for TikTok live with moderation panel.',
    url: 'https://hey-tovah.vercel.app',
    tech: ['React', 'Supabase', 'Realtime'],
    github: 'Create-and-Source/hey-tovah',
  },
  {
    id: 'brandsbystatus',
    name: 'Brands By Status',
    category: 'Agency Platform',
    tagline: 'Merch Stores for Influencers',
    description: 'Agency site — AI product photos, custom stores, revenue share model.',
    url: 'https://brandsbystatus.vercel.app',
    tech: ['React', 'Vite', 'Framer Motion'],
    github: 'Create-and-Source/brandsbystatus',
  },
  {
    id: 'creativejazz',
    name: 'Creative Jazz LLC',
    category: 'Agency Platform',
    tagline: 'Social Media Agency Demo',
    description: '4-role interactive SPA with shared state and campaign management.',
    url: 'https://creative-jazz.vercel.app',
    tech: ['React', 'Shared State', 'Multi-Role'],
    github: 'Create-and-Source/creative-jazz',
  },
  {
    id: 'media4you',
    name: 'Media4You',
    category: 'Agency Platform',
    tagline: '5-Role Media Company Platform',
    description: 'Full agency platform — 5 user roles, campaign management, ~4500 line application.',
    url: 'https://media4you.vercel.app',
    tech: ['React', 'Multi-Role', 'Vite'],
    github: 'Create-and-Source/media4you',
  },
  {
    id: 'medspa',
    name: 'MedSpa Platform',
    category: 'Agency Platform',
    tagline: 'White-Label Medspa Software',
    description: '22-page medspa management — appointments, patients, payments, charting, inventory.',
    url: 'https://medspa-platform.vercel.app',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'Create-and-Source/medspa-platform',
  },
  {
    id: 'makayla',
    name: "Makayla Me'chelle",
    category: 'Client Platform',
    tagline: 'Talent Command Center',
    description: 'Model portfolio and self-management dashboard for bookings and career management.',
    url: 'https://makayla-app.vercel.app',
    tech: ['React', 'Vite', 'Supabase'],
    github: 'tovahmarx/makayla-app',
  },
  {
    id: 'createandsource',
    name: 'Create & Source',
    category: 'Portfolio Site',
    tagline: 'Studio Blonde Editorial Design',
    description: 'Company portfolio — editorial design, client stores lookbook, services.',
    url: 'https://createandsource-website.vercel.app',
    tech: ['React', 'Framer Motion', 'Vite'],
    github: 'Create-and-Source/createandsource-website',
  },
  {
    id: 'getstoa',
    name: 'Get Stoa',
    category: 'Design Showcase',
    tagline: "The Seller's Platform",
    description: 'Interactive selector with browser frame showcases and animated features.',
    url: 'https://getstoa.vercel.app',
    tech: ['React', 'Framer Motion', 'Vite'],
    github: 'Create-and-Source/getstoa',
  },
  {
    id: 'getstoa-app',
    name: 'Stoa App',
    category: 'Design Showcase',
    tagline: 'Dark Editorial Experience',
    description: 'Dark editorial — full-bleed photography, botanical imagery, premium minimal.',
    url: 'https://getstoa-app.vercel.app',
    tech: ['React', 'Dark Theme', 'Vite'],
    github: 'Create-and-Source/getstoa-app',
  },
  {
    id: 'continuum',
    name: 'Continuum Club',
    category: 'Design Showcase',
    tagline: 'Dark Mode Design System',
    description: 'Design reference — #0D0D0D, Inter 900, all-caps, grayscale, Framer Motion.',
    url: 'https://continuum-club.vercel.app',
    tech: ['React', 'Framer Motion', 'Design System'],
    github: 'Create-and-Source/continuum-club',
  },
]

const categories = ['All', 'AI Platform', 'AI Product', 'Client Platform', 'Client Website', 'E-Commerce', 'Wellness App', 'Social App', 'Agency Platform', 'Portfolio Site', 'Design Showcase']

const stats = [
  { number: '46+', label: 'Repositories' },
  { number: '27', label: 'Live Applications' },
  { number: '4', label: 'Chrome Extensions' },
  { number: '8+', label: 'API Integrations' },
]

const extensions = [
  { name: 'Sebastian AI', description: '5 tab workers observe browsing context and feed data to an AI copilot that progressively learns your business', tech: 'Manifest V3 · Side Panel · 5 Workers' },
  { name: 'Alibaba Importer', description: 'One-click product import from Alibaba supplier pages directly into MerchOS', tech: 'Manifest V3 · Content Scripts' },
  { name: 'SiteScout', description: 'CRM-connected browser tool for prospecting and site analysis during outreach', tech: 'Manifest V3 · Side Panel' },
  { name: 'MerchOS Extension', description: 'Import and manage products from any supplier website into the platform', tech: 'Manifest V3 · Content Scripts' },
]

const techStack = [
  { label: 'AI', items: 'Claude Code · Claude API · OpenAI' },
  { label: 'Frontend', items: 'React · Vite · Next.js · TypeScript' },
  { label: 'Backend', items: 'Supabase · AWS Lambda · DynamoDB' },
  { label: 'Payments', items: 'Stripe · Stripe Connect · Square' },
  { label: 'APIs', items: 'Gmail · SAGE · Printify · Alibaba · Resend' },
  { label: 'Deploy', items: 'Vercel · GitHub Orgs · Custom Domains' },
  { label: 'Extensions', items: 'Chrome Manifest V3 · Side Panels' },
  { label: 'Design', items: 'Framer Motion · Design Systems' },
]

/* ═══════════════════════════════════════════════════════════
   BROWSER FRAME — Full-width, editorial
   ═══════════════════════════════════════════════════════════ */
function BrowserFrame({ project, index }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <motion.article
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Project Label */}
      <div className="project-label-row">
        <span className="project-number">{'0' + (index + 1)}</span>
        <span className="project-category-tag">{project.category}</span>
      </div>

      {/* Browser Chrome */}
      <motion.div className="browser-frame" style={{ y }}>
        <div className="browser-chrome">
          <div className="browser-dots">
            <span className="dot" /><span className="dot" /><span className="dot" />
          </div>
          <div className="browser-url-bar">
            <svg className="lock-icon" width="10" height="10" viewBox="0 0 10 10" fill="none"><rect x="1" y="5" width="8" height="4.5" rx="1" fill="currentColor"/><path d="M3 5V3.5a2 2 0 014 0V5" stroke="currentColor" strokeWidth="1" fill="none"/></svg>
            <span>{project.url.replace('https://', '')}</span>
          </div>
        </div>
        <div className="browser-viewport">
          {!loaded && !error && (
            <div className="iframe-loading">
              <div className="loading-pulse" />
            </div>
          )}
          {error ? (
            <div className="iframe-fallback">
              <h3>{project.name}</h3>
              <p>{project.tagline}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">Visit Site &rarr;</a>
            </div>
          ) : (
            <iframe
              src={project.url}
              title={project.name}
              className={`project-iframe ${loaded ? 'visible' : ''}`}
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
            />
          )}
        </div>
      </motion.div>

      {/* Project Details */}
      <div className="project-details">
        <div className="project-details-left">
          <h3 className="project-name">{project.name}</h3>
          <p className="project-tagline-text">{project.tagline}</p>
          <p className="project-desc">{project.description}</p>
        </div>
        <div className="project-details-right">
          <div className="project-tech-list">
            {project.tech.map((t, i) => (
              <span key={i} className="tech-pill">{t}</span>
            ))}
          </div>
          <div className="project-actions">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="action-link primary">Visit Site &rarr;</a>
            <a href={`https://github.com/${project.github}`} target="_blank" rel="noopener noreferrer" className="action-link">GitHub &rarr;</a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

/* ═══════════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div className="app">
      {/* ── HERO ── */}
      <header className="hero" ref={heroRef}>
        <motion.div className="hero-inner" style={{ opacity: heroOpacity }}>
          <motion.p className="hero-eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Product Portfolio
          </motion.p>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
            I design products, <em>build them with AI,</em> and ship them to real users.
          </motion.h1>
          <motion.p className="hero-sub" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            Tovah Marx &middot; Scottsdale, AZ
          </motion.p>
          <motion.div className="hero-ctas" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer" className="btn-primary">View GitHub</a>
            <a href="mailto:Tovah.Marx@gmail.com" className="btn-outline">Get In Touch</a>
          </motion.div>
        </motion.div>
      </header>

      {/* ── STATS TICKER ── */}
      <div className="ticker-bar">
        <div className="ticker-track">
          {[...Array(3)].map((_, r) =>
            stats.map((s, i) => (
              <span key={`${r}-${i}`} className="ticker-stat">
                <strong>{s.number}</strong> {s.label}
                <span className="ticker-sep">&bull;</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── INTRO QUOTE ── */}
      <section className="intro-section">
        <motion.div className="intro-inner" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
          <p className="intro-eyebrow">The Work</p>
          <h2 className="intro-headline">
            46+ repositories. 27 live applications. 4 Chrome extensions.
            <br />
            <em>Every one built with Claude Code, shipped on Vercel.</em>
          </h2>
        </motion.div>
      </section>

      {/* ── CHROME EXTENSIONS ── */}
      <section className="extensions-section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-eyebrow">Chrome Extensions</p>
            <h2 className="section-title">4 published extensions &mdash; <em>Manifest V3</em></h2>
          </motion.div>
          <div className="ext-grid">
            {extensions.map((ext, i) => (
              <motion.div key={i} className="ext-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}>
                <span className="ext-number">{'0' + (i + 1)}</span>
                <h3 className="ext-name">{ext.name}</h3>
                <p className="ext-desc">{ext.description}</p>
                <p className="ext-tech">{ext.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER + PROJECTS ── */}
      <section className="projects-section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-eyebrow">Live Applications</p>
            <h2 className="section-title">Every project, <em>live and embedded</em></h2>
          </motion.div>

          <div className="filter-bar">
            {categories.map(cat => {
              const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length
              return (
                <button key={cat} className={`filter-btn ${filter === cat ? 'active' : ''}`} onClick={() => setFilter(cat)}>
                  {cat} <span className="filter-count">{count}</span>
                </button>
              )
            })}
          </div>

          <div className="projects-list">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <BrowserFrame key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="stack-section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="section-eyebrow">Built With</p>
            <h2 className="section-title">The <em>full stack</em></h2>
          </motion.div>
          <div className="stack-row">
            {techStack.map((s, i) => (
              <motion.div key={i} className="stack-item" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <span className="stack-label">{s.label}</span>
                <span className="stack-value">{s.items}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="footer-name">Tovah Marx</span>
            <span className="footer-loc">Scottsdale, AZ &middot; Tovah.Marx@gmail.com &middot; 619-955-0507</span>
          </div>
          <div className="footer-nav">
            <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://createandsource-website.vercel.app" target="_blank" rel="noopener noreferrer">Create & Source</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
