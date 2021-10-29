import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const history = useHistory();
  const handleUpdate = (id) => {
    history.push(`/manageServices/update/${id}`);
  };
  // handle delete services
  const handleDelete = (id) => {
    fetch(`https://stormy-springs-38622.herokuapp.com/services/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert('Deleted successfully');
          const remainingServices = services.filter(
            (service) => service._id !== id
          );
          setServices(remainingServices);
        }
      });
  };
  useEffect(() => {
    fetch('https://stormy-springs-38622.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-5 pt-5">
      <h1 className="pb-3 text-primary">Manage Services</h1>
      {services.length ? (
        <div className="container">
          <div className="row g-4">
            {services.map((service) => (
              <div key={service._id} className="col-3">
                <div className="border pb-3">
                  <img className="w-100" src={service.img} alt="" />
                  <div className="p-1">
                    <h3>{service.name}</h3>
                    <h5>Price : {service.price}</h5>
                    <p>{service.description}</p>
                    <button
                      className="btn btn-success mx-3"
                      onClick={() => handleUpdate(service._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(service._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center">
          <h2 className="mt-5">
            No services available right now.Please add a service
          </h2>
        </div>
      )}
    </div>
  );
};

export default ManageServices;
