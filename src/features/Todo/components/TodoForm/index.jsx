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
    title: yup.string()
      .min(2, 'Title is too short')
      .required('Please enter title'),

  });

  const form = useForm({
    defaultValues: {
      title: '' // Phải liệt kê các defualt value ở đây nếu không form sẽ lỗi vì k nhận biết được
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }

    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
