"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const move = (e) => setCoords({ x: e.clientX, y: e.clientY });
    const hide = () => setHidden(true);
    const show = () => setHidden(false);
    const addFocus = () => setFocus(true);
    const removeFocus = () => setFocus(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);
    document.addEventListener("mousedown", addFocus);
    document.addEventListener("mouseup", removeFocus);

    const interactiveSelectors =
      "a, button, [role='button'], input, textarea, select, .ltg-interactive";
    const interactives = document.querySelectorAll(interactiveSelectors);
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addFocus);
      el.addEventListener("mouseleave", removeFocus);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
      document.removeEventListener("mousedown", addFocus);
      document.removeEventListener("mouseup", removeFocus);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", addFocus);
        el.removeEventListener("mouseleave", removeFocus);
      });
    };
  }, []);

  const style = {
    transform: `translate(${coords.x}px, ${coords.y}px) translate(-50%, -50%)`,
  };

  return (
    <>
      <div
        className={`ltg-cursor ${hidden ? "ltg-cursor-hidden" : ""}`}
        style={style}
      />
      <div
        className={`ltg-cursor-ring ${
          hidden ? "ltg-cursor-hidden" : ""
        } ${focus ? "ltg-cursor-ring-focus" : ""}`}
        style={style}
      />
    </>
  );
}

