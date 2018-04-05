import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

class RatingList extends Component {

    render() {
        return (
            <div styleName="rating-list">
                <ul styleName="rating-tag-list">
                    <li styleName="rating-tag activity-tag">全部</li>
                    <li styleName="rating-tag">满意</li>
                    <li styleName="rating-tag">不满意</li>
                    <li styleName="rating-tag">有图</li>
                </ul>
                <ul styleName="rating-comment-list">
                    <li styleName="rating-comment-item">
                        <div styleName="rating-comment-header"></div>
                        <div styleName="rating-comment-main">
                            <div styleName="rating-comment-user">
                                <span>用户名</span>
                                <span styleName="rating-date">2018-03-26</span>
                            </div>
                            <div>4星</div>
                            <div styleName="rating-comment">这是评论</div>
                            <ul styleName="rating-img-list">
                                <li styleName="rating-img-item">这是图</li>
                                <li styleName="rating-img-item">这是图</li>
                                <li styleName="rating-img-item">这是图</li>
                            </ul>
                            <ul styleName="rating-goods-list">
                                <li styleName="rating-goods">这是商品名</li>
                                <li styleName="rating-goods">这是商品名</li>
                                <li styleName="rating-goods">这是商品名</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CSSModules(RatingList,styles,{allowMultiple:true});