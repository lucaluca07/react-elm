import React, {Component} from "react";
import "./style.scss";
import {Link} from "react-router-dom";
import getImgSrc from "../../../util/getImgSrc";

class Item extends Component {
  render() {
    const {data} = this.props
    return (
        <li className="order-item">
            <div className="info">
                <div className="order-avatar">
                    <img src={getImgSrc(data.restaurant_image_hash)} alt=""/>
                </div>
                <div className="wrap">
                    <div>
                        <div className="name-wrap">
                            <div className="shop-name">
                                <Link to={`/shop/${data.id}`}>{data.restaurant_name}</Link>
                            </div>
                            <div className="status_bar">{data.status_bar.title}</div>
                        </div>
                        <div className="time">{data.formatted_created_at}</div>
                    </div>
                    <div className="goods-wrap">
                        <div className="goods"><span>{data.basket.group[0][0].name}</span>等{data.basket.group[0].length}件商品</div>
                        <div className="total-price">￥{data.total_amount}</div>
                    </div>
                    <div className="btn-wrap">
                        <Link to={`/shop/${data.id}`}>再来一单</Link>
                    </div>
                </div>
            </div>
        </li>
    );
  }
}

export default Item;
