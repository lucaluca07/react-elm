import React from 'react' ;
import ShopItem from '../ShopItem'
import InfiniteScroll from '../ScrollList'
import './style.scss'
import load from '../../static/image/loadding.gif'

class ShopList extends React.Component {
    render(){
        const spinLoader = <div style={{textAlign: 'center', fontSize: 12, lineHeight: 1.5, paddingTop: 5, paddingBottom: 5, clear: 'both'}}><img src={load} style={{height:10,width:10}} alt=""/>正在加载...</div>
        const {loadNext,data} = this.props
        return (
            <InfiniteScroll loadNext={loadNext} threshold={50} hasMore={true} spinLoader={spinLoader}>
                {data&&data.map((val,index)=>(<ShopItem key={index}/>))}
            </InfiniteScroll>
        )
    }
} 
export default ShopList ;