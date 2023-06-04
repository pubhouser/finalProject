import React from 'react';
import style from './Contacts.module.css';

import { Link } from 'react-router-dom';

import vk from './../../images/icon-vk.png';
import inst from './../../images/icon-inst.png';
import viber from './../../images/icon-viber.png';
import tlg from './../../images/icon-telegram.png';
import address from './../../images/icon-address.png';
import email from './../../images/icon-email.png';
import phone from './../../images/icon-phone.png';

function Contacts() {
  return (
    <div className={style.contacts__container}>
      <div className={style.contacts}>
        <Link to="/">
          <span className={style.contacts__close}>Close</span>
        </Link>
        <h2>Мои контакты</h2>
        <div className={style.contacts__content}>
          <div className={style.socials}>
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
          <div className={style.addresses}>
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
        <div className={style.schedule}>
          <p>
            Заказы через интернет-магазин приримаются <b>круглосуточно</b>!!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
