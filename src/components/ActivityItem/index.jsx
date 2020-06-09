import React from "react";

import  "./style.scss";

const ActivityItem = ({ title, describe, subTitle, img, color }) => (
  <div className="activity-item">
    <h3 className="item-title" style={{ color: color ? `#${color}` : "" }}>
      {title}
    </h3>
    <div className="item-subtitle">{subTitle}</div>
    <div className="item-describe">{describe}</div>
    <img className="item-img" src={img} alt="activity" />
  </div>
);

export default ActivityItem;
