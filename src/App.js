import "./App.css";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <div className="navbar">
        <div className="wide-nav">
          <ul className="nav-list">
            <li>Menu</li>
            <li>Contact</li>
            <li>About</li>
            <li>Merch</li>
          </ul>
        </div>
        <div id="burger" className={isOpen ? "open" : ""} onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="content">
        <div className="content-item content-0"></div>
        <div className="content-item content-1"></div>
        <div className="content-item content-2"></div>
        <div className="content-item content-3"></div>
        <div className="content-item content-4"></div>
        <div className="content-item content-5"></div>
        <div className="content-item content-6"></div>
        <div className="content-item content-7"></div>
      </div>
    </div>
  );
}

export default App;
