import { useState } from 'react';
import useReveal from './useReveal';

function ProfileBlock({ imgSrc, name, role, badgesLeft, children }) {
  const ref = useReveal();
  return (
    <div className="candidate-profile-grid reveal" ref={ref}>
      <div className="candidate-photo-col">
        {imgSrc
          ? <img src={imgSrc} alt={name} className="candidate-photo" />
          : <div className="candidate-photo-placeholder">{name[0]}</div>
        }
        <div className="candidate-photo-name">{name}</div>
        <div className="candidate-photo-role">{role}</div>
        <div className="candidate-stats">
          {badgesLeft.map(b => <span className="stat-badge" key={b}>{b}</span>)}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function TeamCard({ emoji, name, role, desc }) {
  const ref = useReveal();
  return (
    <div className="team-card reveal" ref={ref}>
      <div className="team-avatar">{emoji}</div>
      <div className="team-name">{name}</div>
      <div className="team-role">{role}</div>
      <p className="team-desc">{desc}</p>
    </div>
  );
}

export default function CandidateProfile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="candidate-section" id="candidate">
      <div className="see-more-bar" onClick={() => setOpen(o => !o)}>
        <span>About the Candidates</span>
        <span className={`see-more-arrow${open ? ' open' : ''}`}>▼</span>
      </div>

      <div className={`candidate-drawer${open ? ' open' : ''}`}>
        <div className="candidate-drawer-inner">

          {/* ── Prasun Devkota ── */}
          <ProfileBlock
            imgSrc="/candidate.png"
            name="Prasun Devkota"
            role="NSAS Presidential Candidate · 2025–26"
            badgesLeft={['Finance Major', 'Freshman', '5+ Yrs Scouting', 'SELU · 2025']}
          >
            <div className="candidate-bio-title">Prasun Devkota</div>
            <div className="candidate-bio-sub">Presidential Candidate · The story behind the campaign</div>
            <p className="candidate-bio-text">
              Prasun arrived at Southeastern Louisiana University in 2025 as a freshman Finance
              major with no connections in NSAS — just curiosity and a willingness to show up.
              His introduction came through Teej, where{' '}
              <strong>instead of leaving after the event, he stayed back and helped clean up.</strong>{' '}
              That quiet act caught attention, and a recommendation to run followed.
            </p>
            <p className="candidate-bio-text">
              Before SELU, he spent <strong>over five years with Nepal Scouts</strong> —
              coordinating events, managing logistics, and building ground-level leadership.
              He brings that same mindset to NSAS: show up, be useful, keep the community moving.
            </p>
            <p className="candidate-bio-text">
              His campaign, <strong>Ek Paila (One Step)</strong>, is about small consistent
              actions — a shared calendar, drop-in meetups, better freshman support — that make
              belonging feel real, not just advertised.
            </p>
            <div className="timeline">
              {[
                { year: '2019–', event: <><strong>Nepal Scouts</strong> — 5+ years of event management, leadership, and community coordination.</> },
                { year: '2025', event: <><strong>Arrived at SELU</strong> — Enrolled as a Finance major. First exposure to NSAS via Teej.</> },
                { year: '2025', event: <><strong>Stayed back after Teej</strong> — Helped with cleanup. Noticed by seniors. Encouraged to run.</> },
                { year: '2025', event: <><strong>Henna Event</strong> — Participated in operations, observed financial flows and resource management.</> },
                { year: '2025', event: <><strong>Launched Ek Paila</strong> — Running for President alongside Dipson Bir Kuwar and Rijan Dhakal.</> }
              ].map((t, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-content">{t.event}</div>
                </div>
              ))}
            </div>
          </ProfileBlock>

          <div className="candidate-divider" />

          {/* ── Dipson Bir Kuwar ── */}
          <ProfileBlock
            imgSrc={null}
            name="Dipson Bir Kuwar"
            role="Vice Presidential Candidate · 2025–26"
            badgesLeft={['VP Candidate', 'NSAS Member', 'SELU · 2025']}
          >
            <div className="candidate-bio-title">Dipson Bir Kuwar</div>
            <div className="candidate-bio-sub">Vice Presidential Candidate · The steady hand</div>
            <p className="candidate-bio-text">
              Dipson Bir Kuwar steps into this campaign as a steady and dependable presence —
              someone who leads from within, supports without the spotlight, and ensures the
              work actually gets done. He and Prasun connected through their shared belief that
              NSAS can be more than it currently is:{' '}
              <strong>more welcoming, more consistent, more present between the big events.</strong>
            </p>
            <p className="candidate-bio-text">
              As Vice President, Dipson's role is to bridge — between leadership and members,
              between ideas and execution, between those who show up and those who haven't
              felt a reason to yet.{' '}
              <strong>
                He listens before he speaks, and acts before he announces.
              </strong>{' '}
              That combination of patience and decisiveness is exactly what this panel needs
              alongside Prasun's energy.
            </p>
            <p className="candidate-bio-text">
              He understands that the VP position isn't just a backup role. It's the engine
              that keeps the president's plans grounded — handling coordination, following up,
              and making sure no part of the community is left behind.{' '}
              <strong>Dipson brings accountability to a campaign built on integrity.</strong>
            </p>
            <div className="timeline">
              {[
                { year: '–', event: <><strong>NSAS Member</strong> — Active participant in community events and gatherings at SELU.</> },
                { year: '–', event: <><strong>Joined Ek Paila</strong> — Partnered with Prasun to co-build a campaign focused on belonging and inclusion.</> },
                { year: '2025', event: <><strong>Running for VP</strong> — Standing for a version of NSAS where no one falls through the cracks.</> }
              ].map((t, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-content">{t.event}</div>
                </div>
              ))}
            </div>
          </ProfileBlock>

          {/* ── Full team ── */}
          <div className="team-section-title">The Full Team</div>
          <div className="team-grid">
            <TeamCard emoji="👑" name="Prasun Devkota" role="President"
              desc="Finance major, Nepal Scout, 5+ years of event management. Believes every step forward counts." />
            <TeamCard emoji="🤝" name="Dipson Bir Kuwar" role="Vice President"
              desc="The steady bridge between ideas and action. Ensures every member feels seen and heard." />
            <TeamCard emoji="📋" name="Rijan Dhakal" role="Secretary"
              desc="Organized and dependable. Ensures nothing falls through the cracks and every voice is recorded." />
          </div>

        </div>
      </div>
    </div>
  );
}
