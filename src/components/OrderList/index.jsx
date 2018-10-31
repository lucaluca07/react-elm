import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";
import Item from "./Item"

class OrderList extends Component {
  render() {
    const {data} = this.props
    return (
        <ul styleName="wrap">
            {data.map((val) => (
                <Item key={val.unique_id} data={val}/>
            ))}
        </ul>
    );
  }
}

export default CSSModules(OrderList, styles, {allowMultiple: true});
