import React,{Component} from 'react'
import './style.scss'

export default class Categories extends Component{
    constructor(){
        super()
        this.state = {activityId:0}
    }
    handleClick(index){
        this.setState({activityId:index})
    }
    render(){
        const categories = this.props.categories
        const {activityId} = this.state
        return(
        <div className="categories">
            <ul className="category-list">
                {categories.map((val,index) => (
                    <li 
                        key={index} 
                        onClick={this.handleClick.bind(this,index)}
                        className={`category-item ${activityId===index&&"activity"}`}>
                        {val.name}
                    </li>))}
            </ul>
            <div className="show-more-btn">
                <i className="iconfont icon-unfold">
            </i></div>
        </div>)
    }
}