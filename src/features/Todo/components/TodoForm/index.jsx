import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {

  const form = useForm({
    defaultValues: {
      title: '' // ! Phải liệt kê các defualt value ở đây nếu không form sẽ lỗi vì k nhận biết được
    }
  });

  const handleSubmit = (values) => {
    console.log('TODO FORM: ', values);
  }

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="todo" form={form} />
    </form>
  );
}

export default TodoForm;
