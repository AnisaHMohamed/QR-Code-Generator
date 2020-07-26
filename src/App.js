import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const qrGenerator = (url) => {
    var typeNumber = 4;
    var errorCorrectionLevel = "L";
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(url);
    qr.make();
    document.getElementById("placeHolder").innerHTML = qr.createImgTag();
  };

  return (
    <div className="App">
      <script type="text/javascript" src="qrcode.js"></script>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div id="placeHolder"></div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
