import style from "./VideoPlayer.module.css";

export default function VideoPlayer({
  videoId,
  title,
  description,
  channelTitle,
  channelId,
}) {
  return (
    <div className={style.videoPlayer}>
      <div className={style.playerWrapper}>
        <iframe
          className={style.iframe}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={style.videoInfo}>
        <h1 className={style.title}>{title}</h1>
        <div className={style.channel}>
          <a
            target="_blank"
            href={`https://www.youtube.com/channel/${channelId}`}
            className={style.channelName}
          >
            {channelTitle}
          </a>
        </div>
        <div className={style.description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
