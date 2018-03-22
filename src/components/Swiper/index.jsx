import React from "react";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import { sliceArray } from "../../util/sliceArray";
import "./style.scss";

const Swiper = ({ foodentry }) => {
  const arr = sliceArray(foodentry, 10);
  return (
    <Carousel>
      {arr.map((item, index) => (
        <div className="carousel-item" key={index}>
          {item.map((val, index) => (
            <div key={index} className="item-child">
              <Link to={`/shop?target_name=${val.name}&entry_id=${val.id}`}>
                <div className="container">
                  <img src={val.image_hash} alt={val.description} />
                </div>
                <div className="title">{val.name}</div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default Swiper;
