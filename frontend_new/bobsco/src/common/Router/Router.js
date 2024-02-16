import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/courses";
import VedhikModel from "../../components/vedhik-model";
import App from "../../App";
import About from "../../components/about/About";

export default createBrowserRouter([
  {
    path: "/course",
    element: <Courses />,
  },
  {
    path: "/evedhik",
    element: <VedhikModel />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
