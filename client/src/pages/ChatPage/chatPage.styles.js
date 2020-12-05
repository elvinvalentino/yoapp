import { css } from '@emotion/css';

export const root = css`
  display: flex;
  height: 100vh;
  max-width: 1700px;
  margin: 0 auto;

  @media (min-width: 1700px){
    border-left: 1px solid #9E8B99;
    border-right: 1px solid #9E8B99;
  }
`;
