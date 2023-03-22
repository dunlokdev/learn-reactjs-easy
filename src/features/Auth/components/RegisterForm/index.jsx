import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    title: yup
      .string()
      .min(2, 'Title is too short')
      .required('Please enter title'),
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
    <div>
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component='h3' variant='h5'>
        Create an account
      </Typography>

      {/* UI FORM */}
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name='fullname' label='Fullname' form={form} />
        <InputField name='email' label='Email' form={form} />
        <InputField name='password' label='Password' form={form} />
        <InputField name='retypePassword' label='Retype password' form={form} />
      </form>
    </div>
  );
}

export default RegisterForm;
