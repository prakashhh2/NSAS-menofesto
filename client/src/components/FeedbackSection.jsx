import useReveal from './useReveal';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe-UXCbGZr3biinfjT1JQHgJoHPuBPQqt8RmNYyZ4eRnWVqDA/viewform';

export default function FeedbackSection() {
  const ref = useReveal();
  return (
    <div className="feedback-section" id="feedback">
      <div className="section-header reveal" ref={ref}>
        <div className="section-num">04</div>
        <div>
          <div className="section-title">Share your thoughts</div>
          <div className="section-sub">Your voice matters to this campaign</div>
        </div>
      </div>
      <div className="feedback-card reveal" ref={ref}>
        <div className="feedback-card-icon"></div>
        <div className="feedback-card-label">Why your feedback matters</div>
        <p className="feedback-msg-text">
          A community only grows when the people inside it are heard. We are not running this
          campaign on assumptions — we want to know what has worked, what has fallen short, and
          what you actually need from NSAS. Whether you have been here since the beginning or
          just arrived, your experience matters and your input will directly shape how we lead.
        </p>
        <p className="feedback-msg-text">
          This form takes less than two minutes. No name required. Just honest thoughts from
          someone who is part of this community. Please take a moment to fill it out — it means
          more than you think.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="feedback-btn"
        >
          Fill out the Feedback Form
        </a>
      </div>
    </div>
  );
}
