import React, {Component} from 'react';

import RatingStar from '../RatingStar'
import styles from './style.scss';
import InfiniteScroll from "../ScrollList";
import getImgSrc from '../../util/getImgSrc';
import load from "../../static/image/loadding.gif";

class RatingList extends Component {

    render() {
        const spinLoader = (
            <div
                style={{
                textAlign: "center",
                fontSize: 12,
                lineHeight: 1.5,
                paddingTop: 15,
                paddingBottom: 5,
                clear: "both"
            }}>
                <img
                    src={load}
                    style={{
                    height: 10,
                    width: 10
                }}
                    alt=""/>正在加载...
            </div>
        );
        const {data, hasMore} = this.props.data;
        const loadNext = this.props.loadNext;
        console.log("rating", hasMore)
        return (
            <div className="rating-list">
                <ul className="rating-tag-list">
                    <li className="rating-tag activity-tag">全部</li>
                    <li className="rating-tag">满意</li>
                    <li className="rating-tag">不满意</li>
                    <li className="rating-tag">有图</li>
                </ul>
                <div className="rating-comment-list">
                    {data.length > 0 && <InfiniteScroll
                        loadNext={loadNext}
                        threshold={100}
                        hasMore={hasMore}
                        spinLoader={spinLoader}>

                        {data.map((val, index) => (
                            <div key={index} className="rating-comment-item">
                                <div className="rating-comment-header"></div>
                                <div className="rating-comment-main">
                                    <div className="rating-comment-user">
                                        <span>{val.username}</span>
                                        <span className="rating-date">{val.rated_at}</span>
                                    </div>
                                    <div className="rating-star">
                                        <RatingStar scale={0.8} rate={val.rating}/>
                                        <span>{val.time_spent_desc}</span>
                                    </div>
                                    
                                    <div className="rating-comment">{val.rating_text}</div>
                                    <ul className="rating-img-list">
                                        {val.order_images && val
                                            .order_images
                                            .map((img) => (
                                                <li key={img.image_hash} className="rating-img-item">
                                                    <img src={getImgSrc(img.image_hash)} alt=""/>
                                                </li>
                                            ))}
                                    </ul>
                                    <ul className="rating-goods-list">
                                        {val.food_ratings.map((goods,index) => (
                                            <li key={index} className="rating-goods">{goods.rate_name}</li>
                                        ))}
                                        
                                    </ul>
                                </div>
                            </div>
                        ))}

                    </InfiniteScroll>}
                </div>
            </div>
        )
    }
}

export default RatingList;