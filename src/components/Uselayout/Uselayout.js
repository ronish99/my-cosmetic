import { useState, useEffect, useLayoutEffect } from "react";
import { useRef } from "react";
export default function LayoutEffect() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();
  useEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);
  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          this is a popup
        </div>
      )}
    </>
  );
}
