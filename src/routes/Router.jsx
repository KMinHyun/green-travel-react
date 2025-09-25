import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/Main.jsx";
import App from "../App.jsx";
import FestivalList from "../components/festivals/FestivalList.jsx";
import FestivalDetail from "../components/festivals/FestivalDetail.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'festivals',
        element: <FestivalList />
      },
      {
        path: 'festivals/:id',
        element: <FestivalDetail />
      },
    ]
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router;