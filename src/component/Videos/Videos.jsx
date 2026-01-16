import { useEffect, useState } from "react";
import style from "./Videos.module.css";
import { Link } from "react-router-dom";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("/data/youtubeItems.json")
      .then((response) => response.json()) // JSON 형식으로 파싱
      .then((data) => {
        console.log(data); // 데이터 출력
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // 오류 처리
      });
  }, []);

  return (
    <div className={style.videoList}>
      {videos.map((item) => {
        return (
          <article key={item.etag}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to={`/videos/watch/${item.id}`}>
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
