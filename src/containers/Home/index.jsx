import React, { Component } from 'react'
import {connect} from 'react-redux'
import FirstPageHeader from '../../components/FirstPageHeader'
import Swiper from '../../components/Swiper'
import ShopList from '../../components/ShopList'
import Footer from '../../components/Footer'
import HomeModel from '../../fetch'
import {setLongitudeAndLatitude} from '../../actions/locationInfo'

class Home extends Component {
  constructor(){
    super()
    this.state = {location:"地址"}
    this.getLocation = this.getLocation.bind(this)
    this.showPosition = this.showPosition.bind(this)
  }
  componentDidMount(){
    HomeModel.getEntriesData().then(data => {console.log(data)})
    const {longitude,latitude} = this.props.locationInfo
    if(longitude === 0 && latitude===0){
      this.getLocation()
    }  
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
    const { dispatch } = this.props;
    const {longitude,latitude} = position.coords
    dispatch(setLongitudeAndLatitude(longitude,latitude))
    
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
  locationInfo:state.locationInfo,
})

export default connect(mapStateToProps)(Home)
