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
        const activityList = [1,2,3,4,5]
        const showMore = this.state.showMore
        return (
            <div className="shop-activity">
                <div className="activity-left"></div>
                <div className="activity-right">
                    <div className="tagLine">
                        <img src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/" alt="tag"/>
                        <span>口碑人气好店</span>
                    </div>
                    <div className="activities">
                        <div className="activity-list">
                            <div>
                                {showMore?
                                    activityList.map((val,index)=>(
                                        <div key={index}>活动</div>
                                    ))
                                    :activityList.slice(0,2).map((val,index)=>(
                                        <div key={index}>活动</div>
                                    ))
                                }
                            </div>
                        </div>
                        {activityList.length>2
                            ? <div className="activityBtn" onClick={this.toggleShowMore.bind(this)}>
                                <div>
                                    <span>3个活动</span>
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