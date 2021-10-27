import React from "react";
import img from "../../images/404.jpg";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div>
      <img className='img-404' src={img} alt='' />
    </div>
  );
};

export default NotFound;
