import { createRef, useEffect } from "react";
import { install, uninstall } from "@github/hotkey";


export function useHotkey(keybinding = "", options = { scope: "" }) {
  const elementRef = createRef(null);

  useEffect(() => {
    console.log(" react effect at hotkey ");
    if(!elementRef.current || !elementRef.current instanceof HTMLElement) return () => {};

    if(options.scope) {
      elementRef.current.dataset.hotkeyScope = options.scope
    }
    install(elementRef.current, keybinding);

    return () => {
      if(elementRef.current) {
        uninstall(elementRef.current);
      }
    }
  }, [keybinding, elementRef.current]);

  return elementRef;
}
