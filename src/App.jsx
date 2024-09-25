import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  useGSAP(() => {
    gsap.to(".box", {
      x: 1000,
      duration: 1,
      delay: 1,
    });
  });
  return (
    <main>
      <div className="box"></div>
    </main>
  );
};

export default App;
