import React,{Component} from 'react'
import './style.scss'

export default class AllCategory extends Component{

    render(){
        const {category} = this.props
        console.log("category::::",category)
        return(
            <div className="filter-category">
                <div></div>
                {category
                ?<div className="filter-scroller">
                    <ul className="main-menu">
                        {category.map}
                        <li className="main-menu-item main-menu-activity">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="main-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                    </ul>
                    <ul className="sub-menu">
                        <li className="sub-menu-item sub-menu-activity">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                        <li className="sub-menu-item">
                            <span className="menu-name">美食</span>
                            <span className="count">6404</span>
                        </li>
                    </ul>
                </div>
                    :"Loading"
                }
            </div>
        )
    }
}