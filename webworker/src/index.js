import React from "react";
import { render } from "react-dom";
// Add this in node_modules/react-dom/index.js
window.React1 = require('react');

import { useHotkey } from "@letslearn/usehotkey"
// Add this in your component file
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);


function Welcome() {
  let [count, setCount] = React.useState(0);
  console.log("hotkey is comming ", useHotkey);
  let elementRef = useHotkey("h");
  return <h1 ref={elementRef} onClick={() => setCount(prev => prev + 1)}>Type h to greet {count}</h1>
}

render(<Welcome />, document.getElementById("root"));