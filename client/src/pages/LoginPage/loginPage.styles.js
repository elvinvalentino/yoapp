import { css } from '@emotion/css';

export const card = css`
  margin-top: 0.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.5em;
`;

export const hero = css`
  flex-basis: 55%;
`;

export const form = css`
  flex-basis: 38%;
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