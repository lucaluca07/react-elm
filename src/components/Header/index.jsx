import React from 'react'
import './style.scss'

const Header = ({title}) => (
    <div className="header">
        <div className="header-back" onClick={() => {window.history.go(-1)}}>
            <i className="iconfont icon-fanhuijiantou back"></i>
        </div>
        <div className="header-title">{title}</div>
        <div className="add-address"></div>
    </div>
)
export default Header