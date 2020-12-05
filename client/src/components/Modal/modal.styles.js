import { css } from '@emotion/css';

export const overlay = css`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  opacity: 50%;
`

export const modal = css`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  background: #fff;
  border: 1px solid #e5e5e5;
  padding: 1em;
  border-radius: 7px;
  max-height: 95vh;
`

export const closeIconWrapper = css`
  text-align: right;
`

export const closeIcon = theme => css`
  color: #8a8188;
  font-size: 1.3em;

  &:hover{
    color: ${theme.color.primary.dark};
  }
`