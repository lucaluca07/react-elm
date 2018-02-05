import React from 'react' ;
import ShopItem from '../ShopItem'

const ShopList = () => (
    <div>
        {[1,2,3,4].map((val)=>(<ShopItem key={val}/>))}
    </div>
)
export default ShopList ;