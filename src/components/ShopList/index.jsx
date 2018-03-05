import React from 'react' ;
import ShopItem from '../ShopItem'
import InfiniteScroll from '../ScrollList'
import './style.scss'
import load from '../../static/image/loadding.gif'

class ShopList extends React.Component {
    render(){
        const spinLoader = <div style={{textAlign: 'center', fontSize: 12, lineHeight: 1.5, paddingTop: 10, paddingBottom: 5, clear: 'both'}}><img src={load} style={{height:10,width:10}} alt=""/>正在加载...</div>
        const {loadNext,data,hasMore} = this.props
        return (
            <InfiniteScroll loadNext={loadNext} threshold={50} hasMore={hasMore} spinLoader={spinLoader}>
                {data&&data.map((val,index)=>(<ShopItem shopData={val} key={index}/>))}
            </InfiniteScroll>
        )
    }
} 
export default ShopList ;