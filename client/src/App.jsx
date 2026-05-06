import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ManifestoBody from './components/ManifestoBody';
import PlansSection from './components/PlansSection';
import FeedbackSection from './components/FeedbackSection';
import CandidateProfile from './components/CandidateProfile';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="m-body">
        <ManifestoBody />
        <PlansSection />
        <FeedbackSection />
        <div className="closing-block">
          <div className="closing-big">
            Vote for the version of NSAS<br />
            <span>you actually wanted when you first got here.</span>
          </div>
          <div className="closing-deva">एक पाईला, एउटै दिशा 🙏</div>
          <div className="team-row">
            <div><div className="tm-name">Prasun Devkota</div><div className="tm-role">President</div></div>
            <div><div className="tm-name">Dipson Bir Kunwar</div><div className="tm-role">Vice President</div></div>
            <div><div className="tm-name">Rijan Dhakal</div><div className="tm-role">Secretary</div></div>
            <div><div className="tm-name">Dibija Chhetri</div><div className="tm-role">Social Media</div></div>
          </div>
        </div>
      </div>
      <CandidateProfile />
    </>
  );
}
