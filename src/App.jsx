import { useEffect, useRef, useState } from 'react'
import Logo from './components/Logo'
import photoImg from './assets/adnan-photo.png'
import mimiImg from './assets/projects/mimi-virtual-agent.png'
import chatflowImg from './assets/projects/chatflow.png'
import taxflowImg from './assets/projects/taxflow.png'
import makeImg from './assets/projects/make-workflow.png'
import n8nImg from './assets/projects/n8n-workflow.png'
import hybridImg from './assets/projects/make-n8n-hybrid.png'
import codeFlowImg from './assets/projects/code-flow.png'
import autoDeskImg from './assets/projects/automation-desk.png'
import './App.css'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#features', label: 'Features' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
  { href: '#faqs', label: 'FAQs' },
]

const marqueeItems = [
  'Laravel',
  'React',
  'Automation',
  'Make.com',
  'n8n',
  'PHP',
  'APIs',
  'Workflows',
]

const projects = [
  {
    num: '01',
    title: 'MIMI Virtual Agent',
    role: 'AI Call Platform',
    tags: ['AI', 'Laravel', 'Twilio'],
    url: 'https://mimivirtualagent.com/',
    image: mimiImg,
  },
  {
    num: '02',
    title: 'ChatFlow',
    role: 'WhatsApp API',
    tags: ['WhatsApp', 'API', 'SaaS'],
    url: 'https://chatflow.zeltacode.com/',
    image: chatflowImg,
  },
  {
    num: '03',
    title: 'TaxFlowAI',
    role: 'Tax Intelligence',
    tags: ['AI', 'FinTech'],
    url: 'https://taxflowpro.ai/',
    image: taxflowImg,
  },
  {
    num: '04',
    title: 'Make.com Lead Sync',
    role: 'Make · Automation',
    tags: ['Make.com', 'CRM', 'Slack'],
    url: '#projects',
    image: makeImg,
  },
  {
    num: '05',
    title: 'n8n Order Pipeline',
    role: 'n8n · Workflows',
    tags: ['n8n', 'Webhooks', 'Orders'],
    url: '#projects',
    image: n8nImg,
  },
  {
    num: '06',
    title: 'Make + n8n Hybrid Flow',
    role: 'Workflow Systems',
    tags: ['Make', 'n8n', 'Alerts'],
    url: '#projects',
    image: hybridImg,
  },
  {
    num: '07',
    title: 'DevOps Alert Router',
    role: 'n8n · Monitoring',
    tags: ['n8n', 'DevOps', 'Alerts'],
    url: '#projects',
    image: codeFlowImg,
  },
  {
    num: '08',
    title: 'Client Onboarding Flow',
    role: 'Make · Operations',
    tags: ['Make.com', 'CRM', 'Email'],
    url: '#projects',
    image: autoDeskImg,
  },
]

const features = [
  {
    title: 'Laravel development',
    copy: 'APIs, auth, queues, and dashboards built on Laravel for production use.',
  },
  {
    title: 'Full-stack delivery',
    copy: 'Frontend and backend shipped together so the product feels one system.',
  },
  {
    title: 'Automation engineering',
    copy: 'Workflows and integrations that cut manual work and stay reliable.',
  },
  {
    title: 'Make.com workflows',
    copy: 'CRM sync, lead routing, Slack alerts, and multi-app business flows.',
  },
  {
    title: 'n8n workflow systems',
    copy: 'Order pipelines, webhooks, data transforms, and custom automation logic.',
  },
  {
    title: 'AI product features',
    copy: 'Call agents, document analysis, and LLM-powered product features.',
  },
  {
    title: 'WhatsApp & messaging APIs',
    copy: 'Sessions, webhooks, and messaging services ready for real traffic.',
  },
  {
    title: 'REST API design',
    copy: 'Clean APIs for mobile apps, dashboards, and third-party tools.',
  },
  {
    title: 'React interfaces',
    copy: 'Fast, clear product UIs with modern React and simple user flows.',
  },
  {
    title: 'Database architecture',
    copy: 'MySQL design, migrations, relationships, and performance-minded models.',
  },
  {
    title: 'SaaS platforms',
    copy: 'Multi-feature SaaS with dashboards, admin control, and solid foundations.',
  },
  {
    title: 'Third-party integrations',
    copy: 'Twilio, calendars, CRM hooks, and custom service connections.',
  },
  {
    title: 'Auth & security',
    copy: 'Login, roles, permissions, and secure handling of user and business data.',
  },
  {
    title: 'Deployment support',
    copy: 'Production setup and light monitoring so shipped products stay stable.',
  },
]

