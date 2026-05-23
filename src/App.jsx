import { motion } from 'framer-motion'

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */
const experience = [
  {
    role: 'Founder & Product Lead',
    company: 'Brands By Status LLC / Create & Source',
    period: '2025 - Present',
    points: [
      'Designed, built, and shipped 46+ repositories and 27 live production applications using Claude Code as my primary development tool',
      'Built Sebastian AI, an agentic AI concierge with a Chrome extension that observes user context across 5 browser tabs, learns business operations progressively, and automates workflows',
      'Shipped MerchOS, an AI-powered merchandise sourcing platform integrating 8 APIs (Stripe Connect, Gmail, SAGE, OpenAI, Printify, Alibaba, SSActivewear, Fulfill Engine)',
      'Built 4 Chrome extensions using Manifest V3 including side panels, background workers, and content scripts',
      'Conducted product discovery with real clients including a museum (IDSDC/Dark Sky), Fortune 500 (Nutanix), and 7+ independent businesses',
      'Wrote product specifications, competitive analyses, design systems, and phased build roadmaps for every major project',
      'Managed a GitHub organization with 46+ repositories and automated CI/CD deployments via Vercel',
    ],
  },
  {
    role: 'Business Development Manager',
    company: 'Commercial Capital Co',
    period: '2022 - 2025',
    points: [
      'Designed and implemented a company-wide Salesforce system, streamlining operations from lead generation through deal completion',
      'Built automated workflow systems that improved client engagement and operational efficiency',
      'Led employee onboarding by configuring cross-departmental tooling and systems',
    ],
  },
  {
    role: 'Life Insurance Sales & AI System Design',
    company: 'Family First Life',
    period: '2020 - 2022',
    points: [
      'Managed a high-performing sales team while designing an AI-powered CRM system with automated workflows',
      'Created custom tools to track leads, follow-ups, and client interactions',
    ],
  },
  {
    role: 'Real Estate Agent',
    company: 'Self-Employed',
    period: '2020 - 2022',
    points: [
      '20+ homes sold in the first year, 500% above industry average',
      'Trained and mentored new sales consultants',
    ],
  },
]

const featuredProjects = [
  {
    name: 'Sebastian AI',
    type: 'Agentic AI + Chrome Extension',
    desc: 'An AI concierge that learns any business through observation. Chrome extension with 5 tab workers feeds context to a web app that builds itself around your operations. Progressive knowledge building, self-healing database creation.',
    tech: 'Claude API, Chrome Manifest V3, React, Supabase',
    github: 'Create-and-Source/sebastian-extension',
  },
  {
    name: 'MerchOS',
    type: 'AI SaaS Platform',
    desc: 'AI-powered merchandise sourcing platform where AI handles client communication, product sourcing, quoting, invoicing, and supplier management. 8 API integrations working as one system.',
    tech: 'React, TypeScript, Supabase, Stripe Connect, Gmail API, SAGE, OpenAI, Printify',
    github: 'Create-and-Source/merchos',
  },
  {
    name: 'Dark Sky Admin',
    type: 'Client Operations Platform',
    desc: 'Museum operations system for the International Dark-Sky Discovery Center. Inventory management (56+ items), Square POS integration with webhooks, ticketing, gift shop, staff management, AI-powered analytics.',
    tech: 'React, Supabase, Square API, AWS Lambda, DynamoDB, Webhooks',
    github: 'Create-and-Source/DarkSky_client',
  },
  {
    name: 'Nutanix Corporate Store',
    type: 'Enterprise E-Commerce',
    desc: 'Employee merchandise store for Fortune 500 tech company. Request/approval workflows, fulfillment tracking, admin management panel.',
    tech: 'React, Supabase, Admin Dashboard',
    github: 'Create-and-Source/nutanix-store',
  },
  {
    name: 'CS Platform',
    type: 'Business Operations Dashboard',
    desc: 'Internal ops tool processing $52K+ in real Stripe transactions. Gmail inbox integration, SAGE product search, supplier management.',
    tech: 'React, TypeScript, Stripe, Gmail API, SAGE API, Supabase',
    github: 'Create-and-Source/cs-platform',
  },
  {
    name: 'Olive',
    type: 'AI Companion App',
    desc: 'Personal AI with conversational chat, journal, task management, Gmail and GitHub integration, text-to-speech.',
    tech: 'React, Claude API, TTS, Gmail API, GitHub API, Supabase',
    github: 'Create-and-Source/olive-app',
  },
]

