import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ActorsPage } from "./ActorsPage";
import { ActorsNew } from "./ActorsNew";
import { Footer } from "./Footer";
import { LogoutLink } from "./LogoutLink";
import { ActorsIndexPage } from "./ActorsIndexPage"
import { ActorsShowPage } from "./ActorsShowPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div className="flex bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen flex-col">
        <Header />
        <div className="container mx-auto p-4 flex-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ActorsPage />,
      },
      {
        path: "/actors",
        element: <ActorsIndexPage />,
        loader: () => axios.get("/actors.json").then((response) => response.data),
      },
      {
        path: "/actors/:id",
        element: <ActorsShowPage />,
        loader: ({ params }) => axios.get(`/actors/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/actors/new",
        element: <ActorsNew />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/logout",
        element: <LogoutLink />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;