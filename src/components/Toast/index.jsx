import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

const Toast = ({children}) => (
  <div styleName="toast">
    <div styleName="info">
        {children}
    </div>  
  </div>
);

export default CSSModules(Toast,styles);