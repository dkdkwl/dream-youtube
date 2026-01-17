import React, { useEffect, useState } from "react";
import style from "./RelatedVideos.module.css";
import { Link } from "react-router-dom";

export default function RelatedVideos({ videoId, categoryId }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${categoryId}&regionCode=KR&maxResults=8&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((response) => response.json()) // JSON 형식으로 파싱
      .then((data) => {
        let shuffleData = [...(data.items || [])].sort(
          () => Math.random() - 0.5
        );
        let resultItems = shuffleData.filter((item) => item.id !== videoId);
        setVideos(resultItems || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // 오류 처리
      });
  }, [categoryId, videoId]);

  return (
    <div className={style.videoList}>
      {videos?.map((item) => {
        return (
          <article key={item.etag}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to={`/videos/watch/${item.id.videoId || item.id}`}>
              <div className={style.thumbnail}>
                <img src={item.snippet.thumbnails.medium.url} alt="" />
              </div>
              <div className={style.textbox}>
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
