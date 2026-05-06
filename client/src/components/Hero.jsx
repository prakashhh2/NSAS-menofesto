export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-bg-text">EK PAILA</div>

      <div className="hero-content">
        {/* Left — text */}
        <div className="hero-left">
          <div className="hero-eyebrow">
            NSAS Presidential Candidate · Southeastern Louisiana University
          </div>
          <h1 className="hero-name">
            PRASUN<br /><span>DEVKOTA</span>
          </h1>
          <div className="hero-title">For President · 2025–26</div>
          <div className="hero-tagline">
            <span>Less Pressure.</span>
            <span>More Belonging.</span>
          </div>
          <div className="hero-devanagari">एक पाईला, एउटै दिशा</div>
          <div className="hero-sub">One step, same direction.</div>
          <a
            href="#manifesto"
            className="hero-cta"
            onClick={(e) => { e.preventDefault(); scrollTo('manifesto'); }}
          >
            Read the Manifesto ↓
          </a>
        </div>

        {/* Right — image card */}
        <div className="hero-right">
          <div className="hero-image-frame">
            <img src="/teamlogo.png" alt="Ek Paila Logo" />
            <div className="logo-label">The meaning behind Ek Paila</div>
            <p>
              Not everyone has it figured out. Just one step — towards better
              education, better opportunities, a better future. Together.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-glow" />
      <div className="hero-glow-2" />

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
