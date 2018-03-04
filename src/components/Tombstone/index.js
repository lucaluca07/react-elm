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
