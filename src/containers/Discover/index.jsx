import React, { Component } from "react";
import DevelopmengPending from "../../components/DevelopmentPending";
import Header from "../../components/Header";

export default class Discover extends Component {
  render() {
    return (
      <div>
        <Header title="发现" />
        <DevelopmengPending />
      </div>
    );
  }
}
