import React from "react";

import styles from './style.scss';

const ShopActivityList = ({data}) => data.map((val, index) => (
  <div key={index}>
    <span className="tag" style={{
      background: `#${val.icon_color}`
    }}>
      {val.icon_name}
    </span>
    <span>{val.description}</span>
  </div>
));

export default ShopActivityList;