import React,{Component} from 'react'
import './style.scss'

export default class SearchInput extends Component{
    constructor(){
        super()
        this.state={value:"",keyCode:""}
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
        const inputValue = e.target.value
        this.setState({value:inputValue})
        const onChange = this.props.onChange
        onChange&&onChange()  
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
    }
    render(){
        const {height,placeholder} = this.props
        const value = this.state.value
        return(
            <div className="search-wrap">
                <i className="iconfont icon-sousuoxiao"></i>
                <input type="text" 
                    style={{height}} 
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