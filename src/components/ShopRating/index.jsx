import React, { Component } from 'react';

import RatingList from '../RatingList';
import styles from './style.scss';

class ShopRating extends Component {

    render() {
        const {rating, loadNext} = this.props
        return (
            <div className="shop-rating">
                <div className="overview">
                    <div className="overview-left">
                        <strong className="overview-rating">5.0</strong>
                        <p className="overview-text">综合评价</p>
                        <p className="overview-left-bottom">高于周边商家8.2%</p>
                    </div>
                    <div className="overview-right">
                        <div className="overview-right-item">
                            <span>服务态度</span>
                            5.0
                        </div>
                        <div className="overview-right-item">
                            <span>菜品评价</span>
                            4.8
                        </div>
                        <div className="overview-right-item">
                            <span>送达时间</span>
                            31分钟
                        </div>
                    </div>
                </div>
                {rating&&<RatingList data={rating} loadNext={loadNext}/>}
            </div>
        )
    }
}

export default ShopRating;