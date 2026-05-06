import useReveal from './useReveal';

const VIDEO_ID = 'hose0wNChLU';

export default function PodcastSection() {
  const refLeft = useReveal();
  const refRight = useReveal();

  return (
    <section className="podcast-section" id="podcast">
      <div className="podcast-inner">

        <div className="podcast-text reveal" ref={refLeft}>
          <div className="podcast-eyebrow">Ek Paila · On Air</div>
          <h2 className="podcast-title">
            Hear it straight from<br />
            <span>the candidates</span>
          </h2>
          <p className="podcast-desc">
            Prasun and Dipson sat down for a candid podcast conversation — no scripts, no
            PR polish. They talk about why they're running, what NSAS has been missing, and
            what <strong>Ek Paila</strong> actually looks like in practice.
          </p>
          <p className="podcast-desc">
            If you want to know the people behind the campaign before you vote, this is the
            best place to start.
          </p>
          <a
            href={`https://youtu.be/${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="podcast-yt-link"
          >
            Watch on YouTube ↗
          </a>
        </div>

        <div className="podcast-video-wrap reveal" ref={refRight}>
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="Ek Paila Podcast"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}
