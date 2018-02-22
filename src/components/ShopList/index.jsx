import React from 'react' ;
import ShopItem from '../ShopItem'
import './style.scss'

const ShopList = () => (
    <div>
        {[1,2,3,4,5,6,7,8,9,0,11,12,1,23,4,55,2,32,1,1,1,1,1,1,1,1,1,1,1,1].map((val)=>(<ShopItem key={val}/>))}
    </div>
)
export default ShopList ;