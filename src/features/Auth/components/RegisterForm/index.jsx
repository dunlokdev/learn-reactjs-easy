import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
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
}));

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullname: yup
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
  });

  const form = useForm({
    defaultValues: {
      fullname: '', // Phải liệt kê các defualt value ở đây nếu không form sẽ lỗi vì k nhận biết được
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography className={classes.title} component='h3' variant='h5'>
        Create an account
      </Typography>

      {/* UI FORM */}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name='fullname' label='Fullname' form={form} />
        <InputField name='email' label='Email' form={form} />
        <PasswordField name='password' label='Password' form={form} />
        <PasswordField
          name='retypePassword'
          label='Retype password'
          form={form}
        />

        <Button
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
