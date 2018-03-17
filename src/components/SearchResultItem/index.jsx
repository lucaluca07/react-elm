import React from 'react' 
import './style.scss' 

const ShopItem = ({shopData}) => {
    // const restaurant = shopData.restaurant
    // const {image_path,
    //     name,
    //     recommend,
    //     supports,
    //     rating,
    //     recent_order_num,
    //     delivery_mode,
    //     float_minimum_order_amount,
    //     order_lead_time,
    //     float_delivery_fee,
    //     distance,
    //     activities} = restaurant
    const distance = 1111
    return (
        <div className="search-result-item">
            <div className="result-item">
                <div className="result-img">
                    {/* <img src={image_path} alt="result"/> */}
                </div>
                <div className="result-info">
                    <div className="result-title">
                        <h3 className="title">{"Title"}</h3>
                        <div className="top-right">
                            蜂鸟专送
                        </div>
                    </div>
                    <div className="result-rate">
                        <div className="result-rate-left">
                            <span className="grade">评价{4.8}</span>&nbsp;|&nbsp;
                            <span>¥{11}起送</span>&nbsp;|&nbsp;
                            <span>配送费¥{11}</span>
                        </div>
                        <div className="result-rate-right">
                            <span>{distance<1000?`${distance}m`:`${(distance/1000).toFixed(2)}km`}</span>&nbsp;|&nbsp;
                            <span>{49}分钟</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ShopActivity activities={activities} recommend={recommend}/> */}
        </div>)
}
export default ShopItem ;