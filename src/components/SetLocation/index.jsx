import React,{Component} from 'react'
import './style.scss'

export default class SetLocation extends Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        const {currentAddress,changeAddress} = this.props
        const {name,longitude,latitude} = currentAddress
        changeAddress(name,longitude,latitude)
    }
    render(){
        const {currentAddress,onClick} = this.props
        const {name} = currentAddress
        return(
            <div className="current-location">
                <h4 className="title">当前位置</h4>
                <div className="location">
                    <div onClick={this.handleClick}>{name}</div>
                    <div className="refresh-location">
                        <i className="iconfont icon-ditudingwei"></i>
                        <span onClick={onClick}>重新定位</span>
                    </div>
                </div>
                
            </div>
        )
    }
}