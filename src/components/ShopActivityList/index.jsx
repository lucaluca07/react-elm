import React from "react";
import CSSModules from 'react-css-modules';
import styles from './style.scss';

const ShopActivityList = ({data}) => data.map((val, index) => (
  <div key={index}>
    <span styleName="tag" style={{
      background: `#${val.icon_color}`
    }}>
      {val.icon_name}
    </span>
    <span>{val.description}</span>
  </div>
));

export default CSSModules(ShopActivityList, styles, {allowMultiple: true});