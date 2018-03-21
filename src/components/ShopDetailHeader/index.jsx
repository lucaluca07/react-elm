import React from 'react'
import './style.scss'
import Modal from '../Modal'
import RatingStar from '../RatingStar'

export default class ShopDetailHeader extends React.Component{
    constructor(){
        super()
        this.state = {showModal:false,
            showActivity:false}
        this.handleToggleShowModal = this.handleToggleShowModal.bind(this)
        this.toggleShowActivity = this.toggleShowActivity.bind(this)
        
    }
    handleToggleShowModal(){
        const showModal = this.state.showModal
        this.setState({showModal:!showModal})
    }
    toggleShowActivity(){
        const showActivity = this.state.showActivity
        this.setState({showActivity:!showActivity})
    }
    render(){
        const {showModal,showActivity} = this.state
        return(
            <div className="shop-detail-header">
                <div className="header"></div>
                <div className="shop-header-center" onClick={this.handleToggleShowModal}>
                    <div className="shop-img">
                        {/* <img src="" alt="shop"/> */}
                    </div>
                    <h3 className="shop-name">
                        <span className="name-text">沙拉谷物碗沙拉谷物碗沙拉谷物碗沙拉谷物碗沙拉谷物碗沙拉谷物碗</span>
                        <div>
                            <i className="iconfont icon-playfill"></i>
                        </div>   
                    </h3>
                    <div className="shop-info">
                        <RatingStar scale={0.9}/>
                        <span>月售111单&nbsp;</span>
                        <span>蜂鸟专送&nbsp;</span>
                        <span>约25分钟&nbsp;</span>
                        <span>距离1.3km&nbsp;</span>
                    </div>
                    <p className="shop-notice">【沙绿轻食】专业研发，健康均衡配比
                            让你做一个轻体无负担瘦瘦的吃货
                            暂不支持自选搭配和备注哟～
                            有关发票、VIP优惠等其他问题，可联系公号【沙绿轻食】在线客服</p>
                </div>
                <div className="activity-btn" onClick={this.toggleShowActivity}>
                    <div>
                        <span>满减</span>
                        <span>满35减6，满65减10，满85减15</span>
                    </div>
                    <div>
                        <span>6个优惠</span>
                        <i className="iconfont icon-sanjiao1"></i>
                    </div>
                </div>
                {showModal&&
                <Modal callback={this.handleToggleShowModal} displacement={50}>
                    <div className="shopinfo-modal">
                        <h3>沙拉谷物碗</h3>
                        <div>
                            <div>5 评分</div>
                            <div>月售111单</div>
                            <div>蜂鸟专送</div>
                            <div>约25分钟</div>
                            <div>距离1.3km</div>
                        </div>
                        <div>
                            <h4>公告</h4>
                            <p>【沙绿轻食】专业研发，健康均衡配比
                            让你做一个轻体无负担瘦瘦的吃货
                            暂不支持自选搭配和备注哟～
                            有关发票、VIP优惠等其他问题，可联系公号【沙绿轻食】在线客服</p>
                        </div>
                    </div>
                </Modal>}
                {showActivity&&
                <div>
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>}
                
            </div>        
        )
    }
}