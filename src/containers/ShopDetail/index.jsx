import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {ShopDetailTombstone} from '../../components/Tombstone'
import ShopDetailHeader from '../../components/ShopDetailHeader'
import ShopDetailTab from '../../components/ShopDetailTab'
import ShopMenu from '../../components/ShopMenu'
import {getMenu, getShopInfo, getRating, clearRating} from '../../actions/shopDetail'

class ShopDetail extends Component{
    constructor(){
        super()
        this.getRatings = this.getRatings.bind(this)
    }
    async componentDidMount(){
        const {dispatch, longitude, latitude} = this.props
        const shopId = this.props.match.params.id
        dispatch(clearRating())
        dispatch(await getMenu(shopId,longitude,latitude))
        dispatch(await getShopInfo(shopId,longitude,latitude))
        this.getRatings()
    }
    async getRatings(){
        const {dispatch, longitude, latitude,offset} = this.props
        const shopId = this.props.match.params.id
        dispatch(await getRating(shopId,offset,8,longitude, latitude))
    }
    render(){
        const {menu} = this.props
        return(
            <div style={{display:"flex",flexDirection: "column"}}>
                <ShopDetailHeader/>
                <ShopDetailTab/>
                {menu&&<ShopMenu data={menu}/>}
            </div>)
    }
}

const mapStateToProps = (state) => {
    const {longitude,latitude} = state.location
    const {shopinfo,menu,rating} = state.shopDetail
    const {data,hasMore,offset} = rating
    return {
        longitude,
        latitude,
        shopinfo,
        menu,
        data,
        hasMore,
        offset
    }
}

export default connect(mapStateToProps)(ShopDetail)