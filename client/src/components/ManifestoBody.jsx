import useReveal from './useReveal';

function StoryCard({ children }) {
  const ref = useReveal();
  return <div className="story-card reveal" ref={ref}>{children}</div>;
}

function SectionHeader({ num, title, sub }) {
  const ref = useReveal();
  return (
    <div className="section-header reveal" ref={ref}>
      <div className="section-num">{num}</div>
      <div>
        <div className="section-title">{title}</div>
        <div className="section-sub">{sub}</div>
      </div>
    </div>
  );
}

export default function ManifestoBody() {
  return (
    <div>
      <div className="opening">
        <p>
          I didn't know what NSAS was when I landed. I figured it out the same
          way most of you did — by showing up, looking around, and slowly finding
          my people. I'm not running because I have everything figured out.{' '}
          <strong>
            I'm running because I know exactly what it feels like to be new
            here, to be grinding, and to still not feel like enough — and I
            think we can fix that.
          </strong>
        </p>
      </div>

      <div id="manifesto">
        <SectionHeader num="01" title="Who I am & why I'm here" sub="The story behind the campaign" />
        <StoryCard>
          <p>
            I'm Prasun Devkota — freshman, finance major, second semester. I came
            in 2025 not knowing a single person in NSAS. My first real
            introduction to this community was the Teej program. After the event
            ended, while most people left,{' '}
            <strong>I stayed back and helped clean up.</strong> That's when Riyag
            bhai noticed me and suggested I run. That moment tells you everything
            about how I approach things.
          </p>
        </StoryCard>
        <StoryCard>
          <p>
            Since then I've been part of the Henna event — watched how the
            finances work, how reservations are made, how department funding
            flows, how food and resources get managed. I'm still learning. But{' '}
            <strong>
              I'm a finance major — numbers, planning, and making things
              sustainable is literally what I'm here to study.
            </strong>{' '}
            And I've been doing real event management since my Nepal Scout days —
            5+ years of coordinating people, programs, and logistics on the
            ground.
          </p>
        </StoryCard>
        <StoryCard>
          <p>
            People say I'm too young, too new, too inexperienced. But who here
            walked in knowing everything?{' '}
            <strong>
              Nobody figures it out before they start. They figure it out by
              starting.
            </strong>{' '}
            I've been inside this community since day one — not watching from the
            outside, not applying because it looks good on a resume. Because I
            actually care.
          </p>
        </StoryCard>

        <SectionHeader num="02" title="What's actually going on" sub="The reality we don't always say out loud" />
        <StoryCard>
          <p>
            Our big events — Teej, Henna, sports — they're genuinely good. The
            vibe after, the dancing, the food, being around your own people far
            from home —{' '}
            <strong>that's irreplaceable and we should protect it.</strong> But we
            always miss people. Not because they don't care — because life here is
            relentless. Class, work, study, repeat. A 5–6 hour event on the wrong
            day is just too much.
          </p>
        </StoryCard>
        <StoryCard>
          <p>
            And even when people show up — some of them are still on the edge.
            Sitting quietly. Waiting for someone to come to them. Feeling like
            everyone else knows each other and they missed something.{' '}
            <strong>
              Nobody tells you that you don't belong. But sometimes you feel it
              anyway.
            </strong>
          </p>
        </StoryCard>
        <StoryCard>
          <p>
            Then there's the comparison. Someone's already got an internship.
            Someone switched to a better major. Someone seems to have it all
            figured out. That pressure is real and it affects people more than we
            talk about — including what classes they choose, what paths they take,
            how confident they feel walking into a room.
          </p>
        </StoryCard>
      </div>
    </div>
  );
}
