import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
const Booking = () => {
  const [service, setService] = useState({});
  const { bookingId } = useParams();
  useEffect(() => {
    fetch(`https://stormy-springs-38622.herokuapp.com/services/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="mt-5 pt-5">
      <div className="w-50 mx-auto border p-4">
        <h1>{service.name}</h1>
        <img src={service.img} alt="" className="w-75" />
        <h4 className="mt-3">Price : {service.price}</h4>
        <p className="lead">{service.description}</p>
      </div>
    </div>
  );
};

export default Booking;
