import { Link, useLocation, } from 'react-router-dom';
import logo from '../../img/tmovie.png';

import './header.scss';

const Header = () => {


  const headerNav = [
    {
      display: 'Home',
      path: '/',
    },
    {
      display: 'Movies',
      path: '/movie',
    },
    {
      display: 'TV Series',
      path: '/tv',
    },
  ];
  const { pathname } = useLocation();

  const active = headerNav.findIndex((item) => item.path === pathname);

  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <Link to="/">tMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((item, i) => (
            <li key={i} className={i === active ? 'active' : null}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
