import React from "react";
import CSSModules from "react-css-modules";
import "./style.scss";
import classNames from "classnames"

const Item = ({address,onClick}) => (
  <div className="item" onClick={() => {onClick&&onClick(address)}}>
    <div className="info">
      <p>
        <span className="username">{address.name}</span>
        <span className="sex">{address.sex==0?"":(address.sex==1?"先生":"女士")}</span>
        <span className="mobile">{address.phone}</span>
      </p>
      <p>
        {!!address.tag&&<span className={classNames("tag",{"company":address.tag_type==3},{"home":address.tag_type==1})}>{address.tag}</span>}
        <span className="address">{address.address+address.address_detail}</span>
      </p>
    </div>
    <div className="edit">
        <i className="iconfont icon-bianji"></i>
    </div>
  </div>
);

export default Item;
