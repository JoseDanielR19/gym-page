import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { AboutUs } from "./components/views/AboutUs.jsx";
import { Banner } from "./components/views/Banner.jsx";
import { Footer } from "./components/views/Footer.jsx";
import { Schedules } from "./components/views/Schedules.jsx";
import { Supplements } from "./components/views/Supplements.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <AboutUs />
      <Schedules />
      <Supplements />
      <Footer />
    </>
  );
}

export default App;
