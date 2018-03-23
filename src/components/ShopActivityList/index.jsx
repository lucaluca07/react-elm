import React from "react";

const ShopActivityList = ({ data }) =>
  data.map((val, index) => (
    <div className="shop-activity-item">
      <span
        className="activity-icon"
        style={{ background: `#${val.icon_color}` }}
      >
        {val.icon_name}
      </span>
      <span className="activity-descripition">{val.description}</span>
    </div>
  ));
export default ShopActivityList;
