import React from "react";
import "./App.css";
import Content from "./Content";
import Scroll from "./Scroll";

function App() {
  return (
    <div className="main">
      <div className="header">
        <h1>Back To Top Button</h1>
        <h2>With Scroll Progress</h2>
      </div>
      <Scroll/>
      <Content />
    </div>
  );
}
export default App;
