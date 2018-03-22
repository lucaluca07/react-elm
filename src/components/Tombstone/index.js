import React from "react";
import "./style.scss";

export const FoodentryTombstone = () => (
  <div className="foodentry-tombstone">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(val => (
      <div key={val} className="foodentry-item">
        <div className="stone-container" />
        <div className="stone-title" />
      </div>
    ))}
  </div>
);

export const ShopTombstone = () => (
  <div className="shop-item-stone">
    <div className="img-stone" />
    <div className="info-stone">
      <div className="item-stone-top">
        <div className="top-left" />
        <div className="top-right" />
      </div>
      <div className="item-stone-center">
        <div className="center-left" />
        <div className="center-right" />
      </div>
      <div className="item-stone-bottom">
        <div className="bottom-left" />
        <div className="bottom-right" />
      </div>
    </div>
  </div>
);

export class ShopDetailTombstone extends React.Component {
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
      <div className="shop-detail-tombstone">
        <div className="shop-header">
          <div className="shop-header-top" />
          <div className="shop-header-center">
            <div className="shop-img" />
            <div />
            <div />
            <div />
          </div>
          <div className="shop-header-bottom">
            <div />
          </div>
        </div>
        <ul className="shop-tab">
          <li />
          <li />
          <li />
        </ul>
        <div className="menu-view">
          <ul className="main-menu">
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
          <div className="sub-menu">
            <div className="sub-list">
              <div className="sub-item">
                <div className="food-img" />
                <div className="food-info">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="sub-item">
                <div className="food-img" />
                <div className="food-info">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="sub-item">
                <div className="food-img" />
                <div className="food-info">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="sub-item">
                <div className="food-img" />
                <div className="food-info">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart" />
      </div>
    );
  }
}
