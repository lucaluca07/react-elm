import React from 'react' ;
import './style.scss'

const ShopItem = () => {
    return (<div className="shop-item-stone">
        <div className="img-stone"></div>
        <div className="info-stone">
            <div className="item-stone-top">
                <div className="top-left"></div>
                <div className="top-right"></div>
            </div>
            <div className="item-stone-center">
                <div className="center-left"></div>
                <div className="center-right"></div></div>
            <div className="item-stone-bottom">
                <div className="bottom-left"></div>
                <div className="bottom-right"></div>
            </div>
        </div>
    </div>)
}
export default ShopItem ;