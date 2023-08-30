import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Experince from "./components/Experince";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact.jsx";
import './styles/app.scss';
import './styles/header.scss';

function App() {
  return (
    <>
     <Header/>
     <Home/>
     <Work/>
     <Experince/>
     <Services/>
     <Testimonial/>
     <Contact/>
    </>
  );
}

export default App;
