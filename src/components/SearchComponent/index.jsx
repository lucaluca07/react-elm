import React,{Component} from 'react'
import './style.scss'

export default class SearchInput extends Component{
    constructor(){
        super()
        this.state={value:"",showClear:false}
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(e){
        const inputValue = e.target.value
        this.setState({value:inputValue,showClear:!!inputValue.length})
        const onChange = this.props.onChange
        onChange&&onChange(inputValue)  
    }
    handleKeyUp(e){
        const onEnter = this.props.onEnter
        const value = this.state.value
        if(e.keyCode === 13){
            onEnter&&onEnter(value)
        }
    }
    handleClick(){
        this.setState({value:"",showClear:false})
        const onChange = this.props.onChange
        onChange&&onChange("")
    }
    
    render(){
        const {height,placeholder} = this.props
        const {value,showClear} = this.state
        const padding = height?`${height}px`:"10px" 
        return(
            <div className="search-wrap">
                <i className="iconfont icon-sousuoxiao"></i>
                <input type="text" 
                    style={{paddingBottom:padding,paddingTop:padding}} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={this.handleChange} 
                    onKeyUp={this.handleKeyUp}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}/>
                <div className="clear-btn" onClick={this.handleClick}>
                    {showClear 
                    &&<i  className="iconfont icon-close clear-input"></i>}
                </div>
                
            </div>
        )
    }
}