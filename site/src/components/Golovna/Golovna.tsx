import { Baner } from "./Baner/Baner.tsx";
import GKategorii from "./Kategorii/GKategirii.tsx";

import slide1 from "./Baner/slide1.jpg";
import slide2 from "./Baner/slide2.jpg";
import slide3 from "./Baner/slide3.jpg";
import slide4 from "./Baner/dima_sex.jpg";

const SLIDE = [slide1, slide2, slide3, slide4];

function Golovna() {
  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          aspectRatio: "10 / 6",
          margin: "0 auto",
          padding: "40px",
        }}
      >
        <Baner slideUrl={SLIDE} />
      </div>
      <div>
        <GKategorii />
      </div>
    </>
  );
}

export default Golovna;
