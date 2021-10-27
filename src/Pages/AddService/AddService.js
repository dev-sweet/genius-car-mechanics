import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css';
const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios.post('http://localhost:5000/services', data).then((res) => {
      if (res.data.insertedId) {
        alert('Your service is added successfully');
        reset();
      }
    });
  };

  return (
    <div className="add-service">
      <h1>Add a Service</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('name', { required: true })}
          placeholder="Name"
        />
        <textarea
          {...register('description', { required: true })}
          placeholder="Description"
        />
        <input
          type="number"
          {...register('price', { required: true })}
          placeholder="Price"
        />
        <input
          type="text"
          {...register('img', { required: true })}
          placeholder="Image Url"
        />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
