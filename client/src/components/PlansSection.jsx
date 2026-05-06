import { useState } from 'react';
import useReveal from './useReveal';

const PLANS = [
  {
    icon: '☕',
    title: 'Chiya & Guff',
    body: 'We already have chiya and painting, and that\'s been great. On top of that, we want to introduce a simple monthly hangout with no agenda and no RSVP. Just come whenever you can. It could be in someone\'s backyard, a common area, or anywhere convenient. Just tea, conversation, and people. This is especially for those who cannot always make it to bigger events or are still trying to find their place.'
  },
  {
    icon: '📅',
    title: 'NSAS Calendar',
    body: 'We already have a website, so the focus is on keeping it updated and making sure people actually use it. Events should be posted well in advance, and any changes or postponements should be communicated early. No one should be finding out about things at the last minute.'
  },
  {
    icon: '🎓',
    title: 'Support for Incoming Freshmen',
    body: 'This is not a new idea, it is something NSAS should always be doing. We want to make sure every new student from Nepal has someone they can reach out to. Whether it is help with classes, planning, or just settling in, there should always be some form of guidance available.'
  },
  {
    icon: '⚽',
    title: 'Female Participation in Sports',
    body: 'The last panel did a great job organizing sports events, but female participation was low. Instead of ignoring that, we want to understand why and adjust accordingly. That could mean introducing mixed formats, more inclusive activities, or creating events that feel more welcoming and engaging for everyone.'
  },
  {
    icon: '📱',
    title: 'Social Media',
    body: 'We have a decent base right now, but activity drops between events. We want to stay consistent. That means regular posts like fun facts about Nepal, polls, quizzes, behind-the-scenes moments, and student spotlights. Not just announcements, but content that keeps people engaged even when nothing major is happening. This also helps us reach more people and represent our community better.'
  },
  {
    icon: '💰',
    title: 'Financial Reach',
    body: 'Our seniors have built strong relationships with departments, and we will continue that. At the same time, we want to explore other options like ticketed events, campus grants, small sponsorships, and reasonable entry fees for certain events. The goal is sustainability, not profit, so we can plan bigger things without constantly worrying about funding.'
  },
  {
    icon: '🌏',
    title: 'Open Our Events',
    body: 'Our events are already open to everyone, but we need to communicate that better. Through flyers, collaborations, and campus partnerships, we can bring in more non-Nepali students. That helps share our culture and grow our presence. With reasonable pricing where needed, we can cover costs while making events more impactful.'
  }
];

export default function PlansSection() {
  const [open, setOpen] = useState(null);
  const ref = useReveal();

  return (
    <section id="plans">
      <div className="section-header reveal" ref={ref}>
        <div className="section-num">03</div>
        <div>
          <div className="section-title">The Plan</div>
          <div className="section-sub">What we're committing to · How we'll get there</div>
        </div>
      </div>
      <div className="plans-grid">
        {PLANS.map((p, i) => (
          <PlanCard
            key={i}
            icon={p.icon}
            title={p.title}
            body={p.body}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

function PlanCard({ icon, title, body, isOpen, onToggle }) {
  const ref = useReveal();
  return (
    <div className="plan-card reveal" ref={ref}>
      <div className="plan-card-header" onClick={onToggle}>
        <div className="plan-icon">{icon}</div>
        <div className="plan-title">{title}</div>
        <div className={`plan-chevron${isOpen ? ' open' : ''}`}>▼</div>
      </div>
      <div className={`plan-card-body${isOpen ? ' open' : ''}`}>
        <p className="plan-body">{body}</p>
      </div>
    </div>
  );
}
