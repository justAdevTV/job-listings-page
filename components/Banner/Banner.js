import { useEffect, useState } from "react";
import { _Banner } from "./banner.styles";

function Banner() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Needed to get the correct image to use
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <_Banner
      src={
        windowWidth <= 900 ? "/bg-header-mobile.svg" : "/bg-header-desktop.svg"
      }
      alt="header banner image"
    />
  );
}

export default Banner;
