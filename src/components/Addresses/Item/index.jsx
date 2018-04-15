import React from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";
import classNames from "classnames"

const Item = ({address,onClick}) => (
  <div styleName="item" onClick={() => {onClick&&onClick(address)}}>
    <div styleName="info">
      <p>
        <span styleName="username">{address.name}</span>
        <span styleName="sex">{address.sex==0?"":(address.sex==1?"先生":"女士")}</span>
        <span styleName="mobile">17321009807</span>
      </p>
      <p>
        {!!address.tag&&<span styleName={classNames("tag",{"company":address.tag_type==3},{"home":address.tag_type==1})}>{address.tag}</span>}
        <span styleName="address">{address.address+address.address_detail}</span>
      </p>
    </div>
    <div styleName="edit">
        <i className="iconfont icon-bianji"></i>
    </div>
  </div>
);

export default CSSModules(Item, styles, { allowMultiple: true });
