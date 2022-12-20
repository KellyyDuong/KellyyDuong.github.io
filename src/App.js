import './App.css';
import "./styles/Global.css";
import Intro from './components/Intro';
import About from './components/About';
import SidebarNav from './components/SidebarNav';
import Credits from './components/Credits';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Credits></Credits>
      </div>
      <SidebarNav></SidebarNav>
    </div>
  );
}

export default App;
