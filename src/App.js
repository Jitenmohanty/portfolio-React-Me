import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Experince from "./components/Experince";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer.jsx";
import './styles/app.scss';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Experince />
      <Services />
      <Testimonial />
      <Contact />
      <Footer/>
      <Toaster/>
    </>
  );
}

export default App;
