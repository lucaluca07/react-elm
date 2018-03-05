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
                        <ul className="top-right">
                            {restaurant.recommend.is_ad
                            ?<li className="ad">广告</li>
                            :""}
                            {restaurant.supports.length>0
                            ?restaurant.supports.map((val,index) => (
                                <li className="support" key={index} style={{color:`#${val.icon_color}`}}>{val.icon_name}</li>
                            ))
                            :""}
                        </ul>
                    </div>
                    <div className="shop-rate">
                        <div className="shop-rate-left">
                            <div className="star"></div>
                            <div className="grade">{restaurant.rating}</div>&nbsp;
                            <div className="grade">月售{restaurant.recent_order_num}单</div>
                        </div>
                        <div className="shop-rate-right">
                            {restaurant.delivery_mode
                                ?<div className="delivery" style={{color:`#${restaurant.delivery_mode.text_color}`,
                                    background: `linear-gradient(to right, #${restaurant.delivery_mode.gradient.rgb_from}, #${restaurant.delivery_mode.gradient.rgb_to})`
                                }}>
                                    {restaurant.delivery_mode.text}
                                </div>
                                :""}
                        </div>
                    </div>
                    <div className="distribution-info">
                        <div className="distribution-left">
                            <span>¥{restaurant.float_minimum_order_amount}起送</span>&nbsp;|&nbsp;
                            <span>配送费¥{restaurant.float_delivery_fee}</span>
                        </div>
                        <div className="distribution-right">
                            <span>{restaurant.distance<1000?`${restaurant.distance}m`:`${(restaurant.distance/1000).toFixed(2)}km`}</span>&nbsp;|&nbsp;
                            <span>{restaurant.order_lead_time}分钟</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <ShopActivity activities={restaurant.activities} recommend={restaurant.recommend}/>
        </div>)
}
export default ShopItem ;