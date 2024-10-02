import { useState } from 'react';
import './App.css';
import DarkMode from './components/DarkMode/DarkMode';

function App() {
  return (
    <div className="App-header ">
      <DarkMode />
      {/* <header className="App-header">
        <h1>Dark Mode Test</h1>
        <p>
          Switch between light and dark themes using the toggle above.
        </p>
      </header> */}
    </div>
  );
}

export default App;
