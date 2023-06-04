import React from 'react';
import style from './TooltipSort.module.css';

const TooltipSort = ({ children, text, ...rest }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className={style.tooltip__container}>
      <div className={show ? `${style.tooltip__box} + ${style.visible}` : style.tooltip__box}>
        {text}
        <span className={style.tooltip__arrow} />
      </div>
      <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} {...rest}>
        {children}
      </div>
    </div>
  );
};

export default TooltipSort;
