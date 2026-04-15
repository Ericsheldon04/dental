import { useState, useEffect } from 'react'
import './App.css'

/** Update these before going live */
const CONTACT = {
  phoneDisplay: '+91 XXXXX XXXXX',
  phoneTel: '+910000000000',
  hours: 'Mon–Sat: 9:00 AM – 7:00 PM · Sun: Closed',
}

const MAP_EMBED =
  'https://www.google.com/maps?q=PRN+Complex+Kollidam+Tamil+Nadu+609102&output=embed'

const MAIL_APPOINTMENT =
  'mailto:?subject=' +
  encodeURIComponent("Appointment request — Vijaya's Dental Care")

const GALLERY = [
  {
    src: new URL('./assets/gallery-chair.svg', import.meta.url).href,
    alt: 'Dental chair in a clean clinic room',
    title: 'Comfort-first setup',
  },
  {
    src: new URL('./assets/gallery-tools.svg', import.meta.url).href,
    alt: 'Dental instruments in a hygienic tray',
    title: 'Hygienic sterilization',
  },
  {
    src: new URL('./assets/gallery-smile.svg', import.meta.url).href,
    alt: 'Bright smile illustration',
    title: 'Smile design care',
  },
  {
    src: new URL('./assets/gallery-kid.svg', import.meta.url).href,
    alt: 'Child-friendly dentistry illustration',
    title: 'Kids-friendly clinic',
  },
  {
    src: new URL('./assets/gallery-xray.svg', import.meta.url).href,
    alt: 'Dental x-ray illustration',
    title: 'Modern diagnostics',
  },
  {
    src: new URL('./assets/gallery-braces.svg', import.meta.url).href,
    alt: 'Braces illustration',
    title: 'Orthodontics support',
  },
]

const SERVICES = [
  {
    icon: '🦷',
    title: 'General Dentistry',
    image: new URL('./assets/service-general-dentistry.jpg', import.meta.url).href,
  },
  {
    icon: '🪥',
    title: 'Teeth Cleaning & Scaling',
    image: new URL('./assets/service-teeth-cleaning-scaling.jpg', import.meta.url).href,
  },
  {
    icon: '⚪',
    title: 'Teeth Whitening',
    image: new URL('./assets/service-teeth-whitening.jpg', import.meta.url).href,
  },
  {
    icon: '🔧',
    title: 'Fillings & Restorations',
    image: new URL('./assets/service-fillings-restorations.jpg', import.meta.url).href,
  },
  {
    icon: '👑',
    title: 'Crowns & Bridges',
    image: new URL('./assets/service-crowns-bridges.jpg', import.meta.url).href,
  },
  {
    icon: '🔩',
    title: 'Dental Implants',
    image: new URL('./assets/service-dental-implants.jpg', import.meta.url).href,
  },
  {
    icon: '😬',
    title: 'Root Canal Treatment',
    image: new URL('./assets/service-root-canal-treatment.jpg', import.meta.url).href,
  },
  {
    icon: '🧒',
    title: 'Pediatric Dentistry',
    image: new URL('./assets/service-pediatric-dentistry.jpg', import.meta.url).href,
  },
  {
    icon: '😁',
    title: 'Orthodontics / Braces',
    image: new URL('./assets/service-orthodontics-braces.jpg', import.meta.url).href,
  },
]

