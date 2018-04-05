import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";
import RatingStar from "../RatingStar";
import ShopActivity from "../ShopActivity";
import { Link } from "react-router-dom";

const ShopItem = ({ shopData }) => {
  const restaurant = shopData.restaurant;
  const {
    image_path,
    name,
    id,
    recommend,
    supports,
    rating,
    recent_order_num,
    delivery_mode,
    float_minimum_order_amount,
    order_lead_time,
    float_delivery_fee,
    distance,
    activities
  } = restaurant;
  return (
    <div styleName="item-wrap">
      <Link to={`/shop/${id}`}>
        <div styleName="shop-item">
          <div styleName="shop-img">
            <img src={image_path} alt="shop" />
          </div>
          <div styleName="shop-info">
            <div styleName="shop-title">
              <h3 styleName="title">{name}</h3>
              <ul styleName="top-right">
                {recommend.is_ad ? <li styleName="ad">广告</li> : ""}
                {supports.length > 0
                  ? supports.map((val, index) => (
                      <li
                        styleName="support"
                        key={index}
                        style={{ color: `#${val.icon_color}` }}
                      >
                        {val.icon_name}
                      </li>
                    ))
                  : ""}
              </ul>
            </div>
            <div styleName="shop-rate">
              <div styleName="shop-rate-left">
                <div styleName="star">
                  <RatingStar rate={rating} scale={0.9} />
                </div>
                <div styleName="grade">{rating}</div>&nbsp;
                <div styleName="sell-number">月售{recent_order_num}单</div>
              </div>
              <div styleName="shop-rate-right">
                {delivery_mode ? (
                  <div
                    styleName="delivery"
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
            <div styleName="distribution-info">
              <div>
                <span>¥{float_minimum_order_amount}起送</span>&nbsp;|&nbsp;
                <span>配送费¥{float_delivery_fee}</span>
              </div>
              <div>
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
        <ShopActivity activities={activities} recommend={recommend} />
      </Link>
    </div>
  );
};

export default CSSModules(ShopItem,styles,{allowMultiple:true});