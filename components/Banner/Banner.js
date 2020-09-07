import { _Banner } from "./banner.styles";

function Banner() {
  return (
    <_Banner
      src="/bg-header-desktop.svg"
      srcset={`
          /bg-header-mobile.svg   550w,
            /bg-header-desktop.svg 1500w
            `}
      sizes="(max-width: 600px) 550px,
            1500px"
      alt="header banner image"
    />
  );
}

export default Banner;
