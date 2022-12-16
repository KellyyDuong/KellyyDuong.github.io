import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import SidebarNav from './components/SidebarNav';

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro>
        <About></About>
      </div>
      <SidebarNav></SidebarNav>
    </div>
  );
}

export default App;
