import { useState, useEffect } from 'react';
import useReveal from './useReveal';

const OPTIONS = [
  'Chiya & Guff Meetups',
  'NSAS Event Calendar',
  'Freshman Support',
  'Female Sports Inclusion',
  'Social Media Growth',
  'Financial Sustainability',
  'Open Cultural Events'
];

export default function PollSection() {
  const [voted, setVoted] = useState(null);
  const ref = useReveal();

  useEffect(() => {
    const saved = localStorage.getItem('nsas_poll_choice');
    if (saved) setVoted(saved);
  }, []);

  const vote = (option) => {
    if (voted) return;
    setVoted(option);
    localStorage.setItem('nsas_poll_choice', option);
  };

  return (
    <div className="poll-section" id="poll">
      <div className="reveal" ref={ref}>
        <div className="poll-title">What matters most to you?</div>
        <div className="poll-sub">Select your top priority for the year ahead</div>
        <div className="poll-options">
          {OPTIONS.map(opt => (
            <div
              key={opt}
              className={`poll-option${voted === opt ? ' voted' : ''}${voted && voted !== opt ? ' dimmed' : ''}`}
              onClick={() => vote(opt)}
            >
              <div className="poll-option-inner">
                <span className="poll-option-label">{opt}</span>
                {voted === opt && <span className="poll-check">✓</span>}
              </div>
            </div>
          ))}
        </div>
        {voted
          ? <div className="poll-voted-msg">You voted: <strong style={{ color: 'var(--gold-light)' }}>{voted}</strong>. Thank you!</div>
          : <div className="poll-voted-msg">Click an option to register your priority.</div>
        }
      </div>
    </div>
  );
}
