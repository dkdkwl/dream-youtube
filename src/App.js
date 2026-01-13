import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Videos from "./component/Videos/Videos";
import VideoDetail from "./component/VideoDetail";
import Layout from "./component/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Videos /> },
      { path: "videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
