import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/Hero";
import Moto from "./components/moto";
import Courses from "./components/courses";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Hero />
      <Moto />
      <Courses />
    </>
  );
}

export default App;
