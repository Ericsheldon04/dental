import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

import imgHero       from './assets/hero-new.png';
import imgDentist    from './assets/dentist.png';
import imgExperience from './assets/experience.png';
import imgSmile      from './assets/service-smile.png';
import imgWhitening  from './assets/service-teeth-whitening.jpg';
import imgRootCanal  from './assets/service-root-canal-treatment.jpg';
import imgCrowns     from './assets/service-crowns-bridges.jpg';
import imgImplants   from './assets/service-dental-implants.jpg';
import imgOrtho      from './assets/service-orthodontics-braces.jpg';
import imgPediatric  from './assets/service-pediatric-dentistry.jpg';
import imgCleaning   from './assets/service-teeth-cleaning-scaling.jpg';
import imgGeneral    from './assets/service-general-dentistry.jpg';

const fd = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, delay, ease: [0.4, 0, 0.2, 1] }
});

const services = [
  { icon: '✨', title: 'Smile Makeover',    desc: 'Custom veneers & whitening designed to give you a naturally luminous, confident smile.', img: imgSmile     },
  { icon: '🦷', title: 'Dental Implants',   desc: 'Permanent, natural-feeling tooth replacements crafted for a lifetime of beautiful smiles.', img: imgImplants  },
  { icon: '🌿', title: 'Gentle Root Canal', desc: 'Pain-free preservation of your natural tooth using the latest gentle techniques.', img: imgRootCanal },
  { icon: '💎', title: 'Crowns & Veneers',  desc: 'Precision-crafted restorations that blend seamlessly with your natural teeth.', img: imgCrowns    },
  { icon: '🔆', title: 'Teeth Whitening',   desc: 'Professional brightening treatments for a radiant smile, done in just one visit.', img: imgWhitening },
  { icon: '😊', title: 'Kids Dentistry',    desc: 'A warm, fun environment that makes every child feel safe and excited about dental visits.', img: imgPediatric },
  { icon: '🎯', title: 'Orthodontics',      desc: 'Braces and aligners for a perfectly aligned smile — subtle options available.', img: imgOrtho     },
  { icon: '🌊', title: 'Cleaning & Scaling',desc: 'Deep cleaning sessions that leave your teeth sparkling and your gums healthy.', img: imgCleaning  },
  { icon: '🩺', title: 'General Dentistry', desc: 'Comprehensive check-ups and everyday care to keep your smile in peak condition.', img: imgGeneral   },
];

const testimonials = [
  { name: 'Priya Rajan', loc: 'Sirkazhi',  stars: 5, text: '"The moment I walked in I knew this was different. The staff made me feel like a guest, not a patient. My smile has completely transformed!"' },
  { name: 'Arjun Kumar', loc: 'Chennai',   stars: 5, text: '"Finally a dental studio that doesn\'t feel like a hospital. Beautiful space, zero pain, and my veneers look absolutely natural."' },
  { name: 'Meena Devi',  loc: 'Kollidam',  stars: 5, text: '"Brought my 6-year-old and she actually asked to come back! The team here is incredibly warm and patient. Highly recommended."' },
];

const pillars = [
  { icon: '🛋️', title: 'Spa-Like Comfort',      desc: 'Calm interiors, soothing music, and warm hospitality that make every visit a pleasure.' },
  { icon: '🔬', title: 'Advanced Technology',    desc: 'Latest digital scanning and pain-free equipment for precise, comfortable care.' },
  { icon: '💛', title: 'Personalised Attention', desc: 'Every plan is designed just for you — no cookie-cutter treatments, ever.' },
];

const navItems = [
  { label: 'Services',     id: 'services'     },
  { label: 'Why Us',       id: 'about'        },
  { label: 'Testimonials', id: 'testimonials' },
];

