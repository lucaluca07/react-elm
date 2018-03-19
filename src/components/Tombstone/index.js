import React from 'react'
import './style.scss'

export const FoodentryTombstone = () => (
    <div className="foodentry-tombstone">
        {[1,2,3,4,5,6,7,8,9,0].map(val =>(<div key={val} className="foodentry-item">
            <div className="stone-container"></div>
            <div className="stone-title"></div>
        </div>))}
    </div>
)

export const ShopTombstone = () => (
    <div className="shop-item-stone">
        <div className="img-stone"></div>
        <div className="info-stone">
            <div className="item-stone-top">
                <div className="top-left"></div>
                <div className="top-right"></div>
            </div>
            <div className="item-stone-center">
                <div className="center-left"></div>
                <div className="center-right"></div></div>
            <div className="item-stone-bottom">
                <div className="bottom-left"></div>
                <div className="bottom-right"></div>
            </div>
        </div>
    </div>
)

export const ShopDetailTombstone = () => (
    <div className="shop-detail-tombstone">
        <div className="shop-header">
            <div className="shop-header-top"></div>
            <div className="shop-header-center">
                <div className="shop-img"></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="shop-header-bottom">
                <div></div>
            </div>
        </div>
        <ul className="shop-tab">
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div className="menu-view">
            <ul className="main-menu">
                <li>
                    <div></div>
                </li>
                <li>
                    <div></div>
                </li>
                <li>
                    <div></div>
                </li>
                <li>
                    <div></div>
                </li>
                <li>
                    <div></div>
                </li>
                <li>
                    <div></div>
                </li>
                <li>
                    <div></div>
                </li>
                <li>
                    <div></div>
                </li>
            </ul>
            <div className="sub-menu">
            <div className="sub-list">
            <div className="sub-item">
                    <div className="food-img"></div>
                    <div className="food-info">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="sub-item">
                    <div className="food-img"></div>
                    <div className="food-info">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="sub-item">
                    <div className="food-img"></div>
                    <div className="food-info">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="sub-item">
                    <div className="food-img"></div>
                    <div className="food-info">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <div className="cart"></div>
    </div>
)
