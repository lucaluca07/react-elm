import React,{Component} from 'react'
import './style.scss'

export default class SearchInput extends Component{
    constructor(){
        super()
        this.state={value:""}
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
        const inputValue = e.target.value
        this.setState({value:inputValue})
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
        this.setState({value:""})
        const onChange = this.props.onChange
        onChange&&onChange("")
    }
    render(){
        const {height,placeholder} = this.props
        const value = this.state.value
        const padding = height?`${height}px`:"10px" 
        return(
            <div className="search-wrap">
                <i className="iconfont icon-sousuoxiao"></i>
                <input type="text" 
                    style={{paddingBottom:padding,paddingTop:padding}} 
                    placeholder={placeholder} 
                    value={value} 
                    onChange={this.handleChange} 
                    onKeyUp={this.handleKeyUp}/>
                {value.length>0
                    &&<i onClick={this.handleClick} className="iconfont icon-close clear-input"></i>}
            </div>
        )
    }
}