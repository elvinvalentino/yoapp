import { css } from '@emotion/css';

export const root = css`
  display: flex;
  align-items: center;
  height: 60px; 
  padding: 0 1em;
`

export const input = theme => css`
  flex: 1;
  padding: .7em 1.2em;
  border-radius: 25px;
  border: unset;
  background: ${theme.color.secondary.light};
  height: 45px;
  font-size: 1em;
  color: ${theme.color.primary.dark};

  &::placeholder {
    color: ${theme.color.secondary.dark};
  }
`
export const iconWrapper = theme => css`
  height: 45px;
  width: 45px;
  background: ${theme.color.primary.dark};
  margin-left: .7em;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-radius: 50%;
  font-size: 1em;
  border: unset;
`
export const icon = css`
  margin-right: 4px;
`