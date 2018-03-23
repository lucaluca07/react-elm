import React from "react";
import "./style.scss";
import Modal from "../Modal";
import RatingStar from "../RatingStar";
import ActivitySheet from "../ActivitySheet";
import ActivityItem from "../ActivityItem";

export default class ShopDetailHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      showActivity: false
    };
    this.handleToggleShowModal = this.handleToggleShowModal.bind(this);
    this.toggleShowActivity = this.toggleShowActivity.bind(this);
  }
  handleToggleShowModal() {
    const showModal = this.state.showModal;
    this.setState({ showModal: !showModal });
  }
  toggleShowActivity() {
    const showActivity = this.state.showActivity;
    this.setState({ showActivity: !showActivity });
  }
  render() {
    const { showModal, showActivity } = this.state;
    return (
      <div className="shop-detail-header">
        <div className="header" />
        <div
          className="shop-header-center"
          onClick={this.handleToggleShowModal}
        >
          <div className="shop-img">{/* <img src="" alt="shop"/> */}</div>
          <h3 className="shop-name">
            <span className="name-text">
              沙拉谷物碗沙拉谷物碗沙拉谷物碗沙拉谷物碗沙拉谷物碗沙拉谷物碗
            </span>
            <div>
              <i className="iconfont icon-playfill" />
            </div>
          </h3>
          <div className="shop-info">
            <RatingStar scale={0.9} />
            <span>月售111单&nbsp;</span>
            <span>蜂鸟专送&nbsp;</span>
            <span>约25分钟&nbsp;</span>
            <span>距离1.3km&nbsp;</span>
          </div>
          <p className="shop-notice">
            【沙绿轻食】专业研发，健康均衡配比 让你做一个轻体无负担瘦瘦的吃货
            暂不支持自选搭配和备注哟～
            有关发票、VIP优惠等其他问题，可联系公号【沙绿轻食】在线客服
          </p>
        </div>
        <div className="activity-btn" onClick={this.toggleShowActivity}>
          <div>
            <span>满减</span>
            <span>满35减6，满65减10，满85减15</span>
          </div>
          <div>
            <span>6个优惠</span>
            <i className="iconfont icon-sanjiao1" />
          </div>
        </div>
        {showModal && (
          <Modal callback={this.handleToggleShowModal} displacement={50}>
            <div className="shopinfo-modal">
              <h3 className="title">沙拉谷物碗</h3>
              <ul className="info-list">
                <li className="item">
                  <h3>5</h3>
                  <p>评分</p>
                </li>
                <li className="item">
                  <h3>155</h3>
                  <p>月售</p>
                </li>
                <li className="item">
                  <h3>蜂鸟专送</h3>
                  <p>约20分钟</p>
                </li>
                <li className="item">
                  <h3>5元</h3>
                  <p>配送费</p>
                </li>
                <li className="item">
                  <h3>122m</h3>
                  <p>距离</p>
                </li>
              </ul>
              <div className="modal-notice">
                <h4 className="title">公告</h4>
                <p className="content">
                  【沙绿轻食】专业研发，健康均衡配比
                  让你做一个轻体无负担瘦瘦的吃货 暂不支持自选搭配和备注哟～
                  有关发票、VIP优惠等其他问题，可联系公号【沙绿轻食】在线客服
                </p>
              </div>
            </div>
          </Modal>
        )}
        {showActivity && (
          <ActivitySheet>
            <div>
              <div className="shop-activity-item" key={0}>
                <span
                  className="activity-icon"
                  style={{ background: `#${'0af'}` }}
                >
                  {'测试'}
                </span>
                <span className="activity-descripition">{'满减'}</span>
              </div>
            </div>
          </ActivitySheet>
        )}
      </div>
    );
  }
}
