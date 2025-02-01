import { Link } from 'react-router-dom';
import './Head.css';
import './Head.scss';

function Head() {
  return (
    <div id="head">
        <nav className="nav-links">
            <Link to="/" className="hbutt">Головна</Link>
            <Link to="/about" className="hbutt">Про нас</Link>
            <Link to="/catalog" className="hbutt">Каталог</Link>
            <Link to="/contacts" className="hbutt">Контакти</Link>
        </nav>

        <Link to="Mem"><img src="/dima_sex.jpg" alt="Логотип" className="logo" /></Link>
    </div>
  );
}

export default Head;
