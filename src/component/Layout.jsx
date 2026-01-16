import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import style from "./Layout.module.css";

function Layout() {
  return (
    <>
      <div className={style.container}>
        <Header />
        <main className={style.content}>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
