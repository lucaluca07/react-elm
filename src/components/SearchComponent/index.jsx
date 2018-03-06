import React,{Component} from 'react'
import './style.scss'

export default class SearchInput extends Component{
    constructor(){
        super()
        this.state={value:""}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        const inputValue = e.target.value
        const value = this.state.value
        this.setState({value:inputValue})
        const {onChange} = this.props
        onChange&&onChange(inputValue,value)
    }
    render(){
        const {height,placeholder} = this.props
        return(
            <div className="search-wrap">
                <i className="iconfont icon-sousuoxiao"></i>
                <input type="text" style={{height}} placeholder={placeholder} value={this.state.value} onChange={this.handleChange}/>
            </div>
        )
    }
}