import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  // const {service} = props;
  const { _id, name, price, description, img } = service;
  return (
    <div className="service">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>Price: {price}</h5>
      <p className="px-3">{description}</p>
      <Link className="btn btn-secondary mb-3" to={`/booking/${_id}`}>
        Booking {name.toLowerCase()}
      </Link>
    </div>
  );
};

export default Service;
