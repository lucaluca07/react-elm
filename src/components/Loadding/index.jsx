import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

const Loadding = () => (
  <div styleName="loadding">
    <div styleName="loadding-animate">
      <i className="iconfont icon-loading" />
    </div>
  </div>
);

export default CSSModules(Loadding,styles);