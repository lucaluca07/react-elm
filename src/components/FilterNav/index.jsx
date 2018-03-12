import React,{Component} from 'react'
import './style.scss'

export default class FilterNav extends Component{
    render(){
        const fliterMore = this.props.fliterMore
        const {activity_types,average_costs,delivery_mode,supports} = fliterMore
        console.log(fliterMore)
        return(
            <div className="filter-nav">
                <div className="filter">
                    {delivery_mode&&
                    <dl>
                        <dt className="title">配送方式</dt>
                        <dd className="content">{
                            <div>
                                123
                            </div>
                        }</dd>
                    </dl>}
                    {activity_types.length>0&&
                    <dl>
                        <dt className="title">优惠活动</dt>
                        <dd className="content">{
                            activity_types.map((val,index) => (<div>2</div>))
                        }</dd>
                    </dl>}
                    {average_costs.length>0&&
                    <dl>
                        <dt className="title">人均消费</dt>
                        <dd className="content">{average_costs.map((val,index) => (<div>2</div>))}</dd>
                    </dl>}
                    {supports.length>0&&
                    <dl>
                        <dt className="title">商家属性</dt>
                        <dd className="content">{supports.map((val,index) => (<div>2</div>))}</dd>
                    </dl>}
                </div>
            </div>
        )
    }
}