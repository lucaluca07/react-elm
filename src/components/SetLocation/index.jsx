import React,{Component} from 'react'
import './style.scss'

export default class SetLocation extends Component{
    
    render(){
        const {currentLocation,onClick} = this.props.currentLocation
        return(
            <div className="current-location">
                <h4 className="title">当前位置</h4>
                <div className="location">
                    <div>{currentLocation}</div>
                    <div className="refresh-location">
                        <i className="iconfont icon-ditudingwei"></i>
                        <span onClick={onClick}>重新定位</span>
                    </div>
                </div>
                
            </div>
        )
    }
}