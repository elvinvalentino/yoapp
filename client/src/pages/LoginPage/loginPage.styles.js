import { css } from '@emotion/css';

export const card = css`
  margin-top: 0.8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.5em;
  
  @media (max-width: 980px){
    width: 500px;
    margin: 4em auto;
    padding: 3em;
  }

  @media (max-width: 650px){
    width: 100%;
    padding: 2em;
  }
`;

export const hero = css`
  flex-basis: 55%;
  
  @media (max-width: 980px){
    display: none;
  }
`;

export const form = css`
  flex-basis: 38%;
  @media (max-width: 980px){
    flex-basis: 100%;
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