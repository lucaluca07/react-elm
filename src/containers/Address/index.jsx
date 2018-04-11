import React, { Component } from "react";
import DevelopmengPending from "../../components/DevelopmentPending";
import Header from "../../components/Header";

export default class Address extends Component {
  render() {
    return (
      <div>
        <Header title="收货地址" />
        <DevelopmengPending />
      </div>
    );
  }
}
