import React from 'react'
import { css } from '@emotion/css';

import wave from '../../assets/wave.png';

const Wave = () => {
  const style = {
    root: css`
      position: relative;
      height: 48vh;
    `,
    wave: css`
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: -1;
    `
  }
  return (
    <div className={style.root}>
      <img src={wave} className={style.wave} alt="wave" />
    </div>
  )
}

export default Wave;
