import React from "react";
import CSSModules from 'react-css-modules';
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import { sliceArray } from "../../util/sliceArray";
import styles from "./style.scss";

const Swiper = ({ foodentry }) => {
  const arr = sliceArray(foodentry, 10);
  return (
    <Carousel>
      {arr.map((item, index) => (
        <div styleName="carousel-item" key={index}>
          {item.map((val, index) => (
            <div key={index} styleName="item-child">
              <Link to={`/shop?target_name=${val.name}&entry_id=${val.id}`}>
                <div styleName="container">
                  <img src={val.image_hash} alt={val.description} />
                </div>
                <div styleName="title">{val.name}</div>
              </Link>
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
};

export default CSSModules(Swiper,styles,{allowMultiple:true});
