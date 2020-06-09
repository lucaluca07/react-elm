import React, {Component} from "react";
import CSSModules from "react-css-modules";
import "./style.scss";
import Item from "./Item"

class OrderList extends Component {
  render() {
    const {data} = this.props
    return (
        <ul className="order-list">
            {data.map((val) => (
                <Item key={val.unique_id} data={val}/>
            ))}
        </ul>
    );
  }
}

export default OrderList;
