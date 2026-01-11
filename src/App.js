import { Routes, Route } from "react-router-dom";
import Videos from "./component/Videos/Videos";
import Header from "./component/Header/Header";
import styles from "./asset/common.module.css";

function App() {
  const NotFoundPage = () => <div>페이지를 찾을 수 없습니다</div>;
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Routes>
          {/*
      \ path="/"는 홈페이지 경로 */}
          <Route path="/" element={<Videos />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
