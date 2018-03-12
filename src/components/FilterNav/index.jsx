import React,{Component} from 'react'
import './style.scss'

export default class FilterNav extends Component{
    render(){
        const fliterMore = this.props.fliterMore
        const {activity_types,average_costs,delivery_mode,supports} = fliterMore
        console.log(fliterMore)
        return(
            <div className="filter-nav">
                <div className="filter-wrap">
                    {delivery_mode&&
                    <dl className="filter-item">
                        <dt className="title">配送方式</dt>
                        <dd className="content">{
                            <div className="more-filter">
                                123
                            </div>
                        }</dd>
                    </dl>}
                    {activity_types.length>0&&
                    <dl className="filter-item">
                        <dt className="title">优惠活动</dt>
                        <dd className="content">{
                            activity_types.map((val,index) => (<div key={index} 
                                style={{borderBottom:index<3&&activity_types.length>3?"1px solid #e4e3e3":"none",
                                    borderRight:index===2||index===5?"none":"1px solid #e4e3e3"}}
                                className="more-filter">
                                <div className="activity-icon" 
                                    style={{background:`#${val.icon_color}`,}}>{val.icon_name}</div>
                                <span>{val.name}</span>
                            </div>))
                        }</dd>
                    </dl>}
                    {average_costs.length>0&&
                    <dl className="filter-item">
                        <dt className="title">人均消费</dt>
                        <dd className="content">{average_costs.map((val,index) => (<div 
                            key={index}
                            style={{borderBottom:index<3&&average_costs.length>3?"1px solid #e4e3e3":"none",
                                borderRight:index===2||index===5?"none":"1px solid #e4e3e3"}}
                            className="more-filter">
                            <span className="average-costs">{val.description}</span>
                            </div>))}
                        </dd>
                    </dl>}
                    {supports.length>0&&
                    <dl className="filter-item">
                        <dt className="title">商家属性</dt>
                        <dd className="content">{supports.map((val,index) => (<div key={index} 
                                style={{borderBottom:index<3&&activity_types.length>3?"1px solid #e4e3e3":"none",
                                    borderRight:index===2||index===5?"none":"1px solid #e4e3e3"}}
                                className="more-filter">
                                <div className="support-icon" 
                                    style={{color:`#${val.icon_color}`,borderColor:`#${val.icon_color}`}}>{val.icon_name}</div>
                                <span>{val.name}</span>
                            </div>))}
                        </dd>
                    </dl>}
                </div>
            </div>
        )
    }
}