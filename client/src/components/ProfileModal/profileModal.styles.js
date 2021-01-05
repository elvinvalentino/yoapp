import { css } from '@emotion/css';

export const imgProfile = css`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  margin: 1em auto 2em;
`

export const row = css`
  margin-bottom: 1em;
`;

export const label = theme => css`
  display: block;
  color: ${theme.color.primary.dark};
  margin-bottom: .3em;
  font-weight: 300;
  font-size: .9em;
`;

export const text = css`
  font-weight: 300;
  margin: 0;
  font-size: 1.15em;
`;

export const button = css`
  font-family: 'roboto', sans-serif;
  float: right;
  padding: .7em 2em;
`