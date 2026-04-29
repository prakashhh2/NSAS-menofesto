import { useState } from 'react';
import useReveal from './useReveal';

const PLANS = [
  {
    icon: '☕',
    title: 'Chiya & Guff — The drop-in meetup',
    body: <>Not chiya and painting — that already exists and it's great. This is different. <strong>A monthly no-agenda, no-RSVP, come-whenever gathering</strong> — someone's backyard, a common area, wherever. Just tea, just conversation, just people. For the ones who can't make the big events. For the ones who are still finding their feet.</>
  },
  {
    icon: '📅',
    title: "NSAS Calendar — So nobody's caught off guard",
    body: <>A proper, shared calendar of all upcoming events — posted well in advance. <strong>No more finding out about things last minute.</strong> People can plan around it, tell their managers at work, actually show up.</>
  },
  {
    icon: '🎓',
    title: 'Real support for incoming freshmen',
    body: <>When I landed, I had no clue. Class selection, academic paths, how things actually work here — <strong>nobody should have to figure that out alone.</strong> We'll make sure every new student from Nepal has someone to call who's been through it. Not a pamphlet. A person.</>
  },
  {
    icon: '⚽',
    title: 'Female participation in sports — actually fix it',
    body: <>The previous panel did a great job with the sports event. But female engagement was low — and that's not anyone's fault, it's a design problem. <strong>We'll restructure sports events so women aren't an afterthought — mixed formats, more inclusive activities, events designed so everyone actually wants to be there.</strong></>
  },
  {
    icon: '📱',
    title: 'Social media that actually lives',
    body: <>396 followers, 95 posts — decent base. But we go quiet between events. <strong>Daily presence: fun facts about Nepal, quizzes, polls, behind-the-scenes, student spotlights.</strong> Not just event announcements. Content that makes people feel like they're part of something even when there's no event happening.</>
  },
  {
    icon: '💰',
    title: "Financial reach — don't just depend on one source",
    body: <>Our seniors built strong relationships with department heads — that funding tradition continues and I'll work to expand it. But we also explore <strong>ticketed events, campus grants, small sponsorships, and reasonable entry fees for outsider-facing events.</strong> Sustainability, not profit.</>
  },
  {
    icon: '🌏',
    title: 'Open our events — share our culture',
    body: <>Our events are already open to everyone. We just need to actually tell people. <strong>Flyers, campus partnerships, cross-org collaborations.</strong> More non-Nepali faces at our events means more people understanding our culture — and more eyes on what NSAS really is.</>
  }
];

function PlanCard({ icon, title, body }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal();
  return (
    <div className="plan-card reveal" ref={ref}>
      <div className="plan-card-header" onClick={() => setOpen(o => !o)}>
        <div className="plan-icon">{icon}</div>
        <div className="plan-title">{title}</div>
        <div className={`plan-chevron${open ? ' open' : ''}`}>▼</div>
      </div>
      <div className={`plan-card-body${open ? ' open' : ''}`}>
        <div className="plan-body">{body}</div>
      </div>
    </div>
  );
}

export default function PlansSection() {
  const ref = useReveal();
  return (
    <div id="plans">
      <div className="section-header reveal" ref={ref}>
        <div className="section-num">03</div>
        <div>
          <div className="section-title">What Ek Paila will actually do</div>
          <div className="section-sub">Specific. Realistic. No empty promises. Click to expand.</div>
        </div>
      </div>
      {PLANS.map((p, i) => (
        <PlanCard key={i} {...p} />
      ))}
    </div>
  );
}
