import React from 'react';
import './App.css';
import AirInput from './components/inputs/AirInput';

function App() {
  return (
    <div className="container mx-auto">
      <div>
        <AirInput placeholder="Some Placeholder Text" />
      </div>
    </div>
  );
}

export default App;
