import React, { Component } from 'react';
import './style.scss';

export default class RatingList extends Component {

    render() {
        return (
            <div className="rating-list">
                <ul className="rating-tag-list">
                    <li className="rating-tag activity-tag">全部</li>
                    <li className="rating-tag">满意</li>
                    <li className="rating-tag">不满意</li>
                    <li className="rating-tag">有图</li>
                </ul>
                <ul className="rating-comment-list">
                    <li className="rating-comment-item">
                        <div className="rating-comment-header"></div>
                        <div className="rating-comment-main">
                            <div className="rating-comment-user">
                                <span>用户名</span>
                                <span className="rating-date">2018-03-26</span>
                            </div>
                            <div>4星</div>
                            <div className="rating-comment">这是评论</div>
                            <ul className="rating-img-list">
                                <li className="rating-img-item">这是图</li>
                                <li className="rating-img-item">这是图</li>
                                <li className="rating-img-item">这是图</li>
                            </ul>
                            <ul className="rating-goods-list">
                                <li className="rating-goods">这是商品名</li>
                                <li className="rating-goods">这是商品名</li>
                                <li className="rating-goods">这是商品名</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}