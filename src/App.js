import {useEffect} from "react";
import Aos from "aos";
import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/UI/Hero";
import Contact from "./Components/UI/Contact";
import Footer from "./Components/Footer/Footer";
import Portfolio from "./Components/UI/Portfolio";
import Achievements from "./Components/UI/Achievements";
import Hobbies from "./Components/UI/Hobbies";

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);

  return (
      <div className="App">
        <Header/>
        <main>
          <Hero/>
            <Portfolio/>
            <Achievements/>
            <Hobbies/>
          <Contact/>
        </main>
        <Footer/>
      </div>
  );
}

export default App;
