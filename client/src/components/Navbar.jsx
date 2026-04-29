export default function Navbar() {
  const scroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">EK <span>PAILA</span></div>
      <div className="navbar-links">
        <a onClick={() => scroll('manifesto')} href="#manifesto">Manifesto</a>
        <a onClick={() => scroll('plans')} href="#plans">Plans</a>
        <a onClick={() => scroll('poll')} href="#poll">Vote</a>
        <a onClick={() => scroll('feedback')} href="#feedback">Feedback</a>
        <a onClick={() => scroll('candidate')} href="#candidate">About</a>
      </div>
    </nav>
  );
}
