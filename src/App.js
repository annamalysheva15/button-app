import { useState } from "react";

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <div className="mainContainer">
        <div className="awesomeButton" onClick={handleClick}>
          <span>Care to click?</span>
          {isOpen && (
              <div className="textMessage">
                Look at yooouuu!
              </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
