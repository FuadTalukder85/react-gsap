// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

const App = () => {
  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x: 1500,
  //     duration: 1,
  //     delay: 1,
  //     rotate: 720,
  //   });
  // });
  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
      <div className="kush">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
};

export default App;
