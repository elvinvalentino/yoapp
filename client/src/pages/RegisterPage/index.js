import React from 'react';
import { useTheme } from '@emotion/react';

import * as styles from './registerPage.styles';
import Container from '../../layouts/Container';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from '../../hooks';

const RegisterPage = () => {
  const theme = useTheme();
  const { formData, handleOnChange, handleOnSubmit } = useForm({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleOnSubmitForm = e => {
    e.preventDefault();
    console.log(formData);
    handleOnSubmit(e);
  }

  return (
    <Container justifyContent='center'>
      <Card className={styles.card}>
        <h1 className={styles.header(theme)}>SIGN UP</h1>
        <form onSubmit={handleOnSubmitForm}>
          <FormGroup>
            <Input
              label="Username"
              type="text"
              name="username"
              onChange={handleOnChange}
              value={formData.username}
            />
          </FormGroup>
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
          <FormGroup>
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleOnChange}
              value={formData.confirmPassword}
            />
          </FormGroup>
          <Button fluid className={styles.button}>SIGN UP</Button>
        </form>
      </Card>
    </Container>
  )
}

export default RegisterPage;
