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
      'Led product vision, roadmap, and development of 46+ repositories and 27 projects across client work, internal tools, and experiments, shipping daily using Claude Code as my primary development tool. Three platforms in active client use: Dark Sky/IDSDC museum operations, Nutanix corporate store, and MerchOS.',
      'Built Sebastian AI (v2), an agentic AI concierge with a Chrome extension that observes user context across 5 browser tabs, learns business operations progressively, and automates workflows',
      'Shipped MerchOS, an AI-powered merchandise sourcing platform integrating 8 APIs (Stripe Connect, Gmail, SAGE, OpenAI, Printify, Alibaba, SSActivewear, Fulfill Engine)',
      'Built 4 Chrome extensions using Manifest V3 including side panels, background workers, and content scripts',
      'Conducted user research and product discovery with real clients including a museum (IDSDC/Dark Sky), Fortune 500 (Nutanix), and 7+ independent businesses, translating feedback into prioritized feature roadmaps',
      'Wrote product specifications, competitive analyses, design systems, and phased build roadmaps for every major project',
      'Managed a GitHub organization with 46+ repositories, PR workflows, branching strategies, and automated CI/CD deployments via Vercel',
    ],
  },
  {
    role: 'Business Development Manager',
    company: 'Commercial Capital Co',
    period: '2023 - 2025',
    points: [
      'Designed and implemented a company-wide Salesforce system, streamlining operations from lead generation through deal completion',
      'Built automated workflow systems that improved client engagement and operational efficiency',
      'Led employee onboarding by configuring cross-departmental tooling and systems',
    ],
  },
  {
    role: 'Founder & Builder, Infinite Financial / Licensed Agent',
    company: 'Family First Life',
    period: '2022 - 2023',
    points: [
      'Designed and shipped Sebastian (v1), an autonomous AI sales agent built on Go High Level using webhooks, Zapier, and Google Sheets, with persona and product knowledge managed in a spreadsheet I could iterate without touching code. Six weeks before OpenAI shipped function calling.',
      'Hybrid deterministic-plus-AI architecture handled lead qualification, multi-timezone scheduling, structured policy data retrieval, persona persistence, and hallucination guardrails. Ran 8,983 real conversations across SMS and web chat.',
      'Iterated through two persona models: first-person impersonator, then third-person assistant. Branded the launch entity Infinite Financial.',
      'Concurrent role at FFL: managed and coached a sales team, ran training, sold policies as a licensed agent.',
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
    name: 'Sebastian (v1) / Infinite Financial',
    type: 'Autonomous AI Agent (2023)',
    desc: 'Designed and operated an autonomous AI sales agent on the Go High Level CRM, handling 8,983+ real lead conversations in production. Built on webhooks, Zapier, and Google Sheets, with persona and product knowledge managed in a spreadsheet I could iterate without touching code. Hybrid architecture: deterministic keyword-triggered workflows for predictable paths, AI for ambiguous ones. Handled lead qualification, multi-timezone scheduling, structured policy data retrieval, persona persistence, and guardrails against hallucination. Six weeks before OpenAI shipped function calling. Ten days before Go High Level shipped Eliza, their own native AI agent platform.',
    tech: 'Go High Level, OpenAI API (pre-function-calling), Zapier webhooks, Google Sheets, custom web chat',
    github: null,
  },
  {
    name: 'Sebastian AI (v2)',
    type: 'Agentic AI + Chrome Extension',
    desc: 'The evolution of the 2023 agent. An AI concierge designed to learn any business through observation. Chrome extension with 5 tab workers feeds context into a web app. Designed and progressing through six build phases: progressive knowledge building, self-healing database creation, and agentic task execution.',
    tech: 'Claude API, Chrome Manifest V3, React, Supabase, MCP-ready architecture',
    github: 'Create-and-Source/sebastian-extension',
  },
  {
    name: 'MerchOS',
    type: 'AI SaaS Platform',
    desc: 'AI-powered merchandise sourcing platform where AI handles client communication, product sourcing, quoting, invoicing, and supplier management. 8 API integrations working as one system. Built to replace manual distributor workflows with agentic automation.',
    tech: 'React, TypeScript, Supabase, Stripe Connect, Gmail API, SAGE, OpenAI, Printify',
    github: 'Create-and-Source/merchos',
  },
  {
    name: 'Dark Sky Admin',
    type: 'Client Operations Platform',
    desc: 'Museum operations system for the International Dark-Sky Discovery Center. Inventory management (56+ items), Square POS integration with webhooks, ticketing, gift shop, staff management, and AI-powered analytics. Built from user research with museum staff.',
    tech: 'React, Supabase, Square API, webhooks',
    github: 'Create-and-Source/DarkSky_client',
  },
  {
    name: 'Nutanix Corporate Store',
    type: 'Enterprise E-Commerce',
    desc: 'Employee merchandise store for a Fortune 500 tech company. Request/approval workflows, fulfillment tracking, and admin management panel. Designed from discovery interviews with their marketing team.',
    tech: 'React, Supabase, Admin Dashboard',
    github: 'Create-and-Source/nutanix-store',
  },
  {
    name: 'CS Platform',
    type: 'Business Operations Dashboard',
    desc: 'Internal ops tool processing $52K+ in real Stripe transactions. Gmail inbox integration, SAGE product search, and supplier management. The prototype that validated the MerchOS product concept.',
    tech: 'React, TypeScript, Stripe, Gmail API, SAGE API, Supabase',
    github: 'Create-and-Source/cs-platform',
  },
  {
    name: 'Olive',
    type: 'AI Companion App',
    desc: 'Personal AI with conversational chat, journal, task management, Gmail and GitHub integration, and text-to-speech. An experiment in how AI agents can integrate across developer and personal tools.',
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
  { cat: 'AI & Agentic Tools', items: 'Claude Code (daily driver), Claude API, OpenAI API, MCP protocol, agentic systems design, multi-agent workflow orchestration, prompt engineering' },
  { cat: 'Product', items: 'Customer discovery, requirements design, roadmap planning, prototype validation, feedback synthesis, competitive analysis, cross-functional execution' },
  { cat: 'Frontend', items: 'React, Vite, Next.js, TypeScript, JavaScript, Astro, Framer Motion' },
  { cat: 'Backend & Data', items: 'Supabase (Postgres, Auth, Storage, Realtime), serverless functions, webhooks' },
  { cat: 'APIs & Integrations', items: 'Stripe, Square, Gmail, SAGE, Printify, Alibaba, SSActivewear, Fulfill Engine, Resend' },
  { cat: 'Browser & IDE Extensions', items: 'Chrome Manifest V3, side panels, background workers, content scripts, VS Code extension architecture' },
  { cat: 'Developer Workflow', items: 'Git (branching, PRs, merge strategies), GitHub Organizations, Vercel CI/CD, CLI tooling, automated deployments' },
  { cat: 'Communication', items: 'Systems thinking, user interviewing, technical writing, stakeholder mediation' },
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
            Building agentic systems since 2023,<br />before the category had a name.
          </h1>
          <p className="hero-p">
            In April 2023, I designed and operated an autonomous AI sales agent named Sebastian on the Go High Level CRM,
            six weeks before OpenAI shipped function calling, ten days before the platform shipped a competing native AI product.
            Today I operate Brands By Status LLC (Create & Source) with 46+ repositories, 27 projects across client work, internal tools, and prototypes,
            and 4 Chrome Manifest V3 extensions for real clients including a Fortune 500 (Nutanix), the International Dark-Sky
            Discovery Center, and 7+ independent businesses.
          </p>
          <div className="hero-nums">
            <div className="num-block"><span className="num">46+</span><span className="num-label">Repositories</span></div>
            <div className="num-block"><span className="num">27</span><span className="num-label">Projects</span></div>
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
                I'm a product builder who sits at the intersection of users, technology, and product decisions.
                My background is unconventional (psychology degrees, real estate, insurance sales) but
                every role taught me the same thing: understand what people need, then build the system that delivers it.
              </p>
              <p>
                I started building agentic AI systems in 2023, before function calling existed, before anyone was
                calling them "agents." I designed an autonomous sales agent that ran 8,983 real conversations
                using a hybrid architecture I invented out of necessity: deterministic workflows for predictable paths,
                AI for ambiguous ones, with hallucination guardrails I had to design myself because no framework existed yet.
              </p>
              <p>
                Today, Claude Code is my daily driver. I use it to go from idea to working prototype in hours,
                not weeks. I have strong opinions about AI coding tools because I use them all day, every day,
                to build real products for real people. I understand what works, what breaks, and what's missing
                because I live inside these workflows.
              </p>
              <p>
                I think in products, not just features. I write specs, competitive analyses, and roadmaps before
                I build. I conduct discovery interviews to understand what users actually need. And I'm genuinely
                excited about the space where AI agents, developer tools, and human workflows intersect.
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

      {/* ── ORIGIN STORY ── */}
      <section className="sect" id="origin">
        <motion.div className="sect-inner" {...fade}>
          <span className="sect-label">Origin Story: Sebastian v1, April 2023</span>
          <div className="origin-content">
            <div className="origin-text">
              <p className="origin-lead">
                Before I built Sebastian, I had to understand the platform. I printed every Go High Level workflow
                on individual sheets of paper and connected them with colored yarn across my office wall. Different
                colors for text triggers, email cascades, and call dispositions. The whole automated outreach engine,
                mapped physically, so I could see where it was working and where leads were falling through.
              </p>
              <p className="origin-body">
                Then I built the agent. Sebastian ran 8,983 real conversations across SMS and a custom web chat interface,
                qualifying leads, scheduling calls across time zones, retrieving structured policy data, and maintaining
                persona persistence throughout every thread ("Sincerely, Sebastian"). No framework existed for this.
                I designed a hybrid architecture: deterministic keyword-triggered workflows for predictable paths,
                AI for ambiguous ones, with hallucination guardrails I built myself.
              </p>
              <p className="origin-body">
                I branded the launch entity Infinite Financial and was preparing to go to market the week
                Go High Level shipped Eliza, their own native AI agent platform. Six weeks before OpenAI shipped
                function calling. I was building agentic systems before the category had a name.
              </p>
            </div>
            <div className="origin-photos">
              <div className="origin-photo-wrap">
                <img src="/images/the-wall.png" alt="Physical workflow map with papers connected by colored yarn" className="origin-photo" />
                <span className="origin-caption">The wall: every Go High Level workflow, mapped physically. April 2023.</span>
              </div>
              <div className="origin-photo-wrap">
                <img src="/images/coded-a-robot.png" alt="Instagram story: Do you hate cold calling? I coded a robot." className="origin-photo origin-photo-sm" />
                <span className="origin-caption">"Do you hate cold calling and follow up? I coded a robot." April 26, 2023.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="sect" id="approach">
        <motion.div className="sect-inner" {...fade}>
          <span className="sect-label">How I Work</span>
          <div className="approach-grid">
            <div className="approach-card">
              <h3 className="approach-title">Prototype with AI tools daily</h3>
              <p className="approach-desc">
                Claude Code is my primary development tool. I use it to rapidly prototype ideas, test API integrations,
                and validate product concepts before committing to full builds. When the fastest way to answer a question
                is to build something, I build it.
              </p>
            </div>
            <div className="approach-card">
              <h3 className="approach-title">Own the feedback loop</h3>
              <p className="approach-desc">
                Every product I've built started with user research. I run discovery calls with clients, observe how they
                use what I build, collect feedback from real users in production, and translate it into prioritized
                roadmaps. I don't guess what users want.
              </p>
            </div>
            <div className="approach-card">
              <h3 className="approach-title">Ship across the full stack</h3>
              <p className="approach-desc">
                I've built Chrome extensions, API integrations, webhook pipelines, CI/CD workflows, and full applications.
                I can read API documentation, reason about protocol-level concepts, and hold technical conversations with
                engineers about architecture decisions.
              </p>
            </div>
            <div className="approach-card">
              <h3 className="approach-title">Think in developer workflows</h3>
              <p className="approach-desc">
                I manage 46+ Git repos with branching strategies, PR workflows, and automated deployments.
                I understand how developers move code through pipelines because I do it every day. I know where
                tooling helps and where it gets in the way.
              </p>
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
              <motion.div key={i} className={`feat-card${!p.github ? ' feat-card-full' : ''}`} {...fade} transition={{ delay: i * 0.04 }}>
                <div className="feat-top">
                  <h3 className="feat-name">{p.name}</h3>
                  <span className="feat-type">{p.type}</span>
                </div>
                <p className="feat-desc">{p.desc}</p>
                <div className="feat-bottom">
                  <span className="feat-tech">{p.tech}</span>
                  {p.github ? (
                    <a href={`https://github.com/${p.github}`} target="_blank" rel="noopener noreferrer" className="feat-link">View on GitHub</a>
                  ) : (
                    <span className="feat-archived">Archived project</span>
                  )}
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
