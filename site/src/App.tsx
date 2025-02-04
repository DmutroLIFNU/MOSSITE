import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Head from "./components/Head/Head.tsx";
import Golovna from "./components/Golovna/Golovna.tsx";
import Contex from "./components/Contex.tsx";
import ListGroup from "./components/Golovna/ListGroup.tsx";
import Mem from "./components/Mem.tsx";

function App() {
  return (
    <div
      style={{
        backgroundColor: "rgb(255, 241, 232)",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Router>
        <div>
          <Head />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Golovna />
                </div>
              }
            />
            <Route path="/about" element={<div>Про нас</div>} />
            <Route path="/catalog" element={<div>Каталог</div>} />
            <Route
              path="/contacts"
              element={
                <div>
                  <Contex />
                </div>
              }
            />
            <Route
              path="/Mem"
              element={
                <div>
                  <Mem />
                </div>
              }
            />
            <Route
              path="/List"
              element={
                <div>
                  <ListGroup />
                </div>
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
