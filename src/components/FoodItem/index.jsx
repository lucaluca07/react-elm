import React from 'react' 
import './style.scss'
import getImgSrc from '../../util/getImgSrc'

const showHighlights = (ele,name) => {
    let title 
    ele.forEach(element => {
        title = name.split(element).join(`<span class='highlights'>${element}</span>`)
    })
    return title
}

const FoodItem = ({data,highlights}) => {
    const {name,month_sales,price,satisfy_rate,image_path,activities,original_price} = data
    const innerHtml =  showHighlights(highlights,name)
    return(
        <div className="food-item">
            <div className="img-wrap">
                <img src={getImgSrc(image_path)} alt="food"/>
            </div>
            <div className="food-item-right">
                <h4 className="food-item-name" 
                    dangerouslySetInnerHTML={{__html: innerHtml}}>
                </h4>
                <div className="food-item-rate">
                    <span>月售{month_sales}份</span>&nbsp;
                    <span>好评率{satisfy_rate}%</span>
                </div>
                <div className="food-item-price">
                    <span className="price">¥{price}</span>&nbsp;
                    {original_price&&<span className="old-price">¥{original_price}</span>}
                    <span className="sale-tag"
                    style={{border:activities[0]&&activities[0].icon_color?`1px solid #${activities[0].icon_color}`:"none",
                    background: activities[0]&&activities[0].background?`linear-gradient(to right, #${activities[0].background.rgb_from}, #${activities[0].background.rgb_to})`:"none"
                    }}
                    >
                    {activities[0]&&activities[0].description}</span>
                </div>
            </div>
        </div>
    )
}

export default FoodItem