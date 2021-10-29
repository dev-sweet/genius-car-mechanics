import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './UpdateService.css';
const UpdateService = () => {
  const [service, setService] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const onSubmit = (data) => {
    fetch(`https://stormy-springs-38622.herokuapp.com/services/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert('Updated successfully');
          reset();
        }
      });
  };

  useEffect(() => {
    fetch(`https://stormy-springs-38622.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  return (
    <div className="mt-5 pt-5">
      <h1>Update Service</h1>
      <div className="update-service">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={service.name}
            type="text"
            {...register('name', { required: true })}
            placeholder="Name"
          />
          <textarea
            defaultValue={service.description}
            {...register('description', { required: true })}
            placeholder="Description"
          />
          <input
            defaultValue={service.price}
            type="number"
            {...register('price', { required: true })}
            placeholder="Price"
          />
          <input
            defaultValue={service.img}
            type="text"
            {...register('img', { required: true })}
            placeholder="Image Url"
          />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
