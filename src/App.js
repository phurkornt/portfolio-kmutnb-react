import Header from "./components/body/header";
import Home from "./components/home";
import About from "./components/about";
import './styles/font.css';
import Skill from "./components/skill";
import Exp from "./components/exp";
import Contact from "./components/contact";
import Footer from "./components/body/footer";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <About/>
      <Skill/>
      <Exp/>
      <Contact/>
      <Footer/>
    </>


  )
}

export default App;
