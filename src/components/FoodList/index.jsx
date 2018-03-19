import React,{Component} from 'react'
import FoodItem from '../FoodItem'
import './style.scss'

export default class FoodList extends Component{
    constructor(){
        super()
        this.state = {showMore:false}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        e.preventDefault()
        const showMore = this.state.showMore
        this.setState({showMore:!showMore})
    }
    render(){
        const data = this.props.data
        const showMore = this.state.showMore
        return (
            <div className="food-list">
                {data.length>2
                ?<div>
                    {showMore
                    ?data.map((val,index) => (
                        <FoodItem key={index} data={val}/>
                    ))
                    :data.slice(0,2).map((val,index) => (
                        <FoodItem key={index} data={val}/>
                    ))}
                    <div className="showmore-btn" onClick={this.handleClick}>
                        {showMore?
                            <div>
                                <span>收起</span>
                                <i className="iconfont icon-fold"></i>
                            </div>
                            :<div>
                                <span>展开更多商品{data.length-2}个</span>
                                <i className="iconfont icon-unfold"></i>
                            </div>}
                    </div>
                </div>
                :<div>
                    {data.map((val,index)=>(
                        <FoodItem key={index}/>
                    ))}
                </div>
            }
            </div>
        )
    }
}