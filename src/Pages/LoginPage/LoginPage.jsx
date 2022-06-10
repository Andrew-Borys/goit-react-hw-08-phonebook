import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { FormWrapper, Forma, Input } from '../RegisterPage/RegisterPage.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/Auth';
import { nanoid } from 'nanoid';

const loginSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(4, 'Password should be of minimum 4 characters length')
    .required('Password is required'),
});

const LoginPage = () => {
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      dispatch(authOperations.logIn(values));
      formik.resetForm();
    },
  });

  return (
    <FormWrapper>
      <h1>Login</h1>
      <Forma onSubmit={formik.handleSubmit}>
        <Input
          fullWidth
          id={emailInputId}
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          placeholder="Enter your email..."
        />
        <Input
          fullWidth
          id={passwordInputId}
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          placeholder="Enter your password..."
        />
        <Button
          style={{
            width: '200px',
            margin: '0 auto',
          }}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </Forma>
    </FormWrapper>
  );
};

export default LoginPage;
