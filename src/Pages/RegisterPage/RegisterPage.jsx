import * as yup from 'yup';
import { useFormik } from 'formik';
import Button from '@mui/material/Button';
import { FormWrapper, Forma, Input } from './RegisterPage.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/Auth';
import { nanoid } from 'nanoid';
import Title from 'components/Title';

const registerSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Email is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(4, 'Password should be of minimum 4 characters length')
    .required('Password is required'),
});

const RegisterPage = () => {
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const passwordInputId = nanoid();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      console.log(values);
      dispatch(authOperations.register(values));
      formik.resetForm();
    },
  });

  return (
    <>
      <FormWrapper>
        <Title text="Registration" />
        <Forma onSubmit={formik.handleSubmit}>
          <Input
            fullWidth
            id={nameInputId}
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            placeholder="Enter your name..."
          />
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
    </>
  );
};

export default RegisterPage;
