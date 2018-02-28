import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FirstPageHeader from '../../components/FirstPageHeader'
import Swiper from '../../components/Swiper'
import ShopList from '../../components/ShopList'
import Footer from '../../components/Footer'
import EleH5HomeModel from '../../fetch'
import * as setLocationInfo from '../../actions/locationInfo'

class Home extends Component {
  constructor(){
    super()
    this.state = {location:"地址"}
    this.getLocation = this.getLocation.bind(this)
    this.showPosition = this.showPosition.bind(this)
  }
  componentDidMount(){
    EleH5HomeModel.getEntriesData().then(data => {console.log(data)})
    this.getLocation()
  }
  getLocation(){
    if (navigator.geolocation){
        this.setState({location:"正在获取位置"})
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
    else{
      this.setState({location:"无法获得定位"})
    }
  }
  showPosition(position){
    const {setLongitudeAndLatitude} = this.props.action
    setLongitudeAndLatitude(position.coords.longitude,position.coords.latitude)
    this.setState({location:`Latitude: ${position.coords.latitude}
    Longitude: ${position.coords.longitude}`})
  }
  render() {
    console.log('----------',this.props)
    return (
      <div className="App">
        <FirstPageHeader/>
        <Swiper/>
        <ShopList/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  locationInfo:state.locationInfo
})
const mapDispatchToProps = (dispatch) => ({
  action:bindActionCreators(setLocationInfo,dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
