import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════
   PROJECT DATA
   ═══════════════════════════════════════════════════════════ */
const projects = [
  { id: 'merchos', name: 'MerchOS', category: 'AI Platform', tagline: 'AI-Powered Merchandise Sourcing', description: 'Full SaaS platform where AI handles client communication, product sourcing, quoting, invoicing, and supplier management. 8 API integrations working together.', url: 'https://merchos-app.vercel.app', tech: ['React', 'TypeScript', 'Supabase', 'Stripe Connect', 'Gmail API', 'SAGE', 'OpenAI', 'Printify'] },
  { id: 'olive', name: 'Olive', category: 'AI Product', tagline: 'Personal AI Companion', description: 'Conversational AI with journal, visualizations, task management, Gmail and GitHub integration, and text-to-speech.', url: 'https://askolive.vercel.app', tech: ['React', 'Claude API', 'TTS', 'Gmail API', 'GitHub API', 'Supabase'] },
  { id: 'darksky-admin', name: 'Dark Sky Admin', category: 'Client Platform', tagline: 'Museum Operations System', description: 'Admin platform for the International Dark-Sky Discovery Center — inventory, Square POS, ticketing, gift shop, staff management, and AI analytics.', url: 'https://darksky-admin.vercel.app', tech: ['React', 'Supabase', 'Square API', 'AWS Lambda', 'DynamoDB', 'Webhooks'] },
  { id: 'darksky-website', name: 'Dark Sky Website', category: 'Client Website', tagline: 'International Dark-Sky Discovery Center', description: 'Public-facing museum website — gold design system, real photography, IDSDC branding, mobile-responsive.', url: 'https://darksky-website.vercel.app', tech: ['React', 'Vite', 'Framer Motion'] },
  { id: 'cs-platform', name: 'CS Platform', category: 'AI Platform', tagline: 'Business Operations Dashboard', description: 'Internal ops tool with real Stripe data ($52K tracked), Gmail inbox, SAGE product search, supplier management.', url: 'https://cs-platform-app.vercel.app', tech: ['React', 'TypeScript', 'Stripe', 'Gmail API', 'SAGE API', 'Supabase'] },
  { id: 'nutanix', name: 'Nutanix Store', category: 'E-Commerce', tagline: 'Corporate Employee Merchandise', description: 'Enterprise merch store for Fortune 500 tech company — employee request/approval workflows, fulfillment tracking, admin panel.', url: 'https://nutanix-store.vercel.app', tech: ['React', 'Supabase', 'Admin Dashboard'] },
  { id: 'eastwood', name: 'Eastwood Co. Supply', category: 'E-Commerce', tagline: 'Western Streetwear', description: 'Full apparel line for content creator @eastwood0100 — AI-generated lifestyle photography, western streetwear aesthetic.', url: 'https://eastwood-store.vercel.app', tech: ['React', 'Stripe', 'Printify', 'Order Desk'] },
  { id: 'clublumen', name: 'Club Lumen', category: 'E-Commerce', tagline: 'Desert-Disco Morning Rave Merch', description: 'Merch store for Phoenix morning rave brand — full dropshipping fulfillment, zero inventory held.', url: 'https://clublumen-store.vercel.app', tech: ['React', 'Stripe', 'Order Desk', 'Dropshipping'] },
  { id: 'shift', name: 'Shift', category: 'E-Commerce', tagline: 'Streetwear Dropshipping', description: 'Streetwear brand with Order Desk fulfillment and Stripe Connect split payments.', url: 'https://shift-store.vercel.app', tech: ['React', 'Stripe Connect', 'Order Desk'] },
  { id: 'une3q', name: 'UNE3Q LLC', category: 'E-Commerce', tagline: 'Handmade Jewelry & Art', description: 'E-commerce for handmade jewelry, art, and home decor with Supabase backend and admin panel.', url: 'https://une3q-store.vercel.app', tech: ['React', 'Supabase', 'Admin Panel'] },
  { id: 'stefs', name: "Stef's Kitchen", category: 'E-Commerce', tagline: 'Where The Hooks Get Cooked', description: 'Merch store for $tef the Chef — viral jingle creator. Tees, hoodies, varsity jacket.', url: 'https://stefs-kitchen.vercel.app/home', tech: ['React', 'Shopify', 'Framer Motion'] },
  { id: 'brickroad', name: 'Brick Road Media', category: 'Client Website', tagline: 'Videography Portfolio', description: 'Portfolio site for Cameron Jacobs — videography showcase, modern design, contact integration.', url: 'https://brickroad-website.vercel.app', tech: ['React', 'Vite', 'Supabase'] },
  { id: 'sonoran', name: 'Sonoran Family Concierge', category: 'Client Website', tagline: 'Senior Care & Nanny Services', description: 'Full SEO-optimized site with Google Search Console, custom domain — senior care in Scottsdale.', url: 'https://sonoranfamilyconcierge.com', tech: ['React', 'SEO', 'Google Search Console'] },
  { id: 'motionalsoul', name: 'Motional Soul', category: 'Client Website', tagline: 'GYROTONIC & Pilates Training', description: 'Training platform for Natasha Rachelle — GYROTONIC, Pilates, and Barre with scheduling.', url: 'https://motionalsoul.vercel.app', tech: ['React', 'Vite', 'Framer Motion'] },
  { id: 'rewire', name: 'REWIRE', category: 'Wellness App', tagline: 'Neural Recovery Companion', description: 'Sobriety tracker, dream journal, visualization tools for neural pathway recovery.', url: 'https://rewire-app-kappa.vercel.app', tech: ['React', 'Supabase', 'Vite'] },
  { id: 'personaltrainer', name: 'FORGE Performance', category: 'Wellness App', tagline: 'Personal Training Platform', description: 'Workout builder with ExerciseDB API, trainer profiles, and exercise library.', url: 'https://personaltrainer-alpha.vercel.app', tech: ['React', 'ExerciseDB API', 'Vite'] },
  { id: 'xpro', name: 'XPRO Events', category: 'Wellness App', tagline: 'Event Management', description: 'Event management app with Stitch design system and pass management.', url: 'https://xpro-app-blue.vercel.app', tech: ['React', 'Vite'] },
  { id: 'heytovah', name: 'Hey Tovah', category: 'Social App', tagline: 'TikTok Live Q&A Companion', description: 'Anonymous question submission for TikTok live with moderation panel.', url: 'https://hey-tovah.vercel.app', tech: ['React', 'Supabase', 'Realtime'] },
  { id: 'brandsbystatus', name: 'Brands By Status', category: 'Agency Platform', tagline: 'Merch Stores for Influencers', description: 'Agency site — AI product photos, custom stores, revenue share model.', url: 'https://brandsbystatus.vercel.app', tech: ['React', 'Vite', 'Framer Motion'] },
  { id: 'creativejazz', name: 'Creative Jazz LLC', category: 'Agency Platform', tagline: 'Social Media Agency Demo', description: '4-role interactive SPA with shared state and campaign management.', url: 'https://creative-jazz.vercel.app', tech: ['React', 'Shared State', 'Multi-Role'] },
  { id: 'media4you', name: 'Media4You', category: 'Agency Platform', tagline: '5-Role Media Company Platform', description: 'Full agency platform — 5 user roles, campaign management, ~4500 line application.', url: 'https://media4you.vercel.app', tech: ['React', 'Multi-Role', 'Vite'] },
  { id: 'medspa', name: 'MedSpa Platform', category: 'Agency Platform', tagline: 'White-Label Medspa Software', description: '22-page medspa management — appointments, patients, payments, charting, inventory.', url: 'https://medspa-platform.vercel.app', tech: ['HTML', 'CSS', 'JavaScript'] },
  { id: 'makayla', name: "Makayla Me'chelle", category: 'Client Platform', tagline: 'Talent Command Center', description: 'Model portfolio and self-management dashboard for bookings and career management.', url: 'https://makayla-app.vercel.app', tech: ['React', 'Vite', 'Supabase'] },
  { id: 'createandsource', name: 'Create & Source', category: 'Portfolio Site', tagline: 'Studio Blonde Editorial Design', description: 'Company portfolio — editorial design, client stores lookbook, services.', url: 'https://createandsource-website.vercel.app', tech: ['React', 'Framer Motion', 'Vite'] },
  { id: 'getstoa', name: 'Get Stoa', category: 'Design Showcase', tagline: "The Seller's Platform", description: 'Interactive selector with browser frame showcases and animated features.', url: 'https://getstoa.vercel.app', tech: ['React', 'Framer Motion', 'Vite'] },
  { id: 'getstoa-app', name: 'Stoa App', category: 'Design Showcase', tagline: 'Dark Editorial Experience', description: 'Dark editorial — full-bleed photography, botanical imagery, premium minimal.', url: 'https://getstoa-app.vercel.app', tech: ['React', 'Dark Theme', 'Vite'] },
  { id: 'continuum', name: 'Continuum Club', category: 'Design Showcase', tagline: 'Dark Mode Design System', description: 'Design reference — #0D0D0D, Inter 900, all-caps, grayscale, Framer Motion.', url: 'https://continuum-club.vercel.app', tech: ['React', 'Framer Motion', 'Design System'] },
]

