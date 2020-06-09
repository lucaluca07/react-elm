import React from "react";
import CSSModules from 'react-css-modules';
import style from "./style.scss";
import getImgSrc from "../../util/getImgSrc";

const showHighlights = (ele, name) => {
  let title;
  ele.forEach(element => {
    title = name
      .split(element)
      .join(`<span class='highlights'>${element}</span>`);
  });
  return title;
};

const FoodItem = ({ data, highlights }) => {
  const {
    name,
    month_sales,
    price,
    satisfy_rate,
    image_path,
    activities,
    original_price
  } = data;
  const innerHtml = showHighlights(highlights, name);
  return (
    <div styleName="food-item">
      <div styleName="img-wrap">
        <img src={getImgSrc(image_path)} alt="food" />
      </div>
      <div styleName="food-item-right">
        <h4
          styleName="food-item-name"
          dangerouslySetInnerHTML={{ __html: innerHtml }}
        />
        <div>
          <span>月售{month_sales}份</span>&nbsp;
          <span>好评率{satisfy_rate}%</span>
        </div>
        <div styleName="food-item-price">
          <span styleName="price">¥{price}</span>&nbsp;
          {original_price && (
            <span styleName="old-price">¥{original_price}</span>
          )}
          <span
            styleName="sale-tag"
            style={{
              border:
                activities[0] && activities[0].icon_color
                  ? `1px solid #${activities[0].icon_color}`
                  : "none",
              background:
                activities[0] && activities[0].background
                  ? `linear-gradient(to right, #${
                      activities[0].background.rgb_from
                    }, #${activities[0].background.rgb_to})`
                  : "none"
            }}
          >
            {activities[0] && activities[0].description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CSSModules(FoodItem,style);