const skills = [
  { name: 'Laravel', level: 'Expert', badge: 'ship it' },
  { name: 'PHP', level: 'Expert', badge: 'core power' },
  { name: 'React', level: 'Advanced', badge: 'UI mode' },
  { name: 'Make.com', level: 'Expert', badge: 'auto-magic' },
  { name: 'n8n', level: 'Expert', badge: 'flow boss' },
  { name: 'Automation', level: 'Expert', badge: 'zero busywork' },
  { name: 'REST APIs', level: 'Expert', badge: 'clean contracts' },
  { name: 'MySQL', level: 'Advanced', badge: 'data locked' },
  { name: 'JavaScript', level: 'Advanced', badge: 'runtime ready' },
  { name: 'Webhooks', level: 'Advanced', badge: 'event fired' },
]

const faqs = [
  {
    q: 'What kind of work do you take on?',
    a: 'Laravel apps, automation systems, APIs, and full-stack features where frontend and backend need to work cleanly together.',
  },
  {
    q: 'Do you build both frontend and backend?',
    a: 'Yes. From database and Laravel services to React interfaces and deployment-ready delivery.',
  },
  {
    q: 'How can I start a project with you?',
    a: 'Email or WhatsApp a short brief — goals, timeline, and any existing tools or code. We will plan the next step from there.',
  },
  {
    q: 'How fast can you respond?',
    a: 'Usually within one business day on email or WhatsApp after you share project details.',
  },
]

function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.unobserve(node)
        }
      },
      { threshold: options.threshold ?? 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options.threshold])

  return ref
}

