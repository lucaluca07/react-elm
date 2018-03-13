import React from 'react' 
import './style.scss' 
import RatingStar from '../RatingStar'
import ShopActivity from '../ShopActivity'

const ShopItem = ({shopData}) => {
    const restaurant = shopData.restaurant
    const {image_path,
        name,
        recommend,
        supports,
        rating,
        recent_order_num,
        delivery_mode,
        float_minimum_order_amount,
        order_lead_time,
        float_delivery_fee,
        distance,
        activities} = restaurant
    return (
        <div className="item-wrap">
            <div className="shop-item">
                <div className="shop-img">
                    <img src={image_path} alt="shop"/>
                </div>
                <div className="shop-info">
                    <div className="shop-title">
                        <h3 className="title">{name}</h3>
                        <ul className="top-right">
                            {recommend.is_ad
                            ?<li className="ad">广告</li>
                            :""}
                            {supports.length>0
                            ?supports.map((val,index) => (
                                <li className="support" 
                                    key={index} 
                                    style={{color:`#${val.icon_color}`}}>
                                    {val.icon_name}
                                </li>
                            ))
                            :""}
                        </ul>
                    </div>
                    <div className="shop-rate">
                        <div className="shop-rate-left">
                            <div className="star">
                                <RatingStar rate={rating} scale={0.9}/>
                            </div>
                            <div className="grade">{rating}</div>&nbsp;
                            <div className="sell-number">月售{recent_order_num}单</div>
                        </div>
                        <div className="shop-rate-right">
                            {delivery_mode
                                ?<div className="delivery" style={{color:`#${delivery_mode.text_color}`,
                                    background: `linear-gradient(to right, #${delivery_mode.gradient.rgb_from}, #${delivery_mode.gradient.rgb_to})`
                                }}>
                                    {delivery_mode.text}
                                </div>
                                :""}
                        </div>
                    </div>
                    <div className="distribution-info">
                        <div className="distribution-left">
                            <span>¥{float_minimum_order_amount}起送</span>&nbsp;|&nbsp;
                            <span>配送费¥{float_delivery_fee}</span>
                        </div>
                        <div className="distribution-right">
                            <span>{distance<1000?`${distance}m`:`${(distance/1000).toFixed(2)}km`}</span>&nbsp;|&nbsp;
                            <span>{order_lead_time}分钟</span>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <ShopActivity activities={activities} recommend={recommend}/>
        </div>)
}
export default ShopItem ;