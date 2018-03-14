import React,{Component} from 'react'
import './style.scss'

export default class AllCategory extends Component{
    
    getSrc(src){
        let url
        const hash = [src.slice(0,1),src.slice(1,3),src.slice(3)].join('/')
        if(src.slice(-3) === "png"){
            url = `http://fuss10.elemecdn.com/${hash}.png%3FimageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/`
        }else{
            url = url = `http://fuss10.elemecdn.com/${hash}.jpeg%3FimageMogr/format/webp/thumbnail/!80x80r/gravity/Center/crop/80x80/`
        }
        return url
    }
    render(){
        const {category,mainMenuId,subMenuId} = this.props
        console.log(category,mainMenuId)
        const submenu = category&&category.filter(element => (element.id === mainMenuId))[0].sub_categories
        return(
            <div className="filter-category">
                <div></div>
                {category
                ?<div className="filter-scroller">
                    <ul className="main-menu">
                        {category.map((val,index) => (
                            <li key={index} 
                                className={`main-menu-item ${val.id===mainMenuId && "main-menu-activity"}`}
                                onClick={() => {this.props.setMainMenuId(val.id)}}>
                                <span className="menu-name">{val.name}</span>
                                <span className="count">{val.count}</span>
                            </li>
                        ))}
                    </ul>
                    <ul className="sub-menu">
                        {submenu.map((val,index) => (
                            <li key={index} 
                                className={`sub-menu-item ${val.id===subMenuId && "sub-menu-activity"}`}
                                onClick={() => {this.props.setSubMenuId(val.id,submenu)}}>
                                <img className="menu-img" src={this.getSrc(val.image_url)} alt="category"/>
                                <span className="menu-name">{val.name}</span>
                                <span className="count">{val.count}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                    :"Loading"
                }
            </div>
        )
    }
}