import React,{Component} from 'react';
import {connect} from 'react-redux'
import Header from '../../components/Header'
import LoactionSearch from '../../components/LocationSearch'
import SetLocation from '../../components/SetLocation'
// import {setLongitudeAndLatitude,getLocationInfo} from '../../actions/location'

 class Loaction extends Component{

    render(){
        return(
            <div style={{height:'100%', width:"100%",position:'absolute', backgroundColor:"#f4f4f4"}}>
                <Header title={"选择收货地址"}/>
                <LoactionSearch/>
                <SetLocation currentLocation={"红星美凯龙"}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {longitude,latitude,name} = state.location
  return {
    longitude,
    latitude,
    name
  }
}
export default connect(mapStateToProps)(Loaction)