import React, { useEffect, useState, useRef } from "react";

export default function Cursor() {
  const [target, setTarget] = useState("");
  const Mouse = useRef();
  useEffect(() => {
    const handleMouse = (e) => {
      const MouseMove = Mouse.current;

      MouseMove.style.top = e.pageY + "px";
      MouseMove.style.left = e.pageX + "px";
      document.addEventListener("click", () => {
        MouseMove.classList.add("expand");
        setTimeout(() => {
          MouseMove.classList.remove("expand");
        }, 500);
      });
    };
    document.addEventListener("mousemove", handleMouse);
    return () => {
      document.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return <div className="cursor" ref={Mouse}></div>;
}
