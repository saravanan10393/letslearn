import React from "react";
import { render } from "react-dom";
import { useHotkey } from "@letslearn/usehotkey"

function Welcome() {
  let [count, setCount] = React.useState(0);
  console.log("hotkey is comming ", useHotkey);
  let elementRef = useHotkey("h", {scope: "input"});
  return (
    <>
    <h1 ref={elementRef} onClick={() => setCount(prev => prev + 1)}>Type h to greet {count}</h1>
    <input type="text" id="input" />
   </>
  )
}

render(<Welcome />, document.getElementById("root"));