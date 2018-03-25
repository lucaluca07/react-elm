import React, { Component } from 'react';
import './style.scss'

export default class Cart extends Component {

    render() {
        return (
            <div className="cartview">
                <div className="discount-tips">满75减30</div>
                <div className="cartview-body">
                    <div className="cartview-main">
                        <div className="cartview-total">¥0</div>
                        <div className="cart-delivery">配送费¥5</div>
                    </div>
                    <div className="submit-btn">¥20起送</div>

                </div>
                <div className="cart">
                    <i className="iconfont icon-cartfill"></i>
                </div>
            </div>
        )
    }
}
