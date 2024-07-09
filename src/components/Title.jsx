import { useRef } from "react";
import Lottie from "lottie-react";
import EnigmaLogo from "../assets/Enigma-Logo.json";

function Title() {
  const logoRef = useRef();

  function handleClick() {
    logoRef.current.stop();
    logoRef.current.play();
  }

  return (
    <div className="p-2 md:pr-4 flex justify-center">
      <div className="w-[28dvw]">
        <Lottie
          lottieRef={logoRef}
          animationData={EnigmaLogo}
          loop={false}
          onClick={handleClick}
        ></Lottie>
      </div>
    </div>
  );
}

export default Title;
