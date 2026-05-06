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
          Down provided is a list of things I would like to focus on during my campaign:
        </p>
      </div>

      <div id="manifesto">
        <SectionHeader num="01" title="Who I am & why I'm here" sub="The story behind the campaign" />
        <StoryCard>
          <p>
            I am Prasun Devkota, a finance major who joined (SELU) in 2025 without knowing
            anyone in NSAS. My first meaningful introduction to the community was through the
            Teej program. Since then, I have made a consistent effort to stay involved and
            understand how the organization operates. I have taken interest in learning about
            financial processes, event reservations, departmental funding, and the management
            of food and resources. I am still in the process of learning, but I am committed
            to improving through active participation.
          </p>
        </StoryCard>
        <StoryCard>
          <p>
            In terms of event management, I bring prior experience from my time with Nepal
            Scouts, where I spent over five years coordinating people and managing
            responsibilities. This background has helped me develop organizational and
            teamwork skills that I continue to build upon here.
          </p>
        </StoryCard>
        <StoryCard>
          <p>
            I understand that some may view me as new or inexperienced. However, no one begins
            with complete knowledge. Growth comes from involvement, effort, and willingness to
            learn. I have been actively engaging with the community not for appearances, but to
            genuinely develop my skills and contribute meaningfully.
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
            And even when people do show up, it does not always mean they feel fully involved.
            You can be present, talk to others, and still feel like you are not really part of
            things. It is not that people are unwelcoming, but sometimes it just feels like you
            are not fully connected or included in the bigger picture.
          </p>
        </StoryCard>
      </div>
    </div>
  );
}
