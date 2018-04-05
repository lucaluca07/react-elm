import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import SearchComponent from "../SearchComponent";
import styles from "./style.scss";

class LocationSearch extends Component {
  handleClick(address, latitude, longitude) {
    const onClick = this.props.onClick;
    onClick && onClick(address, latitude, longitude);
  }
  render() {
    const locationList = this.props.locationList;
    return (
      <div styleName="location-search">
        <div styleName="search-comp">
          <SearchComponent
            onEnter={this.props.onEnter}
            placeholder={"请输入地址"}
          />
        </div>
        <div styleName="location-list">
          {locationList.map((val, index) => (
            <div
              onClick={this.handleClick.bind(
                this,
                val.name,
                val.latitude,
                val.longitude
              )}
              styleName="location-item"
              key={index}
            >
              <div styleName="location-name">{val.name}</div>
              <div styleName="location-address">{val.address}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CSSModules(LocationSearch,styles);