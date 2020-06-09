import React from "react";
import "./style.scss";
import classNames from "classnames";
import Toast from "../../components/Toast"
import {withRouter} from "react-router-dom"

class AddAddresses extends React.Component {
  constructor(props) {
    super(props)
    const {
      name,
      sex,
      phone,
      address,
      address_detail,
      tag_type,
      geohash
    } = this.props.data || {}
    this.state = {
      name: name || "",
      sex: sex || 0,
      phone: phone || "",
      address: address || "",
      address_detail: address_detail || "",
      tag_type: tag_type || "",
      geohash: geohash || ""
    }
    this.handleChangeName = this
      .handleChangeName
      .bind(this)
    this.handleChangeTel = this
      .handleChangeTel
      .bind(this)
    this.handleChangeAddress = this
      .handleChangeAddress
      .bind(this)
    this.locationClick = this
      .locationClick
      .bind(this)
    this.hangleSubmit = this
      .hangleSubmit
      .bind(this)
  }
  handleChangeName(e) {
    const name = e.target.value;
    this.setState({name})
  }
  handleChangeSex(index) {
    this.setState({sex: index})
  }
  handleChangeTel(e) {
    const phone = e.target.value;
    this.setState({phone})
  }
  handleChangeAddress(e) {
    const address_detail = e.target.value;
    this.setState({address_detail})
  }
  handleChangeTag(index) {
    this.setState({tag_type: index})
  }
  locationClick() {
    const history = this.props.history;
    history.push("/my/address/search")
  }
  hangleSubmit() {
    const onClick = this.props.addBtn
    const {
      name,
      phone,
      address,
      address_detail
    } = this.state
    if(!name){
      Toast.info("姓名不能为空")
      return
    }else if(!phone){
      Toast.info("手机号不能为空")
      return
    }else if(!address){
      Toast.info("地址不能为空")
      return
    }else if(!address_detail){
      Toast.info("详细地址不能为空")
      return
    }
    onClick && onClick(this.state)
  }
  render() {
    const {
      name,
      sex,
      phone,
      address,
      address_detail,
      tag_type
    } = this.state
    return (
      <div className="content">
        <div className="frombolack">
          <div className="label-warp">联系人</div>
          <div className="input-warp">
            <input
              type="text"
              value={name}
              onChange={this.handleChangeName}
              maxLength="20"
              placeholder="你的姓名"/>
            <div className="tag-warp">
              <span
                className={classNames("tag", {
                "activity": sex == 1
              })}
                onClick={this
                .handleChangeSex
                .bind(this, 1)}>先生</span>
              <span
                className={classNames("tag", {
                "activity": sex == 2
              })}
                onClick={this
                .handleChangeSex
                .bind(this, 2)}>女士</span>
            </div>
          </div>
        </div>
        <div className="frombolack">
          <div className="label-warp">电话</div>
          <div className="input-warp">
            <input
              maxLength="20"
              value={phone}
              onChange={this.handleChangeTel}
              type="tel"
              placeholder="你的手机号"/>
          </div>
        </div>
        <div className="frombolack">
          <div className="label-warp">位置</div>
          <div className="location" onClick={this.locationClick}>
            <input
              className="input-warp"
              type="text"
              readOnly="readonly"
              value={address}
              placeholder="小区/写字楼/学校等"/>
            <i className="iconfont icon-jinrujiantou"></i>
          </div>
        </div>
        <div className="frombolack">
          <div className="label-warp">详细地址</div>
          <div className="input-warp">
            <textarea
              maxLength="100"
              value={address_detail}
              onChange={this.handleChangeAddress}
              type="text"
              placeholder="详细地址（如门牌号等）"/>
          </div>
        </div>
        <div className="frombolack">
          <div className="label-warp">标签</div>
          <div className="tag-warp">
            <span
              className={classNames("tag", {
              "activity": tag_type == 1
            })}
              onClick={this
              .handleChangeTag
              .bind(this, 1)}>家</span>
            <span
              className={classNames("tag", {
              "activity": tag_type == 2
            })}
              onClick={this
              .handleChangeTag
              .bind(this, 2)}>学校</span>
            <span
              className={classNames("tag", {
              "activity": tag_type == 3
            })}
              onClick={this
              .handleChangeTag
              .bind(this, 3)}>公司</span>
          </div>
        </div>
        <button className="submit" onClick={this.hangleSubmit}>确定</button>
      </div>
    );
  }
}

export default withRouter(AddAddresses);
