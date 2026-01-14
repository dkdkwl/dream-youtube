import style from "./VideoPlayer.module.css";

export default function VideoPlayer() {
  return (
    <div className={style.videoPlayer}>
      <div className={style.playerWrapper}>
        <iframe
          className={style.iframe}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={style.videoInfo}>
        <h1 className={style.title}>
          Run BTS! 2022 Special Episode - Fly BTS Fly Part 2
        </h1>
        <div className={style.channel}>
          <span className={style.channelName}>BANGTANTV</span>
        </div>
        <div className={style.description}>
          <p>
            RunBTS #달려라방탄 #달방 Connect with BTS: https://ibighit.com/bts
            http://twitter.com/BTS_twt ...
          </p>
        </div>
      </div>
    </div>
  );
}
