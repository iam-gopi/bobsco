import { createBrowserRouter } from "react-router-dom";
import Courses from "../../components/courses";
import VedhikModel from "../../components/vedhik-model";
import About from "../../components/about/About";
import Home from "../../components/home/Home";
import Testimonial from "../../components/testimonial/Testimonial";

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
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/testimonial",
    element: <Testimonial />,
  },
]);
