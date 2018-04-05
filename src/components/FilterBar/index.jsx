import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import FilterNav from "../FilterNav";
import style from "./style.scss";

class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFliter: false,
      orderText: "综合排序",
      order: 0,
      vip: false
    };
    this.handleOrderByDistance = this.handleOrderByDistance.bind(this);
    this.handleToggleVip = this.handleToggleVip.bind(this);
    this.handleSetFilterMore = this.handleSetFilterMore.bind(this);
    this.handleHiddenFilter = this.handleHiddenFilter.bind(this);
  }
  handleHiddenFilter() {
    this.setState({ showFliter: false });
    document.body.style.overflow = "visible";
    document.body.style.position = "";
    document.getElementsByTagName("body")[0].style.height = "auto";
  }
  handleCilck(show) {
    const showFliter = this.state.showFliter;
    if (!!showFliter && showFliter === show) {
      this.handleHiddenFilter();
    } else {
      this.setState({ showFliter: show });
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
      document.getElementsByTagName("body")[0].style.height =
        window.innerHeight + "px";
    }
  }
  handleSortClick(index) {
    const orderArr = ["综合排序", "销量最高", "起送价最低", "配送最快"];
    const order = this.state.order;
    this.handleHiddenFilter();
    if (order === index) return;
    this.setState({ orderText: orderArr[index], order: index });
    this.props.onClick("order", index);
  }
  handleOrderByDistance() {
    const order = this.state.order;
    if (order === 4) return;
    this.setState({ order: 4 });
    this.handleHiddenFilter();
    this.props.onClick("order", 4);
  }
  handleToggleVip() {
    const { vip } = this.state;
    this.setState({ vip: !vip });
    this.handleHiddenFilter();
    const vipValue = vip ? 1 : 0;
    this.props.onClick("vip", vipValue);
  }
  handleSetFilterMore(delivery, activity, support_ids, cost) {
    this.handleHiddenFilter();
    this.props.setFilterMore(delivery, activity, support_ids, cost);
  }

  render() {
    const { showFliter, orderText, order, vip } = this.state;
    const orderArr = ["综合排序", "销量最高", "起送价最低", "配送最快"];
    const { delivery, activity, support_ids, cost } = this.props;
    const fliterMore = this.props.filterMore;
    return (
      <div styleName="filter-bar">
        <ul styleName="filter">
          <li
            style={{
              fontWeight:
                order <= 3 || showFliter === "sort" ? "bold" : "normal",
              color: showFliter === "sort" ? "#3190e8" : "#333"
            }}
            onClick={this.handleCilck.bind(this, "sort")}
          >
            <span>{order === 4 ? "综合排序" : orderText}</span>
            <i className="iconfont icon-sanjiao1" />
          </li>
          <li
            style={{ fontWeight: order === 4 ? "bold" : "normal" }}
            onClick={this.handleOrderByDistance}
          >
            距离最近
          </li>
          <li
            style={{ fontWeight: vip ? "bold" : "normal" }}
            onClick={this.handleToggleVip}
          >
            <i className="iconfont icon-huangguan" />
            <span>会员领红包</span>
          </li>
          <li
            style={{
              color: showFliter === "filter" ? "#3190e8" : "#333",
              fontWeight: showFliter === "filter" ? "bold" : "normal"
            }}
            onClick={this.handleCilck.bind(this, "filter")}
          >
            <span>筛选</span>
            <i className="iconfont icon-shaixuan" />
          </li>
        </ul>
        {!!showFliter && (
          <div styleName="filter-extend">
            {showFliter === "sort" ? (
              <ul styleName="sort-list">
                {orderArr.map((val, index) => (
                  <li
                    key={index}
                    style={{
                      color: index === order ? "#3190e8" : "#333",
                      fontWeight: index === order ? "bold" : "normal"
                    }}
                    onClick={this.handleSortClick.bind(this, index)}
                  >
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <FilterNav
                fliterMore={fliterMore}
                setFilterMore={this.handleSetFilterMore}
                delivery={delivery}
                activity={activity}
                support_ids={support_ids}
                cost={cost}
              />
            )}
            <div styleName="shade" onClick={this.handleHiddenFilter} />
          </div>
        )}
      </div>
    );
  }
}

export default CSSModules(FilterBar,style);