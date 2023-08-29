import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Experince from "./components/Experince";
import Services from "./components/Services.jsx";
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
    </>
  );
}

export default App;
