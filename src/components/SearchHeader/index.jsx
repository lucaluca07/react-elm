import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import SearchComponent from '../SearchComponent'
import './style.scss'

class SearchHeader extends Component{
    handleClick(){   
        this.props.history.push('/')
    }
    render(){
        return(
            <div className="search-header">
                <div className="search-back" onClick={this.handleClick.bind(this)}>
                    <i className="iconfont icon-fanhuijiantou back"></i>
                </div>
                <div className="search-comp-box">
                    <SearchComponent 
                        value={this.props.value}
                        onEnter={this.props.onEnter}
                        onChange={this.props.onChange} 
                        height={5} 
                        placeholder={"输入商家、商品名称"}/>
                </div>
                <div className="search-btn">搜索</div>
            </div>
        )
    }
}

export default withRouter(SearchHeader)