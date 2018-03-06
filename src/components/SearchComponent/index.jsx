import React,{Component} from 'react'

export default class SearchInput extends Component{
    constructor(){
        super()
        this.state={value:""}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({value:e.target.value})
        const {onChange} = this.props
        console.log(this.state.value,e.target.value)
        onChange&&onChange()
    }
    render(){
        const {height,width,placeholder} = this.props
        return(
            <div style={{height,width,placeholder}}>
                <i></i>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </div>
        )
    }
}