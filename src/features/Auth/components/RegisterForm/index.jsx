import { yupResolver } from '@hookform/resolvers/yup';
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(4),
  },

  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: 'center',
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  progess: {
    position: 'absolute',
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name')
      .test(
        'Should has at least two word',
        'Please enter at least two word',
        (value) => {
          console.log(value);
          return value.split(' ').length >= 2;
        }
      ),

    email: yup
      .string()
      .required('Please enter your email')
      .email('Please enter a valid email address'),

    password: yup
      .string()
      .required('Please enter your password')
      .min(6, 'Please enter at least 6 character'),

    retypePassword: yup
      .string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Please not match password'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '', // Phải liệt kê các defualt value ở đây nếu không form sẽ lỗi vì k nhận biết được
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      await onSubmit(values);
    }

    form.reset();
  };

  const { isSubmitting } = form.formState;

  return (
    <div className={classes.root}>
      {/* Show progress while submitting form */}
      {isSubmitting && <LinearProgress className={classes.progess} />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component='h3' variant='h5'>
        Create an account
      </Typography>

      {/* UI FORM */}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name='fullName' label='Fullname' form={form} />
        <InputField name='email' label='Email' form={form} />
        <PasswordField name='password' label='Password' form={form} />
        <PasswordField
          name='retypePassword'
          label='Retype password'
          form={form}
        />

        <Button
          disabled={isSubmitting}
          variant='contained'
          color='primary'
          fullWidth
          className={classes.submit}
          type='submit'
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
