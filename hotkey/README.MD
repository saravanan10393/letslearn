React hook for [github's hotkey package](https://github.com/github/hotkey).

1. Install
```
npm i -S @letslearn/hotkey
```

2. Usage in react hook
```
function KeyCount() {
  let [count, setCount] = React.useState(0);
  console.log("hotkey is comming ", useHotkey);
  // registering ArrowUp key as short cut for increaing counter
  let elementRef = useHotkey("ArrowUp");
  return <h1 ref={elementRef} onClick={() => setCount(prev => prev + 1)}>Type ArrowUp to count: {count}</h1>
}
```
By default, key shortcuts are registerd in global level, if you want to enable shortcut only
when using is typing in particular element, we can use scope to do that

```
function KeyCount() {
  let elementRef = useHotkey("h", {scope: "root"});
}
```

### Options
```
{
    scope: "string"
}
```
scope parameter takes the id of element to enable shortcuts only when the interaction is happening insdie the given element.
eg: cmd+enter inside chat box will trigger the send button.

[Example](https://codesandbox.io/s/dark-fast-u51tm)

> Note: Make sure the sope element supports keydown events. 

For list all key names: [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)