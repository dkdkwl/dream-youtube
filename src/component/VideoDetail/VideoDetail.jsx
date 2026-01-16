import VideoPlayer from "../VideoPlayer/VideoPlayer";
import RelatedVideos from "../RelatedVideos/RelatedVideos.jsx";
import style from "./VideoDetail.module.css";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";


export default function VideoDetail() {
  const params = useParams();
  const [video,setVideo] = useState();
  console.log(params);
  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${params.videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then((response) => response.json()) // JSON 형식으로 파싱
      .then((data) => {
        console.log("data",data); // 데이터 출력
        setVideo(data.items[0]);
        console.log("video",video);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // 오류 처리
      });
  }, [params.videoId]);
  return (
    <>
      <div className={style.videoDetail}>
        <VideoPlayer videoId = {video?.id} title={video?.snippet.title} description={video?.snippet.description} channelTitle={video?.snippet.channelTitle} channelId={video?.snippet.channelId} />
        <RelatedVideos></RelatedVideos>
      </div>
    </>
  );
}
