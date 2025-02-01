import Baner from "./Baner";
import Kategorii from "./Kategorii/GKategirii.tsx";

function Golovna() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          paddingBottom: "40px",
          paddingTop: "40px",
        }}
      >
        <Baner />
      </div>
      <div>
        <Kategorii />
      </div>
    </>
  );
}

export default Golovna;
