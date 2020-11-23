import { css } from '@emotion/css';

export const card = css`
  margin: 2em auto 0;
  width: 500px;
`;

export const header = theme => css`
  color: ${theme.color.primary.dark};
  margin: 0 0 .5em;
  text-align: center;
  font-family: ${theme.typography.family.saira};
  font-weight: 600;
`;

export const button = css`
  margin-top: 1em;
`;