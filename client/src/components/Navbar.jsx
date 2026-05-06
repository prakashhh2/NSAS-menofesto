import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/teamlogo.png" alt="Ek Paila" className="navbar-logo" />
        EK <span>PAILA</span>
      </div>

      <button
        className={`nav-hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span /><span /><span />
      </button>

      <div className={`navbar-links${open ? ' open' : ''}`}>
        <a onClick={() => scroll('manifesto')} href="#manifesto">Manifesto</a>
        <a onClick={() => scroll('plans')} href="#plans">Plans</a>
       
        <a onClick={() => scroll('podcast')} href="#podcast">Podcast</a>
        <a onClick={() => scroll('feedback')} href="#feedback">Feedback</a>
        <div className="nav-divider" />
        <a onClick={() => scroll('candidate-prasun')} href="#candidate-prasun" className="nav-candidate">
          <span className="nav-dot" />
          President
        </a>
        <a onClick={() => scroll('candidate-dipson')} href="#candidate-dipson" className="nav-candidate">
          <span className="nav-dot vp" />
          Vice Pres
        </a>
        <a onClick={() => scroll('candidate-rijan')} href="#candidate-rijan" className="nav-candidate">
          <span className="nav-dot vp" />
          Secretary
        </a>
      </div>
    </nav>
  );
}
