import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import LogoWallet from '../LogoWallet/LogoWallet';

import style from './loginForm.module.scss';

import emailIcon from '../../assets/images/Email-min.svg';
import passwordIcon from '../../assets/images/Password-min.svg';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is invalid')
    .min(10, 'E-mail must contain at least 10 characters')
    .max(63)
    .matches(/^.{1}[A-Za-z0-9._-]{1,}@[A-Za-z0-9]+.\w{2,3}$/, {
      message: 'Name section of email must have at least 2 characters',
      excludeEmptyString: true,
    })
    .matches(/^[A-Za-z0-9.]{1}[A-Za-z0-9._-]{1,}@[A-Za-z0-9]+.\w{2,3}$/, {
      message: 'Email must not start with "-"',
      excludeEmptyString: true,
    })
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .max(16, 'Password must contain 16 characters or less')
    .required('Password is required'),
});

const LoginForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    const emailToLowerCase = value.email.toLowerCase();
    console.log(emailToLowerCase);
    resetForm();
  };

  return (
    <div className={style.container}>
      <LogoWallet />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextField
            type="email"
            name="email"
            placeholder="E-mail"
            svg={emailIcon}
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            svg={passwordIcon}
          />

          <Button text="Log in" />
          <Button text="Register" />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
