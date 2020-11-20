import React from 'react'
import { useTheme } from '@emotion/react';
import { Link } from 'react-router-dom';

import Container from '../../layouts/Container';
import Button from '../../components/Button';
import { HeroHeadline, Headline, SubHeadline, Hero } from './LandingPage.styles';
import Wave from '../../components/Wave';
import hero from '../../assets/hero.svg';

const LandingPage = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        flex
        justifyContent='space-between'
        alignItems="center"
        style={{ fontFamily: "'Saira', sans-serif", marginTop: '4em' }}
      >
        <HeroHeadline>
          <Headline theme={theme}>
            Let's Explore The World With Us
          </Headline>
          <SubHeadline>
            Chat with other people around the world
          </SubHeadline>
          <Link to='/signup'>
            <Button big>
              GET STARTED
            </Button>
          </Link>
        </HeroHeadline>
        <Hero>
          <img style={{ width: '100%' }} src={hero} alt="hero" />
        </Hero>
      </Container>
      <Wave />
    </>

  )
}

export default LandingPage;
