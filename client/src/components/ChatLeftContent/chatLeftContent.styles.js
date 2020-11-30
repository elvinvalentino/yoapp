import { css } from '@emotion/css';

export const root = css`
  width: 375px;
  border-right: 1px solid #9E8B99;
  flex-shrink: 0;
`

export const userProfileWrapper = theme => css`
  background: ${theme.color.primary.dark};
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 .8em;
  border-bottom: 1px solid #9E8B99;
`;

export const searchIcon = css`
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;

  &:hover {

  }
`;