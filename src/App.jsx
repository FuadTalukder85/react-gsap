import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const App = () => {
  const container = useRef();
  useGSAP(
    () => {
      gsap.from(".box", {
        rotate: 360,
        scale: 0,
        duration: 1,
        opacity: 0,
        delay: 0.5,
      });
    },
    { scope: container }
  );
  return (
    <main>
      <button>Animate</button>
      <div className="circle"></div>
    </main>
  );
};

export default App;
