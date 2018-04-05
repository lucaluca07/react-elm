import React from "react";
import CSSModules from 'react-css-modules';
import style from "./style.scss";
import monkeyKing from "../../static/image/timg.png";

const DevelopmengPending = () => (
  <div styleName="delay-page">
    <img styleName="monkeyking" src={monkeyKing} alt="monkeyKing" />
    <div styleName="tips">页面待开发...</div>
  </div>
);

export default CSSModules(DevelopmengPending,style);
