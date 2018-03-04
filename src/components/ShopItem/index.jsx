import React from 'react' ;
import './style.scss'

const ShopItem = () => {
    return (<div className="shop-item">
        <div className="shop-img"></div>
        <div className="shop-info">
            <div className="shop-title">
                <h3 className="title"></h3>
                <div className="top-right"></div>
            </div>
            <div className="shop-rate">
                <div className="star"></div>
                <div className="grade"></div></div>
            <div className="distribution-info">
                <div className="distribution-left"></div>
                <div className="distribution-right"></div>
            </div>
        </div>
    </div>)
}
export default ShopItem ;