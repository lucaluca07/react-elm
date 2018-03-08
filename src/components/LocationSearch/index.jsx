import React,{Component} from 'react'
import SearchComponent from '../SearchComponent'
import './style.scss'

export default class LocationSearch extends Component{
    handleClick(address,latitude,longitude){
        const onClick = this.props.onClick
        onClick&&onClick(address,latitude,longitude)
    }
    render(){
        const locationList = this.props.locationList
        console.log(222222222)
        return(
            <div className="location-search">
            <div className="search-comp">
                <SearchComponent onEnter={this.props.onEnter} placeholder={"请输入地址"}/>
            </div>
                <div className="location-list">
                    {locationList.map((val,index) => (<div onClick={this.handleClick.bind(this,val.name,val.latitude,val.longitude)} className="location-item" key={index}>
                        <div className="location-name">{val.name}</div>
                        <div className="location-address">{val.address}</div>
                    </div>))}
                </div>
                
            </div>
        )
    }
}