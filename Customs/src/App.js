import './App.css';
import Examples from './components/Examples';
import Lemon from './components/Lemon';
import ParentComponent from './components/Relement';

function App() {
  return (
    <div className="App">
      <Examples/>
      <ParentComponent/>
      <Lemon/>
    </div>
  );
}

export default App;
