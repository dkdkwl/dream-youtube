import { Routes, Route } from "react-router-dom";
import Videos from "./component/Videos";
import VideoDetail from "./component/VideoDetail";

function App() {
  const Videos = () => <div>비디오</div>;
  const HomePage = () => <div>홈페이지</div>;
  const NotFoundPage = () => <div>페이지를 찾을 수 없습니다</div>;
  return <>
      <Routes>
        {/*
      \ path="/"는 홈페이지 경로 */}
        <Route path="/" element={<HomePage />} />
        {/* path="/about"은 소개 페이지 경로 */}
        <Route path="/videos" element={<Videos />} />
        {/* 정의되지 않은 다른 모든 경로 처리 (예: 404 페이지) */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  </>;
}

export default App;
