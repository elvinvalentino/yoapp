import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';

import * as styles from './loginPage.styles';
import Container from '../../layouts/Container';
import Card from '../../components/Card';
import HeroLogin from '../../assets/heroLogin.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import FormGroup from '../../components/FormGroup';
import { useForm } from '../../hooks';
import { LOGIN_MUTATION } from '../../graphql/Mutations/AuthMutation';
import { createFlashMessage } from '../../redux/actions/flashMessageAction';
import { login as loginAction, authError } from '../../redux/actions/authAction';

const LoginPage = () => {
  const [err, setErr] = useState(null);

  const dispatch = useDispatch();
  const theme = useTheme();

  const { formData, handleOnChange } = useForm({
    email: '',
    password: ''
  });

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    variables: formData,
    update: (_, { data: { login: userData } }) => {
      dispatch(loginAction(userData));
      dispatch(createFlashMessage('Logged In'));
      window.location.href = '/chat'
    },
    onError: (err) => {
      setErr(err.graphQLErrors[0].extensions.errors);
      dispatch(authError());
    },
  })

  const handleOnSubmitForm = e => {
    e.preventDefault();
    login();
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
                error={err}
              />
            </FormGroup>
            <FormGroup>
              <Input
                label="Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                value={formData.password}
                error={err}
              />
            </FormGroup>
            <Button fluid mobileFluid isLoading={loading} className={styles.button}>{loading ? 'SIGNING IN...' : 'SIGN IN'}</Button>
          </form>
        </div>
      </Card>
    </Container>
  )
}

export default LoginPage;
