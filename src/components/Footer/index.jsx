import React from 'react' ;
import './style.scss'

class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state = {activeIndex : 0}
    }

    handleClick(index){
        this.setState({activeIndex:index})
    }
    render(){
        const activeIndex = this.state.activeIndex
        return(
            <div>
                <div className="footer">
                    <div className="footer-split"></div>
                    <ul className="footer-wrap">
                        <li className={`footer-item ${activeIndex === 0?"active":""}`}
                            onClick={this.handleClick.bind(this,0)}>
                            <span>首页</span>
                        </li>
                        <li className={`footer-item ${activeIndex === 1?"active":""}`}
                            onClick={this.handleClick.bind(this,1)}>
                            <span>发现</span>
                        </li>
                        <li className={`footer-item ${activeIndex === 2?"active":""}`}
                            onClick={this.handleClick.bind(this,2)}>
                            <span>订单</span>
                        </li>
                        <li className={`footer-item ${activeIndex === 3?"active":""}`}
                            onClick={this.handleClick.bind(this,3)}>
                            <span>我的</span>
                        </li>
                    </ul>
                </div>
                <div className="box"></div>
            </div>      
        )
    }
}  
export default Footer ;