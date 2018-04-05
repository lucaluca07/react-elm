import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";
import Modal from "../Modal";
import ActivitySheet from "../ActivitySheet";
import getImgSrc from "../../util/getImgSrc.js";

class ShopDetailHeader extends React.Component {
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
  handleback(){
    window.history.go(-1)
  }
  render() {
    const { showModal, showActivity } = this.state;
    const { data } = this.props;
    return (
      <div styleName="shop-detail-header">
        <div styleName="header">
          <i className="iconfont icon-fanhuijiantou"
          onClick={this.handleback}></i>
        </div>
        <div
          styleName="shop-header-center"
          onClick={this.handleToggleShowModal}
        >
          <div styleName="shop-img">
            <img src={getImgSrc(data.image_path)} alt="shop" />
          </div>
          <h3 styleName="shop-name">
            <span styleName="name-text">{data.name}</span>
            <div>
              <i className="iconfont icon-playfill" />
            </div>
          </h3>
          <div styleName="shop-info">
            <span>{data.rating}&nbsp;</span>
            <span>月售{data.recent_order_num}单&nbsp;</span>
            <span>{data.delivery_mode.text}&nbsp;</span>
            <span>约{data.order_lead_time}分钟&nbsp;</span>
            <span>
              距离{data.distance > 1000
                ? `${(data.distance / 1000).toFixed(1)}km`
                : `${data.distance}m`}&nbsp;
            </span>
          </div>
          <p styleName="shop-notice">
            {data.promotion_info || "欢迎光临，用餐高峰期请提前下单，谢谢。"}
          </p>
        </div>
        <div styleName="activity-btn" onClick={this.toggleShowActivity}>
          <div>
            <span
              style={{
                color: "#fff",
                marginRight: "5px",
                background: `#${data.activities[0].icon_color}`
              }}
            >
              {data.activities[0].icon_name}
            </span>
            <span>{data.activities[0].description}</span>
          </div>
          <div>
            <span>{data.activities.length}个优惠</span>
            <i className="iconfont icon-sanjiao1" />
          </div>
        </div>
        {showModal && (
          <Modal callback={this.handleToggleShowModal} displacement={50}>
            <div styleName="shopinfo-modal">
              <h3 styleName="title">{data.name}</h3>
              <ul styleName="info-list">
                <li styleName="item">
                  <h3>{data.rating}</h3>
                  <p>评分</p>
                </li>
                <li styleName="item">
                  <h3>{data.recent_order_num}</h3>
                  <p>月售</p>
                </li>
                <li styleName="item">
                  <h3>蜂鸟专送</h3>
                  <p>约{data.order_lead_time}分钟</p>
                </li>
                <li styleName="item">
                  <h3>{data.float_delivery_fee}元</h3>
                  <p>配送费</p>
                </li>
                <li styleName="item">
                  <h3>
                    {data.distance > 1000
                      ? `${(data.distance / 1000).toFixed(1)}km`
                      : `${data.distance}m`}
                  </h3>
                  <p>距离</p>
                </li>
              </ul>
              <div styleName="modal-notice">
                <h4 styleName="title">—&nbsp;公告&nbsp;—</h4>
                <p styleName="content">
                  {data.promotion_info ||
                    "欢迎光临，用餐高峰期请提前下单，谢谢。"}
                </p>
              </div>
            </div>
          </Modal>
        )}
        {showActivity && (
          <ActivitySheet title="优惠活动" onClick={this.toggleShowActivity}>
            <div>
              {data.activities.map((val,index) => (
                <div styleName="shop-activity-item" key={index}>
                <span
                  styleName="activity-icon"
                  style={{ background: `#${val.icon_color}` }}
                >
                  {val.icon_name}
                </span>
                <span styleName="activity-descripition">{val.description}</span>
              </div>
              ))}
            </div>
          </ActivitySheet>
        )}
      </div>
    );
  }
}

export default CSSModules(ShopDetailHeader,styles,{allowMultiple:true});