function Reveal({ className = '', children }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal-block ${className}`}>
      {children}
    </div>
  )
}

function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = word.slice(0, text.length + 1)
          setText(next)
          if (next === word) setDeleting(true)
        } else if (text.length === 0) {
          setDeleting(false)
          setWordIndex((i) => (i + 1) % words.length)
        } else {
          setText(word.slice(0, text.length - 1))
        }
      },
      deleting ? (text.length === word.length ? pause : speed / 1.6) : speed,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

const floatCodes = ['Laravel', 'n8n', 'Make', 'React', 'API', 'PHP']
const portraitBadges = [
  { text: 'available now', className: 'hero__badge--1' },
  { text: 'ship clean code', className: 'hero__badge--2' },
  { text: 'automation pro', className: 'hero__badge--3' },
  { text: "let's build", className: 'hero__badge--4' },
]
const typedRoles = [
  'Laravel Engineer',
  'Automation Expert',
  'Full-stack Developer',
  'n8n + Make Builder',
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState('idle')
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('home')
  const typed = useTypewriter(typedRoles)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const ids = ['home', 'about', 'projects', 'features', 'skills', 'contact', 'faqs']
      let current = 'home'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= 120) current = id
      }
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const onFormChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (formStatus !== 'idle') setFormStatus('idle')
  }

  const onFormSubmit = async (event) => {
    event.preventDefault()
    setFormStatus('loading')

    try {
      const response = await fetch(
        'https://hook.eu1.make.com/1azuu2tr166w87k6i9rrf0aejs2jbned',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            message: form.message.trim(),
            source: 'adnan-portfolio',
            submittedAt: new Date().toISOString(),
          }),
        },
      )

      if (!response.ok) {
        throw new Error(`Webhook failed with status ${response.status}`)
      }

      setFormStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error(error)
      setFormStatus('error')
    }
  }

  const onPortraitMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -8, y: px * 10 })
  }

  const onPortraitLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <div className="page">
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <div className="noise" aria-hidden="true" />
      <div className="ambient" aria-hidden="true">
        <span className="ambient__orb ambient__orb--1" />
        <span className="ambient__orb ambient__orb--2" />
        <span className="ambient__orb ambient__orb--3" />

        <div className="signals">
          <span className="signals__mesh signals__mesh--1" />
          <span className="signals__mesh signals__mesh--2" />
          <span className="signals__veil" />
          <span className="signals__ring" />
          <span className="signals__beam" />
        </div>
      </div>

      <header className={`nav ${scrolled || menuOpen ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--menu-open' : ''}`}>
        <div className="container nav__inner">
          <a className="nav__brand" href="#home" onClick={closeMenu}>
            <Logo className="nav__logo" />
          </a>

          <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{ '--i': index }}
                className={activeSection === link.href.slice(1) ? 'is-active' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a className="nav__cta" href="#contact" onClick={closeMenu}>
            Hire me
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12h14M13 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <button
            className={`nav__toggle ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__bg" aria-hidden="true" />

          <div className="container hero__layout">
            <div className="hero__copy">
              <p className="hero__kicker anim-in anim-in--1">
                <span className="pulse-dot" />
                Available for projects
              </p>
              <h1 className="hero__brand anim-in anim-in--2">
                <span className="hero__brand-line">Adnan</span>
                <span className="hero__brand-line hero__brand-line--accent">Ali</span>
              </h1>
              <p className="hero__typed anim-in anim-in--3">
                <span className="hero__typed-label">I am a</span>
                <span className="hero__typed-text">
                  {typed}
                  <span className="caret" />
                </span>
              </p>
              <p className="hero__headline anim-in anim-in--4">
                Production web systems —{' '}
                <span className="text-accent">Laravel</span> backends,{' '}
                <span className="text-accent">React</span> interfaces, and{' '}
                <span className="text-accent">automation</span> that removes busywork.
              </p>
              <p className="hero__lede anim-in anim-in--5">
                Clean architecture, reliable APIs, and workflows that help teams ship faster.
              </p>
              <div className="hero__actions anim-in anim-in--6">
                <a className="btn btn--primary btn--shine" href="#contact">
                  <span>Start a project</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
                <a className="btn btn--ghost-dark" href="#projects">
                  View projects
                </a>
              </div>
            </div>

            <div
              className="hero__portrait anim-in anim-in--3"
              onMouseMove={onPortraitMove}
              onMouseLeave={onPortraitLeave}
            >
              <div className="hero__floaters" aria-hidden="true">
                {floatCodes.map((code, index) => (
                  <span
                    key={code}
                    className={`hero__floater hero__floater--${index + 1}`}
                  >
                    {`<${code} />`}
                  </span>
                ))}
              </div>
              <div className="hero__badges" aria-hidden="true">
                {portraitBadges.map((badge) => (
                  <span key={badge.text} className={`hero__badge ${badge.className}`}>
                    {badge.text}
                  </span>
                ))}
              </div>
              <div
                className="hero__ring"
                style={{
                  transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                <img src={photoImg} alt="Adnan Ali" className="hero__photo" />
              </div>
              <div className="hero__glow" aria-hidden="true" />
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                <b>*</b>
              </span>
            ))}
          </div>
        </div>

        <section className="project-strip" id="projects">
          <div className="container project-strip__head">
            <p className="eyebrow">Projects</p>
            <h2>Live products and automation workflows.</h2>
          </div>

          <div className="project-strip__viewport">
            <div className="project-strip__track">
              {[...projects, ...projects].map((project, index) => (
                <a
                  key={`${project.title}-${index}`}
                  className="project-card"
                  href={project.url}
                  target={project.url.startsWith('http') ? '_blank' : undefined}
                  rel={project.url.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <div className="project-card__media">
                    <img src={project.image} alt={`${project.title} preview`} />
                  </div>
                  <div className="project-card__body">
                    <div className="project-card__meta">
                      <span>{project.num}</span>
                      <span>{project.role}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <div className="project-card__tags">
                      {project.tags.map((tag) => (
                        <span key={`${project.title}-${tag}-${index}`}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container">
            <Reveal>
              <div className="about__layout">
                <div className="about__copy">
                  <p className="eyebrow">About</p>
                  <h2>
                    Full path delivery —
                    <em> idea to automation.</em>
                  </h2>
                  <p className="lead">
                    I turn product ideas into working systems — Laravel backends, React
                    interfaces, and Make.com / n8n workflows that stay clean in production.
                  </p>
                  <div className="about__pills">
                    <span>APIs</span>
                    <span>Dashboards</span>
                    <span>Workflows</span>
                    <span>Integrations</span>
                  </div>
                  <a className="btn btn--primary btn--shine about__cta" href="#contact">
                    <span>Work with me</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M5 12h14M13 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </a>
                </div>

                <div className="about__panel" aria-hidden="true">
                  <div className="about__panel-glow" />
                  <ol className="about__path">
                    <li className="about__step">
                      <span className="about__step-num">01</span>
                      <div className="about__step-copy">
                        <strong>Discover</strong>
                        <span>Goals, tools, and constraints</span>
                      </div>
                    </li>
                    <li className="about__step">
                      <span className="about__step-num">02</span>
                      <div className="about__step-copy">
                        <strong>Build</strong>
                        <span>Laravel APIs and React UI</span>
                      </div>
                    </li>
                    <li className="about__step">
                      <span className="about__step-num">03</span>
                      <div className="about__step-copy">
                        <strong>Automate</strong>
                        <span>Make.com and n8n flows</span>
                      </div>
                    </li>
                    <li className="about__step">
                      <span className="about__step-num">04</span>
                      <div className="about__step-copy">
                        <strong>Ship</strong>
                        <span>Stable, maintainable delivery</span>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </Reveal>

            <div className="about__focus">
              <article className="about__focus-item">
                <div className="about__focus-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M4 7h16M4 12h10M4 17h14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="about__focus-copy">
                  <strong>Full-stack</strong>
                  <span>UI and APIs shipped as one system</span>
                </div>
              </article>
              <article className="about__focus-item">
                <div className="about__focus-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M8 4h8l2 4v12H6V8l2-4zm2 0v4h4V4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="about__focus-copy">
                  <strong>Laravel</strong>
                  <span>Backends, auth, queues, and platforms</span>
                </div>
              </article>
              <article className="about__focus-item">
                <div className="about__focus-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M5 12h3l2-6 4 12 2-6h3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="about__focus-copy">
                  <strong>Automation</strong>
                  <span>Make.com and n8n that remove busywork</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="feature-strip" id="features">
          <div className="container feature-strip__head">
            <p className="eyebrow">Features</p>
            <h2>What I deliver for your product.</h2>
          </div>

          <div className="feature-strip__viewport">
            <div className="feature-strip__track">
              {[...features, ...features].map((feature, index) => (
                <article
                  key={`${feature.title}-${index}`}
                  className="feature-card"
                >
                  <span className="feature-card__num">
                    {String((index % features.length) + 1).padStart(2, '0')}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="container">
            <Reveal>
              <div className="section__head section__head--row">
                <div>
                  <p className="eyebrow">Skills</p>
                  <h2>Tools I use to ship.</h2>
                </div>
                <p className="lead lead--tight">
                  Backend, interface, and automation tools chosen for speed and long-term clarity.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="skill-strip__viewport">
            <div className="skill-strip__track" aria-label="Skills">
              {[...skills, ...skills].map((skill, index) => (
                <article
                  key={`${skill.name}-${index}`}
                  className="skill-chip"
                >
                  <span className="skill-chip__badge" aria-hidden="true">
                    {skill.badge}
                  </span>
                  <h3>{skill.name}</h3>
                  <span className="skill-chip__level">{skill.level}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <Reveal>
              <div className="contact__layout">
                <div className="contact__panel">
                  <p className="eyebrow eyebrow--dark">Contact</p>
                  <h2>
                    Tell me what
                    <br />
                    you need built.
                  </h2>
                  <p className="lead lead--dark">
                    Laravel app, automation workflow, or full-stack feature set — send a short
                    note and I will reply with next steps.
                  </p>
                  <div className="contact__actions">
                    <a className="btn btn--dark" href="mailto:adnan.codes50@gmail.com">
                      Email me
                    </a>
                    <a
                      className="btn btn--white"
                      href="https://wa.me/923446879941"
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                <form className="contact-form" onSubmit={onFormSubmit}>
                  <h3>Project inquiry</h3>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={onFormChange}
                      placeholder="Your name"
                      required
                      autoComplete="name"
                      disabled={formStatus === 'loading'}
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onFormChange}
                      placeholder="you@email.com"
                      required
                      autoComplete="email"
                      disabled={formStatus === 'loading'}
                    />
                  </label>
                  <label>
                    <span>Phone number</span>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onFormChange}
                      placeholder="03XX XXXXXXX"
                      required
                      autoComplete="tel"
                      disabled={formStatus === 'loading'}
                    />
                  </label>
                  <label>
                    <span>Project details</span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onFormChange}
                      placeholder="What do you need built? Timeline or links welcome."
                      rows={4}
                      disabled={formStatus === 'loading'}
                    />
                  </label>
                  <button
                    className="btn btn--dark"
                    type="submit"
                    disabled={formStatus === 'loading'}
                  >
                    {formStatus === 'loading'
                      ? 'Sending…'
                      : formStatus === 'success'
                        ? 'Sent successfully'
                        : 'Submit'}
                  </button>
                  {formStatus === 'success' ? (
                    <p className="contact-form__note contact-form__note--ok">
                      Thanks — your message was sent.
                    </p>
                  ) : null}
                  {formStatus === 'error' ? (
                    <p className="contact-form__note contact-form__note--err">
                      Something went wrong. Please try again or WhatsApp me.
                    </p>
                  ) : null}
                </form>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section faqs" id="faqs">
          <div className="container">
            <Reveal>
              <div className="section__head">
                <p className="eyebrow">FAQs</p>
                <h2>Quick answers before we start.</h2>
              </div>
            </Reveal>

            <div className="faq-list">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index
                return (
                  <div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="faq-item__q"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      id={`faq-btn-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="faq-item__index">0{index + 1}</span>
                      <span className="faq-item__text">{item.q}</span>
                      <span className="faq-item__icon" aria-hidden="true" />
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
                      className="faq-item__panel"
                      style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                    >
                      <div>
                        <p className="faq-item__a">{item.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__glow" aria-hidden="true" />
        <div className="container footer__top">
          <div className="footer__brand-block">
            <a className="footer__logo" href="#home" aria-label="Adnan Ali home">
              <Logo className="footer__logo-svg" />
            </a>
            <p className="footer__tagline">
              Laravel, React, and automation systems built to ship clean and stay reliable.
            </p>
            <a className="footer__cta" href="#contact">
              Start a project
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </a>
          </div>

          <div className="footer__col">
            <p className="footer__label">Explore</p>
            <nav className="footer__nav" aria-label="Footer">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer__col">
            <p className="footer__label">Contact</p>
            <div className="footer__contact">
              <a href="mailto:adnan.codes50@gmail.com">adnan.codes50@gmail.com</a>
              <a href="https://wa.me/923446879941" target="_blank" rel="noreferrer">
                WhatsApp · 0344 6879941
              </a>
              <p>Available for freelance &amp; product builds</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container footer__bottom-inner">
            <p className="footer__copy">
              © {new Date().getFullYear()} Adnan Ali. Built with care.
            </p>
            <p className="footer__stack">Laravel · React · Make · n8n · APIs</p>
          </div>
        </div>
      </footer>

      <a
        className={`back-top ${scrolled ? 'is-visible' : ''}`}
        href="#home"
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 19V5M5 12l7-7 7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  )
}

export default App
