import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

function Counter({ from, to }) {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 5,
      onUpdate(value) {
        node.textContent = `${value.toFixed(0)} %`;
      }
    });

    return () => controls.stop();
  }, [from, to]);

  return <p ref={nodeRef} />;
}

export default Counter;