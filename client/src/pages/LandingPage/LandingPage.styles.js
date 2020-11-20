import styled from '@emotion/styled';

export const HeroHeadline = styled.div`
  @media(max-width: 1024px){
    text-align: center;
    order: 2;
  }
`;

export const Headline = styled.h1`
  font-size: 4em;
  color: ${({ theme }) => theme.color.primary.light};
  font-weight: 700;
  width: 100%;
  line-height: 1.3em;
  margin: 0;
  @media(max-width: 960px){
    font-size: 2.5em;
  }
`;

export const SubHeadline = styled.h2`
  font-size: 1.5em;
  color: #000;
  font-weight: 300;
  margin: 1em 0 0;
  width: 100%;
  margin-bottom: 1em
`;

export const Hero = styled.div`
  width: 70%;
  text-align: right;
  @media(max-width: 1024px){
    order: 1;
    padding: 5em 0;
    width: 60%;
  }
  @media (max-width: 700px){
    display: none; 
  }
`;