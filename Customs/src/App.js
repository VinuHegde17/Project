import './App.css';
import Examples from './components/Examples';
import HeroSection from './components/Hero';
import Lemon from './components/Lemon';
import Navigation from './components/Navigation';
import ParentComponent from './components/Relement';

function App() {
  return (
    <div className="App">
      {/* <Examples/>
      <ParentComponent/>
      <Lemon/> */}
      <Navigation/>
      <HeroSection/>

    </div>
  );
}

export default App;
