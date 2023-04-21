import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { ReactSession } from 'react-client-session';
import { useCookies } from 'react-cookie';
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
import { api } from '../../servers/api';

export const Login = () => {
  ReactSession.setStoreType('localStorage');
  const [valueCheckbox, setValueCheckbox] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const Schema = Yup.object().shape({
    username: Yup.string().required(
      'Você precisa informar o seu nome de usuário.'
    ),
    password: Yup.string().required('Você precisa informar a sua senha.'),
  });

  return (
    <>
      <Box color={'#FE2424'}>
        {' '}
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          validationSchema={Schema}
          onSubmit={async (values, { resetForm, setErrors }) => {
            const { username, password } = values;
            try {
              const request = await api.post('/admin/login', {
                username,
                password,
              });
              const token = request.data.token;
              if (valueCheckbox) {
                setCookie('token', token);
              } else {
                ReactSession.set('token', token);
              }
            } catch (error: any) {
              const textError = error.response.data.message as string;
              if (textError === 'Usuário não cadastrado') {
                setErrors({
                  username: textError,
                });
              } else {
                setErrors({
                  password: textError,
                });
              }
            }
          }}
        >
          {({
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <img src={Logo}></img>
                  <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      sx={{
                        background: '#FFFFFF',
                      }}
                      label="Nome de usuário"
                      name="username"
                      autoFocus
                      value={values.username}
                      onChange={handleChange}
                      error={touched.username && Boolean(errors.username)}
                    />
                    {errors.username?.toString()}
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      sx={{
                        background: '#FFFFFF',
                      }}
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      autoFocus
                      value={values.password}
                      onChange={handleChange}
                      error={touched.password && Boolean(errors.password)}
                    />
                    {errors.password?.toString()}
                    <FormControlLabel
                      sx={{
                        color: '#FFFFFF',
                      }}
                      control={
                        <Checkbox
                          value={valueCheckbox}
                          onChange={() =>
                            valueCheckbox === false
                              ? setValueCheckbox(true)
                              : setValueCheckbox(false)
                          }
                          sx={{
                            color: '#FFFFFF',
                          }}
                          color="primary"
                        />
                      }
                      label="Lembre de mim"
                    />
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={() => handleSubmit()}
                    >
                      Entrar
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};
