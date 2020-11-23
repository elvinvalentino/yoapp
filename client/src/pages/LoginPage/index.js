import React from 'react';
import { useTheme } from '@emotion/react';

import * as styles from './loginPage.styles';
import Container from '../../layouts/Container';
import Card from '../../components/Card';
import HeroLogin from '../../assets/heroLogin.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FormGroup from '../../components/FormGroup';
import { useForm } from '../../hooks';

const LoginPage = () => {
  const theme = useTheme();
  const { formData, handleOnChange, handleOnSubmit } = useForm({
    email: '',
    password: ''
  });

  const handleOnSubmitForm = e => {
    e.preventDefault();
    console.log(formData);
    handleOnSubmit(e);
  }
  return (
    <Container justifyContent='center'>
      <Card className={styles.card}>
        <img src={HeroLogin} className={styles.hero} alt="hero login" />
        <div className={styles.form}>
          <h1 className={styles.header(theme)}>SIGN IN</h1>
          <form onSubmit={handleOnSubmitForm}>
            <FormGroup>
              <Input
                label="Email"
                type="text"
                name="email"
                onChange={handleOnChange}
                value={formData.email}
              />
            </FormGroup>
            <FormGroup>
              <Input
                label="Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                value={formData.password}
              />
            </FormGroup>
            <Button fluid className={styles.button}>SIGN IN</Button>
          </form>
        </div>
      </Card>
    </Container>
  )
}

export default LoginPage;