const allProjects = [
  { name: 'Eastwood Co. Supply', type: 'E-Commerce', desc: 'Western streetwear for @eastwood0100', github: 'Create-and-Source/eastwood-store' },
  { name: 'Club Lumen', type: 'E-Commerce', desc: 'Desert-disco morning rave merch, full dropshipping', github: 'Create-and-Source/clublumen-store' },
  { name: 'Shift', type: 'E-Commerce', desc: 'Streetwear with Stripe Connect split payments', github: 'Create-and-Source/shift-store' },
  { name: 'UNE3Q LLC', type: 'E-Commerce', desc: 'Handmade jewelry and art marketplace', github: 'Create-and-Source/une3q-store' },
  { name: "Stef's Kitchen", type: 'E-Commerce', desc: 'Merch for viral jingle creator $tef the Chef', github: 'Create-and-Source/stefs-kitchen' },
  { name: 'Brick Road Media', type: 'Client Website', desc: 'Videography portfolio for Cameron Jacobs', github: 'Create-and-Source/brickroad-website' },
  { name: 'Sonoran Family Concierge', type: 'Client Website', desc: 'Senior care services, full SEO, custom domain', github: 'Create-and-Source/sonoran-senior-concierge' },
  { name: 'Motional Soul', type: 'Client Website', desc: 'GYROTONIC & Pilates training platform', github: 'Create-and-Source/motionalsoul' },
  { name: 'Dark Sky Website', type: 'Client Website', desc: 'Museum public site with gold design system', github: 'Create-and-Source/darksky-website' },
  { name: 'REWIRE', type: 'Wellness App', desc: 'Neural recovery companion, sobriety tracker', github: 'Create-and-Source/rewire-app' },
  { name: 'FORGE Performance', type: 'Wellness App', desc: 'Personal training with ExerciseDB API', github: 'Create-and-Source/personaltrainer' },
  { name: 'XPRO Events', type: 'App', desc: 'Event management with Stitch design system', github: 'Create-and-Source/xpro-app' },
  { name: 'Hey Tovah', type: 'Social App', desc: 'TikTok live Q&A with anonymous questions', github: 'Create-and-Source/hey-tovah' },
  { name: 'Brands By Status', type: 'Agency', desc: 'Merch stores for influencers, AI product photos', github: 'Create-and-Source/brandsbystatus' },
  { name: 'Creative Jazz LLC', type: 'Agency Demo', desc: '4-role social media agency platform', github: 'Create-and-Source/creative-jazz' },
  { name: 'Media4You', type: 'Agency Demo', desc: '5-role media company, ~4500 line app', github: 'Create-and-Source/media4you' },
  { name: 'MedSpa Platform', type: 'SaaS Demo', desc: '22-page white-label medspa management', github: 'Create-and-Source/medspa-platform' },
  { name: "Makayla Me'chelle", type: 'Client Platform', desc: 'Talent command center for model management', github: 'tovahmarx/makayla-app' },
  { name: 'Create & Source', type: 'Portfolio', desc: 'Company site with editorial design language', github: 'Create-and-Source/createandsource-website' },
  { name: 'Get Stoa', type: 'Design', desc: 'Interactive product showcase', github: 'Create-and-Source/getstoa' },
  { name: 'Continuum Club', type: 'Design', desc: 'Dark mode design system reference', github: 'Create-and-Source/continuum-club' },
]

const extensions = [
  { name: 'Sebastian AI', desc: 'Side panel copilot with 5 tab workers that observes context and learns business operations progressively' },
  { name: 'Alibaba Importer', desc: 'One-click product import from Alibaba supplier pages into the platform' },
  { name: 'SiteScout', desc: 'CRM-connected prospecting tool for real-time site analysis' },
  { name: 'MerchOS Extension', desc: 'Import and manage products from any supplier website' },
]

const skills = [
  { cat: 'AI Development', items: 'Claude Code (daily), Claude API, OpenAI API, AI-assisted workflows' },
  { cat: 'Frontend', items: 'React, Vite, Next.js, TypeScript, JavaScript, Astro, Framer Motion' },
  { cat: 'Backend & Data', items: 'Supabase (Postgres, Auth, Storage, Realtime), AWS Lambda, DynamoDB, API Gateway' },
  { cat: 'APIs & Integrations', items: 'Stripe, Square, Gmail, SAGE, Printify, Alibaba, SSActivewear, Fulfill Engine, Resend' },
  { cat: 'Browser Extensions', items: 'Chrome Manifest V3, side panels, background workers, content scripts' },
  { cat: 'Infrastructure', items: 'Vercel (CI/CD), GitHub Organizations, custom domains, automated deployments' },
]

const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } }

