import React,{Component} from 'react' 
import './style.scss' 
import FoodList from '../FoodList'

class ShopItem extends Component {
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
    render(){
        const data = this.props.data
        const {foods, restaurant} = data
        const {name,distance,rating,float_delivery_fee,float_minimum_order_amount,order_lead_time,delivery_mode} = restaurant
        return (
            <div className="search-result-item">
                <div className="result-item">
                    <div className="result-img">
                        {/* <img src={image_path} alt="result"/> */}
                    </div>
                    <div className="result-info">
                        <div className="result-title">
                            <h3 className="title">{name}</h3>
                            <div className="top-right">
                                {delivery_mode
                                ?<div className="delivery" style={{color:`#${delivery_mode.text_color}`,
                                    background: `linear-gradient(to right, #${delivery_mode.gradient.rgb_from}, #${delivery_mode.gradient.rgb_to})`
                                }}>
                                    {delivery_mode.text}
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className="result-rate">
                            <div className="result-rate-left">
                                <span className="grade">评价{rating}</span>&nbsp;|&nbsp;
                                <span>起送费¥{float_minimum_order_amount}</span>&nbsp;|&nbsp;
                                <span>配送费¥{float_delivery_fee}</span>
                            </div>
                            <div className="result-rate-right">
                                <span>{distance<1000?`${distance}m`:`${(distance/1000).toFixed(2)}km`}</span>&nbsp;|&nbsp;
                                <span>{order_lead_time}分钟</span>
                            </div>
                        </div>
                    </div>
                </div>
                <FoodList/>
            </div>) 
    }
    
}
export default ShopItem ;