import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import { Container } from 'react-bootstrap';
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://stormy-springs-38622.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services">
      <Container>
        <h2 className="text-primary mt-5">Our services</h2>
        <div className="service-container">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
