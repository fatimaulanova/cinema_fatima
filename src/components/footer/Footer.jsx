import React from 'react';
import './footer.scss';
import logo from '../../img/tmovie.png';
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer className='footer'>
          <div className="footer__logo">
              <div className="logo__content">
                      <img src={logo} alt="Logo"/>
                  <Link to='/'>
                      tMovies
                  </Link>
              </div>
          </div>
      <div className="footer__container container">
          <ul className="footer__menu">
              <li>
                  <a href="#">Home</a>
              </li>
              <li>
                  <a href="#">Contact us</a>
              </li>
              <li>
                  <a href="#">Term of Services</a>
              </li>
              <li>
                  <a href="#">About us</a>
              </li>
          </ul>
          <ul className="footer__menu">
              <li>
                  <a href="#">Live</a>
              </li>
              <li>
                  <a href="#">FAQ</a>
              </li>
              <li>
                  <a href="#">Premium</a>
              </li>
              <li>
                  <a href="#">Privacy policy</a>
              </li>
          </ul>
          <ul className="footer__menu">
              <li>
                  <a href="#">Must watch</a>
              </li>
              <li>
                  <a href="#">Recent release</a>
              </li>
              <li>
                  <a href="#">Top IMDB</a>
              </li>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;