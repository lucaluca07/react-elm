import React,{Component} from 'react'
import SearchComponent from '../SearchComponent'
import './style.scss'

export default class LocationSearch extends Component{
    handleClick(){
        const onClick = this.props.onClick
        onClick&&onClick()
    }
    render(){
        
        return(
            <div className="location-search">
            <div className="search-comp">
                <SearchComponent placeholder={"请输入地址"}/>
            </div>
                
                <div className="location-list">
                    {[].map((val) => (<div onClick={this.handleClick.bind(this)} className="location-item" key={val}>
                        <div className="location-name">上海博物馆</div>
                        <div className="location-address">上海市发生范德萨发</div>
                    </div>))}
                </div>
                
            </div>
        )
    }
}