/* ═══════════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <div className="page">
      {/* ── HEADER ── */}
      <header className="hd">
        <div className="hd-inner">
          <span className="hd-name">Tovah Marx</span>
          <nav className="hd-nav">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero">
        <motion.div className="hero-inner" {...fade}>
          <h1 className="hero-h1">
            I design products, build them<br />with AI, and ship them.
          </h1>
          <p className="hero-p">
            Product builder based in Scottsdale, AZ. I use Claude Code every day to design, develop, and deploy production applications.
            Over the past year I've shipped 46+ repositories, 27 live apps, 4 Chrome extensions, and integrated 8+ external APIs,
            all for real clients and real users.
          </p>
          <div className="hero-nums">
            <div className="num-block"><span className="num">46+</span><span className="num-label">Repositories</span></div>
            <div className="num-block"><span className="num">27</span><span className="num-label">Live Applications</span></div>
            <div className="num-block"><span className="num">4</span><span className="num-label">Chrome Extensions</span></div>
            <div className="num-block"><span className="num">8+</span><span className="num-label">API Integrations</span></div>
          </div>
          <div className="hero-links">
            <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer" className="btn">GitHub Organization</a>
            <a href="mailto:Tovah.Marx@gmail.com" className="btn ghost">Tovah.Marx@gmail.com</a>
          </div>
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section className="sect" id="about">
        <motion.div className="sect-inner" {...fade}>
          <span className="sect-label">About</span>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a product builder who lives at the intersection of design, technology, and business.
                My background is unconventional (psychology degrees, real estate, insurance sales) but
                every role taught me the same thing: understand what people need, then build the system that delivers it.
              </p>
              <p>
                I discovered AI-assisted development in 2025 and haven't stopped shipping since.
                Claude Code is my daily driver. I use it to go from idea to deployed product in hours,
                not weeks. I think in products, not just features, and I care deeply about the
                experience of the people using what I build.
              </p>
              <p>
                I've built AI agents that learn business operations, SaaS platforms that integrate
                8 APIs, Chrome extensions that observe and automate, and e-commerce stores for clients
                ranging from independent creators to Fortune 500 companies. Everything I build ships
                to production with real users.
              </p>
            </div>
            <div className="about-edu">
              <h3 className="about-edu-title">Education</h3>
              <div className="edu-item">
                <span className="edu-degree">MS Forensic Psychology</span>
                <span className="edu-school">Southern New Hampshire University, 2020</span>
              </div>
              <div className="edu-item">
                <span className="edu-degree">BS Psychology</span>
                <span className="edu-school">University of Arizona, 2014</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── SKILLS ── */}
      <section className="sect" id="skills">
        <motion.div className="sect-inner" {...fade}>
          <span className="sect-label">Technical Skills</span>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div key={i} className="skill-row">
                <span className="skill-cat">{s.cat}</span>
                <span className="skill-items">{s.items}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="sect" id="work">
        <motion.div className="sect-inner" {...fade}>
          <span className="sect-label">Experience</span>
          <div className="exp-list">
            {experience.map((job, i) => (
              <motion.div key={i} className="exp-item" {...fade} transition={{ delay: i * 0.05 }}>
                <div className="exp-head">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">{job.company}</p>
                  </div>
                  <span className="exp-period">{job.period}</span>
                </div>
                <ul className="exp-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── CHROME EXTENSIONS ── */}
      <section className="sect">
        <motion.div className="sect-inner" {...fade}>
          <span className="sect-label">Chrome Extensions</span>
          <p className="sect-desc">4 published extensions built with Chrome Manifest V3 including side panels, background workers, and content scripts.</p>
          <div className="ext-list">
            {extensions.map((ext, i) => (
              <div key={i} className="ext-row">
                <span className="ext-name">{ext.name}</span>
                <span className="ext-desc">{ext.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="sect" id="projects">
        <motion.div className="sect-inner" {...fade}>
          <span className="sect-label">Featured Projects</span>
          <div className="feat-list">
            {featuredProjects.map((p, i) => (
              <motion.div key={i} className="feat-card" {...fade} transition={{ delay: i * 0.04 }}>
                <div className="feat-top">
                  <h3 className="feat-name">{p.name}</h3>
                  <span className="feat-type">{p.type}</span>
                </div>
                <p className="feat-desc">{p.desc}</p>
                <div className="feat-bottom">
                  <span className="feat-tech">{p.tech}</span>
                  <a href={`https://github.com/${p.github}`} target="_blank" rel="noopener noreferrer" className="feat-link">View on GitHub</a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── ALL PROJECTS ── */}
      <section className="sect">
        <motion.div className="sect-inner" {...fade}>
          <span className="sect-label">All Projects</span>
          <p className="sect-desc">21 additional shipped projects across e-commerce, client sites, wellness apps, agency platforms, and design systems.</p>
          <div className="all-grid">
            {allProjects.map((p, i) => (
              <a key={i} href={`https://github.com/${p.github}`} target="_blank" rel="noopener noreferrer" className="all-row">
                <span className="all-name">{p.name}</span>
                <span className="all-type">{p.type}</span>
                <span className="all-desc">{p.desc}</span>
                <span className="all-arrow">&rarr;</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ft">
        <div className="ft-inner">
          <div>
            <p className="ft-name">Tovah Marx</p>
            <p className="ft-info">Scottsdale, AZ &middot; Tovah.Marx@gmail.com &middot; 619-955-0507</p>
          </div>
          <a href="https://github.com/Create-and-Source" target="_blank" rel="noopener noreferrer" className="ft-gh">GitHub</a>
        </div>
      </footer>
    </div>
  )
}
