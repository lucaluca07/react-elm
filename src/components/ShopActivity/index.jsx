import React from 'react'
import './style.scss'

class ShopActivity extends React.Component{
    constructor(){
        super()
        this.state = {showMore:false}
    }
    toggleShowMore(){
        const showMore = this.state.showMore
        this.setState({showMore:!showMore})
    }
    
    render(){
        const activityList = this.props.activities
        const showMore = this.state.showMore
        const recommend = this.props.recommend
        return (
            <div className="shop-activity">
                <div className="activity-left"></div>
                <div className="activity-right">
                    <div className="tag-line">
                        {!recommend.is_ad && recommend.reason
                        ?<div className="tag-container">
                            <img src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/" alt="tag"/>
                            <span>{recommend.reason}</span>
                        </div>
                        :""}   
                    </div>
                    <div className="activities">
                        <div className="activity-list">
                            {showMore?
                                activityList.map((val,index)=>(
                                    <div className="shop-activity-item" key={index}>
                                        <span className="activity-icon" style={{background:`#${val.icon_color}`}}>{val.icon_name}</span>
                                        <span className="activity-descripition">{val.description}</span>
                                    </div>
                                ))
                                :activityList.slice(0,2).map((val,index)=>(
                                    <div className="shop-activity-item" key={index}>
                                        <span className="activity-icon" style={{background:`#${val.icon_color}`}}>{val.icon_name}</span>
                                        <span className="activity-descripition">{val.description}</span>
                                    </div>
                                ))
                            }
                        </div>
                        {activityList.length>2
                            ? <div className="activityBtn" onClick={this.toggleShowMore.bind(this)}>
                                <div>
                                    <span>{activityList.length}个活动</span>
                                    <i className= {`iconfont icon-sanjiao1 ${showMore?"rotate180":"rotate0"}`} ></i>  
                                </div>
                            </div>
                            :""
                        }
                    </div>
                    
                </div>
            </div>
        )
    }
} 

export default ShopActivity