export default function App() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const goTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  return (
    <div>

      {/* ── NAVBAR ── */}
      <header className={`navbar ${scrolled ? 'solid' : ''}`}>
        <div className="wrap nav-inner">

          <a href="/" className="logo">
            Vijaya<span className="logo-dot">·</span>Dental
          </a>

          {/* Desktop Nav */}
          <nav>
            <ul className="nav-links">
              {navItems.map(({ label, id }) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={e => { e.preventDefault(); goTo(id); }}>
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#book" className="nav-cta" onClick={e => { e.preventDefault(); goTo('book'); }}>
                  Book Free Consult
                </a>
              </li>
            </ul>
          </nav>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map(({ label, id }) => (
          <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); goTo(id); }}>
            {label}
          </a>
        ))}
        <a
          href="#book"
          className="mob-cta"
          onClick={e => { e.preventDefault(); goTo('book'); }}
        >
          Book Free Consultation
        </a>
      </div>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-left">
          <motion.div {...fd(0)}>
            <div className="hero-badge">
              <span /> Premium Smile Boutique
            </div>
          </motion.div>

          <motion.h1 {...fd(0.1)}>
            Your Most <em>Confident</em><br />Smile Starts Here
          </motion.h1>

          <motion.p className="hero-sub" {...fd(0.2)}>
            At Vijaya Dental, we blend artistry with care to craft smiles you'll love — in a space that feels nothing like a clinic.
          </motion.p>

          <motion.div className="hero-actions" {...fd(0.3)}>
            <a href="#book" className="btn-primary" onClick={e => { e.preventDefault(); goTo('book'); }}>
              Book Free Consultation ›
            </a>
            <a href="#services" className="btn-outline" onClick={e => { e.preventDefault(); goTo('services'); }}>
              Explore Services
            </a>
          </motion.div>
        </div>

        <div className="hero-right">
          <img src={imgHero} alt="Beautiful smile at Vijaya Dental" />
          <div className="hero-float-card">
            <div className="hf-icon">😊</div>
            <div>
              <strong>10,000+</strong>
              <span>Happy Smiles</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="strip">
        <div className="wrap">
          <div className="strip-inner">
            {[
              { num: '15+',  lbl: 'Years of Care'      },
              { num: '10k+', lbl: 'Happy Smiles'       },
              { num: '99%',  lbl: 'Satisfaction Rate'  },
              { num: '0',    lbl: 'Wait Time Policy'   },
            ].map((s, i) => (
              <motion.div key={i} className="strip-stat" {...fd(i * 0.1)}>
                <span className="num">{s.num}</span>
                <span className="lbl">{s.lbl}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="section" id="services">
        <div className="wrap">
          <motion.div {...fd(0)}>
            <span className="tag">What We Offer</span>
            <h2 className="section-title">
              Treatments Designed<br />Around <em>Your Smile</em>
            </h2>
            <p className="section-sub">
              From your very first visit to your final reveal — every treatment is crafted with precision, comfort, and beauty in mind.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((s, i) => (
              <motion.div key={i} className="service-card" {...fd(i * 0.06)}>
                <div className="svc-img-wrap">
                  <img src={s.img} alt={s.title} className="service-img" />
                </div>
                <div className="service-body">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <a href="#book" className="service-link" onClick={e => { e.preventDefault(); goTo('book'); }}>
                    Book this treatment →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFER BANNER ── */}
      <div className="wrap">
        <motion.div className="offer-band" {...fd(0)}>
          <div>
            <span className="tag">Limited Time Offer</span>
            <h3>Free Consultation<br />This Month</h3>
            <p>Walk in, meet our specialists, and get a personalised smile plan — completely free.</p>
          </div>
          <a href="#book" className="btn-white" onClick={e => { e.preventDefault(); goTo('book'); }}>
            Claim Your Free Slot →
          </a>
        </motion.div>
      </div>

      {/* ── WHY US ── */}
      <section className="section" id="about">
        <div className="wrap">
          <div className="about-grid">
            <motion.div className="about-img-wrap" {...fd(0)}>
              <img src={imgExperience} alt="Vijaya Dental studio" className="about-img-main" />
              <div className="about-badge">
                <strong>15+</strong>
                <span>Years of Smiles</span>
              </div>
              <img src={imgDentist} alt="Our dentist" className="about-img-accent" />
            </motion.div>

            <motion.div {...fd(0.15)}>
              <span className="tag">Why Choose Us</span>
              <h2 className="section-title">
                A Space Where You<br /><em>Actually Relax</em>
              </h2>
              <p className="section-sub">
                We designed Vijaya Dental to feel like a boutique wellness studio — because great dental care starts with great comfort.
              </p>
              <div className="pillars">
                {pillars.map((p, i) => (
                  <div key={i} className="pillar">
                    <div className="pillar-icon">{p.icon}</div>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                <a href="#book" className="btn-primary" onClick={e => { e.preventDefault(); goTo('book'); }}>
                  Book a Visit →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-bg" id="testimonials">
        <div className="wrap">
          <motion.div style={{ textAlign: 'center' }} {...fd(0)}>
            <span className="tag">Happy Guests</span>
            <h2 className="section-title">Real Smiles,<br /><em>Real Stories</em></h2>
          </motion.div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testi-card" {...fd(i * 0.1)}>
                <div className="stars">{'★'.repeat(t.stars)}</div>
                <p>{t.text}</p>
                <div className="testi-author">
                  <div className="av">😊</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.loc}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="section" id="book">
        <div className="wrap">
          <div className="booking-grid">
            <motion.div className="booking-info" {...fd(0)}>
              <span className="tag">Book an Appointment</span>
              <h2 className="section-title">
                Your New Smile<br /><em>Begins Today</em>
              </h2>
              <p>
                Fill in the form and our friendly team will call you to confirm the most convenient slot. No waiting rooms, no hassle.
              </p>
              <div className="contact-details">
                {[
                  { ic: '📍', text: '827/A, Main Road, Kollidam, Gopalasamuthiram, Sirkazhi' },
                  { ic: '📞', text: '+91 98765 43210' },
                  { ic: '🕐', text: 'Mon – Sat: 9 AM – 8 PM' },
                ].map((c, i) => (
                  <div key={i} className="contact-row">
                    <span className="ic">{c.ic}</span>
                    {c.text}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fd(0.15)}>
              <div className="form-box">
                <h3>Book Your Free Consultation</h3>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="form-row">
                    <div className="field">
                      <label>Full Name</label>
                      <input type="text" placeholder="Your name" required />
                    </div>
                    <div className="field">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="+91 00000 00000" required />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email Address</label>
                    <input type="email" placeholder="your@email.com" />
                  </div>
                  <div className="field">
                    <label>Treatment You're Interested In</label>
                    <select defaultValue="">
                      <option value="" disabled>Select a treatment</option>
                      {services.map(s => <option key={s.title}>{s.title}</option>)}
                    </select>
                  </div>
                  <div className="field">
                    <label>Anything to tell us?</label>
                    <textarea placeholder="Any dental concerns or questions..." />
                  </div>
                  <button type="submit" className="btn-primary">
                    Confirm My Free Appointment →
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="logo">
                Vijaya<span className="logo-dot">·</span>Dental
              </a>
              <p>A premium smile boutique in Sirkazhi. Where every visit feels like a treat, not a treatment.</p>
            </div>
            <div className="footer-col">
              <h5>Treatments</h5>
              <ul>
                {services.slice(0, 5).map(s => (
                  <li key={s.title}>
                    <a href="#services" onClick={e => { e.preventDefault(); goTo('services'); }}>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-col">
              <h5>Visit Us</h5>
              <ul>
                <li><a href="#">827/A, Main Road, Kollidam</a></li>
                <li><a href="#">Gopalasamuthiram, Sirkazhi</a></li>
                <li><a href="#">Mon – Sat: 9AM – 8PM</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">WhatsApp Us</a></li>
                <li><a href="#">Google Maps</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Vijaya Dental. All rights reserved.</p>
            <p>Crafted with ♥ for beautiful smiles.</p>
          </div>
        </div>
      </footer>

      {/* ── STICKY MOBILE BAR ── */}
      <div className="sticky-bar">
        <button className="btn-primary" onClick={() => goTo('book')}>
          📅 Book Free Consultation
        </button>
      </div>

    </div>
  );
}
