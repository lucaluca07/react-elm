import React from 'react' ;
import {NavLink} from 'react-router-dom'
import './style.scss'

class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="footer">
                    <div className="footer-split"></div>
                    <ul className="footer-wrap">
                        <li className={`footer-item `}>
                        <NavLink exact={true} to={'/'}>
                            <div className="home-icon icon-box">
                                <i className="iconfont icon-changyonglogo40"></i>
                            </div>
                            <span>首页</span>
                        </NavLink>
                        </li>
                        <li className={`footer-item`}>
                            <NavLink exact={true} to={'/discover'}>
                            <div className="discover-icon icon-box">
                                <i className="iconfont icon-compass"></i>
                            </div>
                            <span>发现</span>
                            </NavLink>
                        </li>
                        <li className={`footer-item`}>
                            <NavLink exact={true} to={'/order'}>
                            <div className="order-icon icon-box">
                                <i className="iconfont icon-wodedingdan"></i>
                            </div>
                            <span>订单</span>
                        </NavLink>
                        </li>
                        <li className={`footer-item`}>
                        <NavLink exact={true} to={'/my'}>
                            <div className="my-icon icon-box">
                                <i className="iconfont icon-yonghu"></i>
                            </div>
                            <span>我的</span>
                        </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="box"></div>
            </div>      
        )
    }
}  
export default Footer ;