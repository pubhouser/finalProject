import React from 'react';
import style from './UpsetFace.module.css';

import { AppContext } from '../../../App';

function UpsetFace({ children }) {
  const { upsetFaceActive, setUpsetFaceActive } = React.useContext(AppContext);

  return (
    <div
      className={
        upsetFaceActive
          ? `${style.popup} + ${style.active} + ${setTimeout(
              () => setUpsetFaceActive(false),
              3000,
            )}`
          : style.popup
      }>
      <div
        className={
          upsetFaceActive ? `${style.popup__content} + ${style.active}` : style.popup__content
        }
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default UpsetFace;
