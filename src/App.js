import './App.css';
import Wheel from './Wheel';
import Screen from './Screen';

function App() {
  return (
    <div className="App">
        <div className="upper-half">
            < Screen />
        </div>
      <div className="bottom-half">
        < Wheel />
      </div>
    </div>
  );
}

export default App;
