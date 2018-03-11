import React,{Component} from 'react'
import './style.scss'

export default class FilterBar extends Component{
    constructor(){
        super()
        this.state = {showFliter:false,
            orderText:"综合排序",
            order:0,
            vip:false,
        }
        this.handleOrderByDistance = this.handleOrderByDistance.bind(this)
        this.handleToggleVip = this.handleToggleVip.bind(this)
    }
    componentDidMount(){
        
    }
    handleCilck(show){
        const showFliter = this.state.showFliter
        if(!!showFliter && showFliter === show){
            this.setState({showFliter:false})
            document.body.style.overflow = "auto"
            document.getElementsByTagName('body')[0].style.height = "100%"
        }else{
            this.setState({showFliter:show})
            document.body.style.overflow = "hidden"
            document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px'
        }
    }
    handleSortClick(index){
        const orderArr = ["综合排序","销量最高","起送价最低","配送最快"]
        this.setState({orderText:orderArr[index],order:index,showFliter:false})
    }
    handleOrderByDistance(){
        this.setState({order:4,showFliter:false})
    }
    handleToggleVip(){
        const {vip} = this.state
        this.setState({vip:!vip,showFliter:false})
    }

    render(){
        const {showFliter,orderText,order,vip} = this.state
        const orderArr = ["综合排序","销量最高","起送价最低","配送最快"]
        return(
            <div className="filter-bar">
                <ul className="filter">
                    <li style={{fontWeight:(order<=3||showFliter==="sort")?"bold":"normal", color:showFliter==="sort"?"#3190e8":"#333"}} onClick={this.handleCilck.bind(this,"sort")}>
                        <span>{order===4?"综合排序":orderText}</span><i className="iconfont icon-sanjiao1"></i></li>
                    <li style={{fontWeight:order===4?"bold":"normal"}} onClick={this.handleOrderByDistance}>距离最近</li>
                    <li style={{fontWeight:vip?"bold":"normal"}} onClick={this.handleToggleVip}><i className="iconfont icon-huangguan"></i><span>会员领红包</span></li>
                    <li style={{color:showFliter==="filter"?"#3190e8":"#333",fontWeight:showFliter==="filter"?"bold":"normal"}} onClick={this.handleCilck.bind(this,"filter")}><span>筛选</span><i className="iconfont icon-shaixuan"></i></li>
                </ul>
                {
                    !!showFliter&&<div className="filter-extend">
                    {
                        showFliter === "sort"
                        ? <ul className="sort-list">
                            {orderArr.map((val,index) => (<li key={index} style={{color:index===order?"#3190e8":"#333",fontWeight:index===order?"bold":"normal"}} onClick={this.handleSortClick.bind(this,index)}><span>{val}</span></li>))}
                        </ul>
                        :<div>筛选</div>
                    }
                    <div className="shade" onClick={() => this.setState({showFliter:false})}></div>
                </div>
                }
                
                <div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div><div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div><div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div><div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>
            </div>
        )
    }
}