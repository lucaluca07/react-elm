import React, {Component} from 'react'
import './style.scss'

export default class SearchWord extends Component{

    render(){
        const {title,del,data} = this.props
        return(
            <div className="search-words">
                <h3 className="title">
                    <span>{title}</span>
                    {del&&<i className="iconfont icon-lajixiang"></i>}
                </h3>
                <ul className="word-list">
                {data.map((val,index) => (<div className="word" key={index}>
                            {val}
                        </div>))}
                </ul>
            </div>
        )
    }
}