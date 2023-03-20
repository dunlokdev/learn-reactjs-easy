import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-controls/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {

  const schema = yup.object().shape({
    title: yup.string().required('Please enter title'),
  });

  const form = useForm({
    defaultValues: {
      title: '' // ! Phải liệt kê các defualt value ở đây nếu không form sẽ lỗi vì k nhận biết được
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    console.log('TODO FORM: ', values);
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
