import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import RelatedVideos from "../RelatedVideos/RelatedVideos.jsx";
import style from "./VideoDetail.module.css";

export default function VideoDetail() {
  return (
    <>
      <div className={style.videoDetail}>
        <VideoPlayer />
        <RelatedVideos></RelatedVideos>
      </div>
    </>
  );
}
