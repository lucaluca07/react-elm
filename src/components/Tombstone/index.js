import React from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

export const FoodentryTombstone = CSSModules(() => (
  <div styleName="foodentry-tombstone">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(val => (
      <div key={val} styleName="foodentry-item">
        <div styleName="stone-container" />
        <div styleName="stone-title" />
      </div>
    ))}
  </div>
),styles);

export const ShopTombstone = CSSModules(() => (
  <div styleName="shop-item-stone">
    <div styleName="img-stone" />
    <div styleName="info-stone">
      <div styleName="item-stone-top">
        <div styleName="top-left" />
        <div styleName="top-right" />
      </div>
      <div styleName="item-stone-center">
        <div styleName="center-left" />
        <div styleName="center-right" />
      </div>
      <div styleName="item-stone-bottom">
        <div styleName="bottom-left" />
        <div styleName="bottom-right" />
      </div>
    </div>
  </div>
),styles);

class ShopDetail extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";
    document.getElementsByTagName("body")[0].style.height =
      window.innerHeight + "px";
  }
  componentWillMount() {
    document.body.style.overflow = "visible";
    document.body.style.position = "";
    document.getElementsByTagName("body")[0].style.height = "auto";
  }
  render() {
    return (
      <div styleName="shop-detail-tombstone">
        <div styleName="shop-header">
          <div styleName="shop-header-top" />
          <div styleName="shop-header-center">
            <div styleName="shop-img" />
            <div />
            <div />
            <div />
          </div>
          <div styleName="shop-header-bottom">
            <div />
          </div>
        </div>
        <ul styleName="shop-tab">
          <li />
          <li />
          <li />
        </ul>
        <div styleName="menu-view">
          <ul styleName="main-menu">
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
            <li>
              <div />
            </li>
          </ul>
          <div styleName="sub-menu">
            <div styleName="sub-list">
              <div styleName="sub-item">
                <div styleName="food-img" />
                <div styleName="food-info">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div styleName="sub-item">
                <div styleName="food-img" />
                <div styleName="food-info">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div styleName="sub-item">
                <div styleName="food-img" />
                <div styleName="food-info">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div styleName="sub-item">
                <div styleName="food-img" />
                <div styleName="food-info">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div styleName="cart" />
      </div>
    );
  }
}

export const ShopDetailTombstone = CSSModules(ShopDetail,styles);