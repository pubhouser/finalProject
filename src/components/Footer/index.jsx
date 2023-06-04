import React from 'react';
import style from './Footer.module.css';

import vk from './../../images/icon-vk.png';
import inst from './../../images/icon-inst.png';
import viber from './../../images/icon-viber.png';
import tlg from './../../images/icon-telegram.png';
import address from './../../images/icon-address.png';
import email from './../../images/icon-email.png';
import phone from './../../images/icon-phone.png';

import { AppContext } from '../../App.js';

function Footer() {
  const { thumbCount } = React.useContext(AppContext);

  return (
    <div className={style.container}>
      <footer className={style.footer}>
        <div className={style.footer__top}>
          <div className={`${style.footer__item} ${style.block1}`}>
            <h3>Company</h3>
            <ul>
              <li>
                <a
                  href="https://www.procyclingstats.com/info/about-us"
                  target="_blank"
                  rel="noreferrer">
                  <span>About us</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.procyclingstats.com/team/soudal-quick-step-2023/overview"
                  target="_blank"
                  rel="noreferrer">
                  <span>Our team</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.uci.org/news/all-news/6IQ886FTfWV8yd13Egt9v3?page=1"
                  target="_blank"
                  rel="noreferrer">
                  <span>News & Articles</span>
                </a>
              </li>
              <li>
                <a
                  href="https://granfondo-cycling.com/cycling-jobs/"
                  target="_blank"
                  rel="noreferrer">
                  <span>Career</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={`${style.footer__item} ${style.block2}`}>
            <h3>Information</h3>
            <ul>
              <li>
                <a href="https://www.sapim.be/kalkulyator-spic" target="_blank" rel="noreferrer">
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="https://www.sapim.be/kalkulyator-spic" target="_blank" rel="noreferrer">
                  <span>Shop $ Repairs</span>
                </a>
              </li>
              <li>
                <a href="https://www.sapim.be/kalkulyator-spic" target="_blank" rel="noreferrer">
                  <span>Spoke calculator</span>
                </a>
              </li>
              <li>
                <a href="https://www.sapim.be/kalkulyator-spic" target="_blank" rel="noreferrer">
                  <span>Ask questions</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={`${style.footer__item} ${style.block3}`}>
            <h3>Follow us</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <img src={inst} alt={'inst'} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://vk.com/" target="_blank" rel="noreferrer">
                  <img src={vk} alt={'vk'} />
                  <span>ВКонтакте</span>
                </a>
              </li>
              <li>
                <a href="https://telegram.org/" target="_blank" rel="noreferrer">
                  <img src={tlg} alt={'telegram'} />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a href="https://viber.com/" target="_blank" rel="noreferrer">
                  <img src={viber} alt={'tw'} />
                  <span>Viber</span>
                </a>
              </li>
            </ul>
          </div>
          <div className={`${style.footer__item} ${style.block4}`}>
            <h3>Contact us</h3>
            <ul>
              <li>
                <img src={address} alt={'icon'} />
                <span>15-17 Park St., Brest, Belarus, 224007</span>
              </li>
              <li>
                <img src={phone} alt={'icon'} />
                <span>+375 (29) 524 73 39</span>
              </li>
              <li>
                <img src={email} alt={'icon'} />
                <span>fr2103@mail.ru</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footer__bottom}>
          <div className={style.footer__bottom__copyrights}>
            © {new Date().getFullYear()} All rights reserved.Designed by YD.
          </div>
          <div className={style.likes}>
            <span>Like</span>
            {thumbCount}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
