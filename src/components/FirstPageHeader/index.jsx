import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import CSSModules from "react-css-modules";
import throttle from "../../util/throttle";
import styles from "./style.scss";

class FirstPageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchFixed: false };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    //节流
    this.scroll = throttle(this.handleScroll, 16);
    window.addEventListener("scroll", this.scroll, false);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scroll, false);
  }
  handleScroll() {
    const node = ReactDOM.findDOMNode(this.address);
    const { bottom } = node.getBoundingClientRect();
    if (bottom <= 0) {
      this.setState({ searchFixed: true });
    } else {
      this.setState({ searchFixed: false });
    }
  }

  render() {
    const searchFixed = this.state.searchFixed;
    const address = this.props.address;
    return (
      <div styleName="first-page-header">
        <Link to={"/location"}>
          <div
            styleName="header-address"
            ref={(node) => {
              this.address = node;
            }}
          >
            <i className="iconfont icon-coordinates_fill coordinates" />
            <span styleName="address">{address ? address : "正在定位..."}</span>
          </div>
        </Link>
        {searchFixed ? <div styleName="header-search" /> : ""}
        <Link to={"/search"}>
          <div
            styleName={`header-search-input ${
              searchFixed ? "search-fixed" : ""
            }`}
          >
            <div styleName="search-left" />
            <div styleName="search-btn">
              <i className="iconfont icon-sousuoxiao" />
              <span>搜索商家、商品名称</span>
            </div>
            <div styleName="search-right" />
          </div>
        </Link>
      </div>
    );
  }
}

export default FirstPageHeader;
