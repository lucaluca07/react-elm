import React from "react";
import "./style.scss";
import monkeyKing from "../../static/image/timg.png";

const DevelopmengPending = () => (
  <div className="delay-page">
    <img className="monkeyking" src={monkeyKing} alt="monkeyKing" />
    <div className="tips">页面待开发...</div>
  </div>
);

export default DevelopmengPending;
