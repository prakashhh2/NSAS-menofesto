import useReveal from './useReveal';

function ProfileBlock({ imgSrc, name, role, badgesLeft, children }) {
  const ref = useReveal();
  return (
    <div className="cp-card reveal" ref={ref}>
      <div className="cp-photo-side">
        {imgSrc
          ? <img src={imgSrc} alt={name} className="cp-photo-img" />
          : <div className="cp-photo-fallback">{name[0]}</div>
        }
        <div className="cp-photo-overlay" />
        <div className="cp-photo-info">
          <div className="cp-name">{name}</div>
          <div className="cp-role-pill">{role}</div>
          <div className="cp-badges">
            {badgesLeft.map(b => <span className="stat-badge" key={b}>{b}</span>)}
          </div>
        </div>
      </div>
      <div className="cp-content-side">
        {children}
      </div>
    </div>
  );
}

export default function CandidateProfile() {
  return (
    <div className="candidate-section" id="candidate">

      <div className="candidate-section-label">
        <span className="csl-num">05</span>
        <div>
          <div className="csl-title">Face Behind the Concept: <span className="csl-ek-paila">Ek Paila</span></div>
          <div className="csl-sub">Who's running · What they bring</div>
        </div>
      </div>

      <div className="candidate-inner">

        {/* ── Prasun Devkota ── */}
        <div id="candidate-prasun">
          <div className="candidate-role-tag">President</div>
          <ProfileBlock
            imgSrc="/PeasunSt.jpeg"
            name="Prasun Devkota"
            role="NSAS Presidential Candidate · 2025–26"
            badgesLeft={['Finance Major', 'Freshman', '5+ Yrs Scouting', 'SELU · 2025']}
          >
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
                { year: '2025', event: <><strong>Stayed back after Teej</strong> — Helped with cleanup. Noticed by seniors. Encouraged to run.</> },
                { year: '2025', event: <><strong>Henna Event</strong> — Participated in operations, observed financial flows and resource management.</> },
                { year: '2025', event: <><strong>Launched Ek Paila</strong> — Running for President alongside Dipson Bir Kunwar, Rijan Dhakal, and Dibija Chhetri.</> }
              ].map((t, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-content">{t.event}</div>
                </div>
              ))}
            </div>
          </ProfileBlock>
        </div>

        <div className="candidate-divider" />

        {/* ── Dipson Bir Kuwar ── */}
        <div id="candidate-dipson">
          <div className="candidate-role-tag">Vice President</div>
          <ProfileBlock
            imgSrc="/Dipson.jpeg"
            name="Dipson Bir Kuwar"
            role="Vice Presidential Candidate · 2025–26"
            badgesLeft={['VP Candidate', 'NSAS Member', 'SELU · 2025']}
          >
            <div className="candidate-bio-sub">Vice Presidential Candidate · The steady hand</div>
            <p className="candidate-bio-text">
              Dipson Bir Kuwar steps into this campaign as a steady and dependable presence,
              someone who leads from within, supports without the spotlight, and ensures the
              work actually gets done. He and Prasun connected through their shared belief that
              NSAS can be more than it currently is:{' '}
              <strong>more welcoming, more consistent, more present between the big events.</strong>
            </p>
            <p className="candidate-bio-text">
              As Vice President, Dipson's role is to bridge, between leadership and members,
              between ideas and execution, between those who show up and those who haven't
              felt a reason to yet.{' '}
              <strong>He listens before he speaks, and acts before he announces.</strong>{' '}
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
                { year: '2025', event: <><strong>NSAS Member</strong>  Active participant in community events and gatherings at SELU.</> },
                { year: '2026', event: <><strong>Joined Ek Paila</strong> — Partnered with Prasun to co-build a campaign focused on belonging and inclusion.</> },
                { year: '2025', event: <><strong>Running for VP</strong> Standing for a version of NSAS where no one falls through the cracks.</> }
              ].map((t, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-content">{t.event}</div>
                </div>
              ))}
            </div>
          </ProfileBlock>
        </div>

        <div className="candidate-divider" />

        {/* ── Rijan Dhakal ── */}
        <div id="candidate-rijan">
          <div className="candidate-role-tag">Secretary</div>
          <ProfileBlock
            imgSrc="/Rijan.jpeg"
            name="Rijan Dhakal"
            role="Secretary Candidate · 2025–26"
            badgesLeft={['Secretary Candidate', 'NSAS Member', 'SELU · 2026']}
          >
            <div className="candidate-bio-sub">Secretary Candidate · A bridge, not a title</div>
            <p className="candidate-bio-text">
              Rijan Dhakal is running for Secretary not for the position itself, but because
              he genuinely believes in what NSAS represents —{' '}
              <strong>a home away from home</strong> for every Nepali student at SELU. His
              candidacy is rooted in one simple conviction: this community deserves someone
              who shows up for it.
            </p>
            <p className="candidate-bio-text">
              As Secretary, his focus is on being a{' '}
              <strong>bridge between students and the board</strong> — making sure
              communication is clear, decisions are transparent, and no voice goes unheard or
              unrepresented. He understands that the secretary role is not administrative
              routine; it is the connective tissue of how the organization functions.
            </p>
            <p className="candidate-bio-text">
              <strong>This is not about me — it's about us.</strong> That is not a slogan for
              Rijan; it is the entire reason he is running. Together, he believes NSAS can
              become a more connected, more supportive, and stronger family for every student
              who walks through its door.
            </p>
            <div className="timeline">
              {[
                { year: '2025', event: <><strong>NSAS Member</strong> — Active part of the Nepali student community at SELU.</> },
                { year: '2026', event: <><strong>Joined Ek Paila</strong> — Running alongside Prasun, Dipson, and Dibija to build a more connected NSAS.</> },
                { year: '2026', event: <><strong>Running for Secretary</strong> — Committed to transparent communication and making every voice count.</> },
              ].map((t, i) => (
                <div className="timeline-item" key={i}>
                  <div className="timeline-year">{t.year}</div>
                  <div className="timeline-content">{t.event}</div>
                </div>
              ))}
            </div>
          </ProfileBlock>
        </div>

      </div>
    </div>
  );
}
