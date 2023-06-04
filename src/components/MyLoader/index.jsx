import React from 'react';
import style from './MyLoader.module.css';

import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    className={style.bs__item}
    speed={2}
    width={318}
    height={455}
    viewBox="0 0 318 455"
    backgroundColor="#f2fdfb"
    foregroundColor="#ddeeee">
    <rect x="0" y="0" rx="10" ry="10" width="210" height="220" />
    <rect x="0" y="240" rx="10" ry="10" width="210" height="40" />
    <rect x="0" y="340" rx="10" ry="10" width="90" height="40" />
    <rect x="0" y="400" rx="10" ry="10" width="130" height="41" />
    <rect x="176" y="405" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
);

export default MyLoader;
