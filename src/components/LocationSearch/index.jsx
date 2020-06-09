import React, { Component } from "react";

import SearchComponent from "../SearchComponent";
import "./style.scss";

class LocationSearch extends Component {
  handleClick(name, latitude, longitude, address,geohash) {
    const onClick = this.props.onClick;
    onClick && onClick(name, latitude, longitude,address,geohash);
  }
  render() {
    const locationList = this.props.locationList;
    return (
      <div className="location-search">
        <div className="search-comp">
          <SearchComponent
            onEnter={this.props.onEnter}
            placeholder={"请输入地址"}
          />
        </div>
        <div className="location-list">
          {locationList.map((val, index) => (
            <div
              onClick={this.handleClick.bind(
                this,
                val.name,
                val.latitude,
                val.longitude,
                val.address,
                val.geohash
              )}
              className="location-item"
              key={index}
            >
              <div className="location-name">{val.name}</div>
              <div className="location-address">{val.address}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LocationSearch;