import "./App.css";
import Router from "./common/Router/Router";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <RouterProvider router={Router} />
    </Layout>
  );
}

export default App;
