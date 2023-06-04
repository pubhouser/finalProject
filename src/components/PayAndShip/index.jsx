import React from 'react';
import style from './PayAndShip.module.css';

import { Link } from 'react-router-dom';

function PayAndShip() {
  return (
    <div className={style.block__container}>
      <div className={style.block}>
        <Link to="/">
          <span className={style.block__close}>Close</span>
        </Link>
        <h2>Оплата и Доставка</h2>
        <p>Oops!... No information yet ((. Sorry!</p>
      </div>
    </div>
  );
}

export default PayAndShip;
