import React from 'react';
import style from './HappyFace.module.css';

import { AppContext } from '../../../App';

function HappyFace({ children }) {
  const { happyFaceActive, setHappyFaceActive } = React.useContext(AppContext);

  return (
    <div
      className={
        happyFaceActive
          ? `${style.popup} + ${style.active} + ${setTimeout(
              () => setHappyFaceActive(false),
              3000,
            )}`
          : style.popup
      }>
      <div
        className={
          happyFaceActive ? `${style.popup__content} + ${style.active}` : style.popup__content
        }
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default HappyFace;
