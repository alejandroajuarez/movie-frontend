import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { ActorsPage } from "./ActorsPage";
import { ActorsNew } from "./ActorsNew";
import { Footer } from "./Footer";
import { LogoutLink } from "./LogoutLink";
import { ActorsIndexPage } from "./ActorsIndexPage";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
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