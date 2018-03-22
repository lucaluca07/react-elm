import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import FoodList from "../FoodList";
import getImgSrc from "../../util/getImgSrc";

class ShopItem extends Component {
  render() {
    const { data, highlights } = this.props;
    const { foods, restaurant } = data;
    const {
      name,
      id,
      distance,
      rating,
      float_delivery_fee,
      float_minimum_order_amount,
      order_lead_time,
      delivery_mode,
      image_path
    } = restaurant;
    return (
      <div className="search-result-item">
        <Link to={`/shop/${id}`}>
          <div className="result-item">
            <div className="result-img">
              <img src={getImgSrc(image_path)} alt="result" />
            </div>
            <div className="result-info">
              <div className="result-title">
                <h3 className="title">{name}</h3>
                <div className="top-right">
                  {delivery_mode ? (
                    <div
                      className="delivery"
                      style={{
                        color: `#${delivery_mode.text_color}`,
                        background: `linear-gradient(to right, #${
                          delivery_mode.gradient.rgb_from
                        }, #${delivery_mode.gradient.rgb_to})`
                      }}
                    >
                      {delivery_mode.text}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="result-rate">
                <div className="result-rate-left">
                  <span className="grade">评价{rating}</span>&nbsp;|&nbsp;
                  <span>起送费¥{float_minimum_order_amount}</span>&nbsp;|&nbsp;
                  <span>配送费¥{float_delivery_fee}</span>
                </div>
                <div className="result-rate-right">
                  <span>
                    {distance < 1000
                      ? `${distance}m`
                      : `${(distance / 1000).toFixed(2)}km`}
                  </span>&nbsp;|&nbsp;
                  <span>{order_lead_time}分钟</span>
                </div>
              </div>
            </div>
          </div>
          <FoodList data={foods} highlights={highlights} />
        </Link>
      </div>
    );
  }
}
export default ShopItem;
