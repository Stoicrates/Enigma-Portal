import { useRef } from "react";
import Lottie from "lottie-react";
import Sparkle from "../assets/sparkle.json";

function Card({ link, title, description }) {
  const sparkleRef = useRef();

  function handleHover() {
    sparkleRef.current.stop();
    sparkleRef.current.play();
  }
  return (
    <a
      onMouseOver={handleHover}
      href={link}
      className="onhover flex-1 p-4 bg-white shadow-md flex flex-col justify-center rounded-md"
    >
      <div className="flex">
        <div>
          <h3 className="">{title}</h3>
          <p className="scn">{description}</p>
        </div>
        <div className="w-20">
          <Lottie
            lottieRef={sparkleRef}
            animationData={Sparkle}
            loop={false}
          ></Lottie>
        </div>
      </div>
    </a>
  );
}

export default Card;
