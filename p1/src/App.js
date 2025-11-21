import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drone Map App</h1>
      </header>
      <main>
        <div id="map-container" style={{ width: '100%', height: '500px', backgroundColor: '#eee' }}>
          {/* Map will be rendered here */}
        </div>
        <div id="joystick-container" style={{ width: '200px', height: '200px', border: '1px solid black', margin: '20px auto' }}>
          {/* Joystick will be rendered here */}
        </div>
      </main>
    </div>
  );
}

export default App;