import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import {
  FormWrapper,
  Forma,
  Input,
} from 'Pages/RegisterPage/RegisterPage.styled';
import { nanoid } from 'nanoid';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/Contacts/ContactsApi';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const contactFormSchema = yup.object({
  name: yup
    .string('Enter your name')
    .min(3, 'Name should be of minimum 3 characters length')
    .required('Name is required'),
  number: yup
    .string('Enter your number')
    .min(4, 'Number should be of minimum 4 characters length')
    .required('Number field is Required')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,

      'Phone number is not valid'
    ),
});

const ContactForm = () => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: contactFormSchema,
    onSubmit: async ({ name, number }) => {
      if (
        contacts.find(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        Report.warning(
          'Ooops',
          `The contact: <${name}> exist in list!`,
          'Try again',
          () => {
            formik.resetForm();
          }
        );
        return;
      }

      try {
        await addContact({ name, number });
        Notify.success('Contact added!');
        formik.resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <FormWrapper>
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
            placeholder="Enter contact name..."
          />
          <Input
            fullWidth
            id={numberInputId}
            name="number"
            label="Number"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={formik.touched.number && formik.errors.number}
            placeholder="Enter contact number..."
          />
          <Button
            style={{
              width: '200px',
              margin: '0 auto',
              background: '#637477',
            }}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={isLoading}
          >
            Submit
          </Button>
        </Forma>
      </FormWrapper>
    </>
  );
};

export default ContactForm;
