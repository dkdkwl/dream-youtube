import { useEffect, useState } from "react";
import style from "./Videos.module.css";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchParams.get("q")}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json()) // JSON 형식으로 파싱
      .then((data) => {
        setVideos(data.items);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // 오류 처리
      });
  }, [searchParams]);

  return (
    <div className={style.videoList}>
      {videos.map((item) => {
        return (
          <article key={item.etag}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to={`/videos/watch/${item.id.videoId}`}>
              <div className={style.thumbnail}>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
              </div>
              <div>
                <p className={style.title}>{item.snippet.title}</p>
                <span className={style.views}>조회수 4.8만회</span>
                <span className={style.date}>1개월 전</span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
