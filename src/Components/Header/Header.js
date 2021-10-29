import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../Images/park.jpg";
import img2 from "../../Images/resort.jpeg";
import img3 from "../../Images/ride.jpg";
import img4 from "../../Images/water.jpg";
const Header = () => {
  return (
    <div>
      <Carousel className="p-5">
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-danger">Resort View</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-danger">Xtrem Ride</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-danger">Water Ride</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
