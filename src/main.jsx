import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import Home from "./Components/Home.jsx";
import MyEvent from "./Components/MyEvent.jsx";
import StarredEvents from "./Components/StarredEvents.jsx";
import ProfilePage from "./Components/Profile.jsx";
import ProfileForm from "./Components/ProfileForm.jsx";
import Dashboard from "./Components/AdminComponents/Dashboard.jsx";
import OrganzEvents from "./Components/AdminComponents/OrganzEvents.jsx";
import ProgressBar from "./Components/AdminComponents/ProgressBar.jsx";

const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <OrganzEvents/>
      },
      {
        path : "/my-events",
        element : <MyEvent/>
      },
      {
        path : "/starred-events",
        element : <StarredEvents/>
      },
      {
        path : "/profile",
        element : <ProfileForm/>
      },
      {
        path : "/dashboard",
        element : <Dashboard/>
      },
      {
        path : "/organizeEvent",
        element : <OrganzEvents/>
      },
      {
        path : "/organizer-profile",
        element : <ProfilePage/>
      },

    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
