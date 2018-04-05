import React from "react";
import CSSModules from 'react-css-modules';
import style from "./style.scss";

const ActivityItem = ({ title, describe, subTitle, img, color }) => (
  <div styleName="activity-item">
    <h3 styleName="item-title" style={{ color: color ? `#${color}` : "" }}>
      {title}
    </h3>
    <div styleName="item-subtitle">{subTitle}</div>
    <div styleName="item-describe">{describe}</div>
    <img styleName="item-img" src={img} alt="activity" />
  </div>
);

export default CSSModules(ActivityItem,style);
