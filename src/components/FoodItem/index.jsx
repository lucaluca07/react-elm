import React from 'react' 
import './style.scss'

const FoodItem = ({title,describe,subTitle,img,color}) => (
    <div className="food-item">
        <div className="img-wrap">
            <img/>
        </div>
        <div className="food-item-right">
            <h4 className="food-item-name">
                12322
            </h4>
            <div className="food-item-rate">
                <span>12323</span>
                <span>21321321</span>
            </div>
            <div className="food-item-price">
                <span className="price">123</span>
                <span className="old-price">123</span>
                <span className="sale-tag">6.4</span>
            </div>
        </div>
    </div>
)

export default FoodItem