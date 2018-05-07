import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";

class Item extends Component {
  render() {
    const {data} = this.props
    return (
        <li styleName="item">
            <div styleName="info">
                <div styleName="order-avatar">
                    <img src="" alt=""/>
                </div>
                <div styleName="wrap">
                    <div>
                        <div styleName="name-wrap">
                            <div styleName="shop-name"><span>{data.restaurant_name}</span>></div>
                            <div styleName="status_bar">{data.status_bar.title}</div>
                        </div>
                        <div styleName="time">{data.formatted_created_at}</div>
                    </div>
                    <div>
                        <div><span>{data.basket.group[0][0].name}</span>等{data.basket.group[0].length}件商品</div>
                        <div>{data.total_amount}</div>
                    </div>
                </div>
            </div>
            <div styleName="btn-warp">
                <div>再来一单</div>
            </div>
        </li>
    );
  }
}

export default CSSModules(Item, styles, {allowMultiple: true});
