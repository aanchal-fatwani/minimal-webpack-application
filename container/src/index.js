import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";

const rootEle = document.getElementById("root");
const root = createRoot(rootEle);

const App = () => {
  const ref = useRef(null);
  useEffect(() => {
    window.mountHeader(ref.current);
  }, []);
  return (
    <>
      <div ref={ref}></div>
      <h1>Hello from Container</h1>
    </>
  );
};

window.containerContext = true;

root.render(<App />);
