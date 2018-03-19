import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ShopDetailTombstone} from '../../components/Tombstone'

class ShopDetail extends Component{
    
    render(){
        return(
            <div>
                <ShopDetailTombstone/>
            </div>)
    }
}

const mapStateToProps = (state) => {
    const {longitude,latitude} = state.location
    return {
        longitude,
        latitude,
    }
}

export default connect(mapStateToProps)(ShopDetail)