import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head from './Head';
import Golovna from './Golovna.tsx';
import Contex from './Contex.tsx'
import Mem from "./Mem";

function App() {
  return (
    <Router>
      <div>
        <Head />
        <Routes>
          <Route path="/" element={<div><Golovna /></div>} />
          <Route path="/about" element={<div>Про нас</div>} />
          <Route path="/catalog" element={<div>Каталог</div>} />
          <Route path="/contacts" element={<div><Contex /></div>} />
          <Route path='/Mem' element={<div><Mem /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
