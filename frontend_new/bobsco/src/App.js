import "./App.css";
import Router from "./common/Router/Router";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <Layout>
      <RouterProvider router={Router} />
    </Layout>
  );
}

export default App;
