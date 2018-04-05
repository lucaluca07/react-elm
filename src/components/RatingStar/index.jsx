import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import PropTypes from "prop-types";
import styles from "./sytle.scss";

class RatingStar extends Component {
  static propTypes = {
    rate: PropTypes.number,
    scale: PropTypes.number
  };

  static defaultProps = {
    rate: 5,
    scale: 1
  };

  render() {
    const { rate, scale } = this.props;
    return (
      <div
        styleName="rating-star"
        style={{ transform: `scale(${scale})`, width: 80 }}
      >
        <ul styleName="favor" style={{ width: 80 }}>
          <li>
            <i className="iconfont icon-favor" />
          </li>
          <li>
            <i className="iconfont icon-favor" />
          </li>
          <li>
            <i className="iconfont icon-favor" />
          </li>
          <li>
            <i className="iconfont icon-favor" />
          </li>
          <li>
            <i className="iconfont icon-favor" />
          </li>
        </ul>
        <ul styleName="favor-fill" style={{ width: 80 * rate / 5 }}>
          <li>
            <i className="iconfont icon-favorfill" />
          </li>
          <li>
            <i className="iconfont icon-favorfill" />
          </li>
          <li>
            <i className="iconfont icon-favorfill" />
          </li>
          <li>
            <i className="iconfont icon-favorfill" />
          </li>
          <li>
            <i className="iconfont icon-favorfill" />
          </li>
        </ul>
      </div>
    );
  }
}

export default CSSModules(RatingStar,styles);