import React, {Component} from "react";
import CSSModules from "react-css-modules";
import styles from "./style.scss";
import {Link} from "react-router-dom";
import getImgSrc from "../../../util/getImgSrc";

class Item extends Component {
  render() {
    const {data} = this.props
    return (
        <li styleName="item">
            <div styleName="info">
                <div styleName="order-avatar">
                    <img src={getImgSrc(data.restaurant_image_hash)} alt=""/>
                </div>
                <div styleName="wrap">
                    <div>
                        <div styleName="name-wrap">
                            <div styleName="shop-name">
                                <Link to={`/shop/${data.id}`}>{data.restaurant_name}</Link>
                            </div>
                            <div styleName="status_bar">{data.status_bar.title}</div>
                        </div>
                        <div styleName="time">{data.formatted_created_at}</div>
                    </div>
                    <div styleName="goods-wrap">
                        <div styleName="goods"><span>{data.basket.group[0][0].name}</span>等{data.basket.group[0].length}件商品</div>
                        <div styleName="total-price">￥{data.total_amount}</div>
                    </div>
                    <div styleName="btn-wrap">
                        <Link to={`/shop/${data.id}`}>再来一单</Link>
                    </div>
                </div>
            </div>
        </li>
    );
  }
}

export default CSSModules(Item, styles, {allowMultiple: true});