const WHY_US = [
  'Experienced & Caring Dentists',
  'Modern Equipment',
  'Hygienic & Safe Environment',
  'Affordable Pricing',
  'Convenient Location in Kollidam',
  'Friendly Staff',
]

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'why-us', label: 'Why Us' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const onHeroMove = (e) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = (x / rect.width - 0.5) * 2
    const py = (y / rect.height - 0.5) * 2
    const max = 10
    setTilt({ rx: (-py * max).toFixed(2), ry: (px * max).toFixed(2) })
  }

  const onHeroLeave = () => setTilt({ rx: 0, ry: 0 })

  return (
    <div className="site">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <header className="header">
        <div className="header-inner">
          <a href="#home" className="brand" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
            <img 
              src={new URL('./assets/dental.png', import.meta.url).href} 
              alt="Dental Care Logo" 
              className="brand-logo"
            />
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <span className={`nav-toggle-bars ${menuOpen ? 'open' : ''}`} />
          </button>

          <nav id="site-nav" className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {NAV.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(id)
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true" />
          <div className="section-inner hero-inner">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">Kollidam, Tamil Nadu</p>
                <h1 id="hero-title" className="hero-title">
                  Your Smile, Our Priority
                </h1>
                <p className="hero-sub">
                  Trusted Dental Care in Kollidam, Tamil Nadu
                </p>
                <div className="hero-cta">
                  <a href={`tel:${CONTACT.phoneTel}`} className="btn btn-outline">
                    Call Now
                  </a>
                </div>
                <div className="hero-badges" aria-label="Highlights">
                  <span className="badge">✅ Hygienic &amp; safe</span>
                  <span className="badge">✅ Affordable care</span>
                  <span className="badge">✅ Friendly staff</span>
                </div>
              </div>

              <div
                className="hero-visual"
                onMouseMove={onHeroMove}
                onMouseLeave={onHeroLeave}
                style={{
                  '--rx': `${tilt.rx}deg`,
                  '--ry': `${tilt.ry}deg`,
                }}
              >
                <div className="hero-gif-container">
                  <img 
                    src={new URL('./assets/Untitled design (15).png', import.meta.url).href} 
                    alt="Dental care design" 
                    className="hero-gif"
                  />
                </div>
                
                
                <div className="float float-1" aria-hidden="true" />
                <div className="float float-2" aria-hidden="true" />
                <div className="float float-3" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <div className="section-inner about-grid">
            <div className="about-copy">
              <h2 id="about-title" className="section-title">
                About Us
              </h2>
              <p className="lead">
                Vijaya&apos;s Dental Care is a trusted dental clinic located in the
                heart of Kollidam, Tamil Nadu. We are committed to providing
                quality, affordable dental treatment in a comfortable and hygienic
                environment — because every smile deserves the best care.
              </p>
            </div>
            <aside className="address-card" aria-label="Clinic address">
              <span className="address-icon" aria-hidden="true">
                📍
              </span>
              <p>
                <strong>Visit us</strong>
                <br />
                PRN Complex, Kollidam, Tamil Nadu – 609102
              </p>
            </aside>
          </div>
        </section>

        <section id="services" className="section services" aria-labelledby="services-title">
          <div className="section-inner">
            <h2 id="services-title" className="section-title center">
              Our Services
            </h2>
            <p className="section-intro center">
              Comprehensive care for every age — from routine check-ups to advanced
              treatments.
            </p>
            <ul className="service-grid">
              {SERVICES.map(({ icon, title, image }) => (
                <li key={title} className="service-card">
                  <div className="service-media">
                    <img src={image} alt={title} loading="lazy" />
                  </div>
                  <div className="service-body">
                    <span className="service-icon" aria-hidden="true">
                      {icon}
                    </span>
                    <span className="service-title">{title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="gallery" className="section gallery" aria-labelledby="gallery-title">
          <div className="section-inner">
            <h2 id="gallery-title" className="section-title center">
              Clinic Gallery
            </h2>
            <p className="section-intro center">
              A clean, comfortable environment designed to help you feel relaxed from the moment you walk in.
            </p>

            <ul className="gallery-grid">
              {GALLERY.map((item) => (
                <li key={item.title} className="gallery-card">
                  <div className="gallery-media">
                    <img src={item.src} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="gallery-caption">
                    <span className="gallery-title">{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="gallery-note">
              Replace these images with real clinic photos by adding files to <code>src/assets</code> and updating <code>GALLERY</code>.
            </p>
          </div>
        </section>

        <section id="why-us" className="section why" aria-labelledby="why-title">
          <div className="section-inner">
            <h2 id="why-title" className="section-title center">
              Why Choose Us?
            </h2>
            <ul className="why-grid">
              {WHY_US.map((item) => (
                <li key={item} className="why-item">
                  <span className="check" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <div className="section-inner contact-grid">
            <div className="contact-info">
              <h2 id="contact-title" className="section-title">
                Contact &amp; Hours
              </h2>
              <ul className="contact-list">
                <li>
                  <span className="contact-label">Address</span>
                  <span>
                    PRN Complex, Kollidam, Tamil Nadu – 609102
                  </span>
                </li>
                <li>
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phoneDisplay}</a>
                </li>
                <li>
                  <span className="contact-label">Hours</span>
                  <span>{CONTACT.hours}</span>
                </li>
                <li>
                  <span className="contact-label">Maps</span>
                  <span className="plus-code">Plus code: 8PH7+RW Kollidam</span>
                </li>
              </ul>
              <div className="contact-cta">
                <a href={`tel:${CONTACT.phoneTel}`} className="btn btn-primary">
                  Call Now
                </a>
                <a href={MAIL_APPOINTMENT} className="btn btn-outline">
                  Email to book
                </a>
              </div>
            </div>
            <div className="map-wrap">
              <iframe
                title="Vijaya's Dental Care on Google Maps"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-frame"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-inner footer-inner">
          <p className="footer-tagline">
            Vijaya&apos;s Dental Care — Healthy Teeth, Happy Life
          </p>
          <p className="footer-meta">
            © {new Date().getFullYear()} Vijaya&apos;s Dental Care · Kollidam
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
