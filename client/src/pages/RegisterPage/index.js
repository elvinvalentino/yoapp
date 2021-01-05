import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import * as styles from './registerPage.styles';
import Container from '../../layouts/Container';
import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from '../../hooks';
import { REGISTER_MUTATION } from '../../graphql/Mutations/AuthMutation';
import { createFlashMessage } from '../../redux/actions/flashMessageAction';

const RegisterPage = () => {
  const [err, setErr] = useState(null);

  const dispatch = useDispatch();
  const theme = useTheme();
  const history = useHistory();

  const { formData, handleOnChange } = useForm({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [register, { loading }] = useMutation(REGISTER_MUTATION, {
    variables: formData,
    update: () => {
      dispatch(createFlashMessage("Account Registered"));
      history.push('/signin');
    },
    onError: err => {
      setErr(err.graphQLErrors[0].extensions.errors)
    }
  });

  const handleOnSubmitForm = e => {
    e.preventDefault();
    register();
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
              error={err}
            />
          </FormGroup>
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
          <FormGroup>
            <Input
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleOnChange}
              value={formData.confirmPassword}
              error={err}
            />
          </FormGroup>
          <Button fluid mobileFluid isLoading={loading} className={styles.button}>{loading ? 'SIGNING UP...' : 'SIGN UP'}</Button>
        </form>
      </Card>
    </Container>
  )
}

export default RegisterPage;