const categories = ['All', 'AI Platform', 'AI Product', 'Client Platform', 'Client Website', 'E-Commerce', 'Wellness App', 'Social App', 'Agency Platform', 'Portfolio Site', 'Design Showcase']

const extensions = [
  { name: 'Sebastian AI', desc: 'Agentic AI copilot with 5 tab workers that observe browsing context and progressively learn business operations', tech: 'Side Panel · 5 Workers' },
  { name: 'Alibaba Importer', desc: 'One-click product import from Alibaba supplier pages directly into the platform', tech: 'Content Scripts' },
  { name: 'SiteScout', desc: 'CRM-connected prospecting tool for real-time site analysis during outreach', tech: 'Side Panel' },
  { name: 'MerchOS Extension', desc: 'Import and manage products from any supplier website', tech: 'Content Scripts' },
]

const techStack = [
  { label: 'AI', items: 'Claude Code, Claude API, OpenAI' },
  { label: 'Frontend', items: 'React, Vite, Next.js, TypeScript' },
  { label: 'Backend', items: 'Supabase, AWS Lambda, DynamoDB' },
  { label: 'Payments', items: 'Stripe, Stripe Connect, Square' },
  { label: 'APIs', items: 'Gmail, SAGE, Printify, Alibaba, Resend' },
  { label: 'Deploy', items: 'Vercel, GitHub Organizations' },
  { label: 'Extensions', items: 'Chrome Manifest V3' },
  { label: 'Design', items: 'Framer Motion, Design Systems' },
]

