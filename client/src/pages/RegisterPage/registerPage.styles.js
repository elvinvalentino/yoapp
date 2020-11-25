import { css } from '@emotion/css';

export const card = css`
  margin: 4em auto;
  width: 500px;
  @media (max-width: 650px){
    width: 100%;
    padding: 2em;
  }
`;

export const header = theme => css`
  color: ${theme.color.primary.dark};
  margin: 0 0 1em;
  text-align: center;
  font-family: ${theme.typography.family.saira};
  font-weight: 600;
`;

export const button = css`
  margin-top: 1em;
`;