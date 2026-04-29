import useReveal from './useReveal';

// ── Replace the src below with your actual Google Form embed URL ──
// In Google Forms: Send → Embed (<>) → copy the src from the iframe code
const GOOGLE_FORM_EMBED_URL =
  'https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true';

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
      <div className="google-form-wrapper reveal" ref={ref}>
        <iframe
          src={GOOGLE_FORM_EMBED_URL}
          title="Ek Paila Feedback Form"
          className="google-form-iframe"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading form…
        </iframe>
      </div>
    </div>
  );
}