/* ═══════════════════════════════════════════════════════════
   PROJECT CARD — Case study style, interactive iframe
   ═══════════════════════════════════════════════════════════ */
function ProjectCard({ project, index }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [interacting, setInteracting] = useState(false)

  const displayIndex = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      className="case"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Case study header */}
      <div className="case-header">
        <div className="case-meta">
          <span className="case-index">{displayIndex}</span>
          <span className="case-divider">/</span>
          <span className="case-category">{project.category}</span>
        </div>
        <h3 className="case-name">{project.name}</h3>
        <p className="case-tagline">{project.tagline}</p>
      </div>

      {/* Interactive browser embed */}
      <div
        className={`case-browser ${interacting ? 'active' : ''}`}
        onMouseEnter={() => setInteracting(true)}
        onMouseLeave={() => setInteracting(false)}
      >
        <div className="case-browser-bar">
          <div className="bar-dots"><span /><span /><span /></div>
          <div className="bar-title">{project.name}</div>
          <div className="bar-spacer" />
        </div>
        <div className="case-viewport">
          {!loaded && !error && (
            <div className="case-loading">
              <div className="case-loading-bar" />
            </div>
          )}
          {error ? (
            <div className="case-error">
              <p className="case-error-name">{project.name}</p>
              <p className="case-error-tag">{project.tagline}</p>
            </div>
          ) : (
            <iframe
              src={project.url}
              title={project.name}
              className={`case-iframe ${loaded ? 'show' : ''}`}
              sandbox="allow-scripts allow-same-origin allow-popups"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
            />
          )}
          {!interacting && loaded && (
            <div className="case-hover-hint">
              <span>Scroll to explore</span>
            </div>
          )}
        </div>
      </div>

      {/* Case study details */}
      <div className="case-details">
        <p className="case-desc">{project.description}</p>
        <div className="case-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="case-tech-item">{t}</span>
          ))}
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

  return (
    <div className="portfolio">
      {/* ── HEADER ── */}
      <header className="site-header">
        <div className="header-inner">
          <span className="header-name">Tovah Marx</span>
          <nav className="header-nav">
            <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:Tovah.Marx@gmail.com">Contact</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <motion.div className="hero-badge" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <span>Scottsdale, AZ</span>
          </motion.div>
          <motion.h1 className="hero-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            Product Designer<br />& Builder
          </motion.h1>
          <motion.p className="hero-desc" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            I design, build, and ship production applications using AI-assisted development.
            <br />
            46+ repositories, 27 live applications, and 4 Chrome extensions — all shipped.
          </motion.p>
          <motion.div className="hero-stats" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            {[
              { n: '46+', l: 'Repos' },
              { n: '27', l: 'Live Apps' },
              { n: '4', l: 'Extensions' },
              { n: '8+', l: 'API Integrations' },
            ].map((s, i) => (
              <div key={i} className="hero-stat">
                <span className="hero-stat-n">{s.n}</span>
                <span className="hero-stat-l">{s.l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EXTENSIONS ── */}
      <section className="section extensions">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-label">Chrome Extensions</span>
            <h2 className="section-title">4 Published Extensions</h2>
            <p className="section-sub">Chrome Manifest V3 — side panels, background workers, content scripts</p>
          </div>
          <div className="ext-grid">
            {extensions.map((ext, i) => (
              <motion.div key={i} className="ext-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <div className="ext-top">
                  <span className="ext-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ext-tech">{ext.tech}</span>
                </div>
                <h3 className="ext-name">{ext.name}</h3>
                <p className="ext-desc">{ext.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section projects">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-label">Work</span>
            <h2 className="section-title">Selected Projects</h2>
          </div>

          <div className="filter-row">
            {categories.map(cat => {
              const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length
              if (count === 0 && cat !== 'All') return null
              return (
                <button key={cat} className={`f-btn ${filter === cat ? 'on' : ''}`} onClick={() => setFilter(cat)}>
                  {cat}
                </button>
              )
            })}
          </div>

          <div className="cases">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── STACK ── */}
      <section className="section stack">
        <div className="section-inner">
          <div className="section-head">
            <span className="section-label">Technology</span>
            <h2 className="section-title">Full Stack</h2>
          </div>
          <div className="stack-grid">
            {techStack.map((s, i) => (
              <motion.div key={i} className="stack-cell" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <span className="stack-key">{s.label}</span>
                <span className="stack-val">{s.items}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-copy">Tovah Marx &middot; Scottsdale, AZ</p>
          <div className="footer-links">
            <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:Tovah.Marx@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
