import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import RatingList from '../RatingList';
import styles from './style.scss';

class ShopRating extends Component {

    render() {
        const {rating, loadNext} = this.props
        return (
            <div styleName="shop-rating">
                <div styleName="overview">
                    <div styleName="overview-left">
                        <strong styleName="overview-rating">5.0</strong>
                        <p styleName="overview-text">综合评价</p>
                        <p styleName="overview-left-bottom">高于周边商家8.2%</p>
                    </div>
                    <div styleName="overview-right">
                        <div styleName="overview-right-item">
                            <span>服务态度</span>
                            5.0
                        </div>
                        <div styleName="overview-right-item">
                            <span>菜品评价</span>
                            4.8
                        </div>
                        <div styleName="overview-right-item">
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

export default CSSModules(ShopRating,styles,{allowMultiple:true});