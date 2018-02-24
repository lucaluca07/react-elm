import React from 'react' ;
import ShopItem from '../ShopItem'
import InfiniteScroll from '../ScrollList'
import './style.scss'

class ShopList extends React.Component {
    constructor(){
        super()
        this.state = {data:[1,2,3,4,5,6,7,8,9,0,11,12,1,23,4,55,2,32,1,1,1,1,1,1,1,1,1,1,1,1]}
        this.loadNext = this.loadNext.bind(this)
    }
    loadNext(){
        let data = this.state.data.concat([1,2,3,4,5,6])
        console.log(data)
        setTimeout(()=>{this.setState({data})},1000)
        
    }
    render(){
        return (
            <InfiniteScroll loadNext={this.loadNext} threshold={50} hasMore={true}>
                {this.state.data.map((val,index)=>(<ShopItem key={index}/>))}
            </InfiniteScroll>
        )
    }
} 
export default ShopList ;