import React from 'react' 
import './style.scss' 
import ShopActivity from '../ShopActivity'

const ShopItem = ({shopData}) => {
    const restaurant = shopData.restaurant
    console.log("222222222222",restaurant)
    return (
        <div className="item-wrap">
            <div className="shop-item">
                <div className="shop-img">
                    <img src={restaurant.image_path} alt="shop"/>
                </div>
                <div className="shop-info">
                    <div className="shop-title">
                        <h3 className="title">{restaurant.name}</h3>
                        <ul className="top-right"><li>票</li></ul>
                    </div>
                    <div className="shop-rate">
                        <div className="shop-rate-left">
                            <div className="star"></div>
                            <div className="grade">{restaurant.rating}</div>
                            <div className="grade">月售单</div>
                        </div>
                        <div className="shop-rate-right">
                            <div>蜂鸟</div>
                        </div>
                    </div>
                    <div className="distribution-info">
                        <div className="distribution-left">
                            <span>起送</span>|
                            <span>配送费</span>
                        </div>
                        <div className="distribution-right">
                            <span>m</span>|
                            <span>分钟</span>
                        </div>
                    </div>
                </div>
            </div>
            <ShopActivity/>
        </div>)
}
export default ShopItem ;