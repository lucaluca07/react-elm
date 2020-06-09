import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
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
            <div styleName="rating-list">
                <ul styleName="rating-tag-list">
                    <li styleName="rating-tag activity-tag">全部</li>
                    <li styleName="rating-tag">满意</li>
                    <li styleName="rating-tag">不满意</li>
                    <li styleName="rating-tag">有图</li>
                </ul>
                <div styleName="rating-comment-list">
                    {data.length > 0 && <InfiniteScroll
                        loadNext={loadNext}
                        threshold={100}
                        hasMore={hasMore}
                        spinLoader={spinLoader}>

                        {data.map((val, index) => (
                            <div key={index} styleName="rating-comment-item">
                                <div styleName="rating-comment-header"></div>
                                <div styleName="rating-comment-main">
                                    <div styleName="rating-comment-user">
                                        <span>{val.username}</span>
                                        <span styleName="rating-date">{val.rated_at}</span>
                                    </div>
                                    <div styleName="rating-star">
                                        <RatingStar scale={0.8} rate={val.rating}/>
                                        <span>{val.time_spent_desc}</span>
                                    </div>
                                    
                                    <div styleName="rating-comment">{val.rating_text}</div>
                                    <ul styleName="rating-img-list">
                                        {val.order_images && val
                                            .order_images
                                            .map((img) => (
                                                <li key={img.image_hash} styleName="rating-img-item">
                                                    <img src={getImgSrc(img.image_hash)} alt=""/>
                                                </li>
                                            ))}
                                    </ul>
                                    <ul styleName="rating-goods-list">
                                        {val.food_ratings.map((goods,index) => (
                                            <li key={index} styleName="rating-goods">{goods.rate_name}</li>
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

export default CSSModules(RatingList, styles, {allowMultiple: true});