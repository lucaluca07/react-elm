import React, { Component } from 'react'
import {connect} from 'react-redux'
import FirstPageHeader from '../../components/FirstPageHeader'
import Swiper from '../../components/Swiper'
import ShopList from '../../components/ShopList'
import Footer from '../../components/Footer'
import HomeModel from '../../fetch'
import {setLongitudeAndLatitude,getLocationInfo,getEntries,getRestaurants} from '../../actions/home'

class Home extends Component {
  constructor(){
    super()
    this.state = {location:"正在定位"}
    this.getLocation = this.getLocation.bind(this)
    this.showPosition = this.showPosition.bind(this)
  }
  async componentDidMount(){
    const {longitude,latitude} = this.props
    const data = await HomeModel.getEntriesData()
    console.log(data)
    if(longitude === 0 && latitude===0){
      this.getLocation()
    }
  }
  getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  }
  async getShopList(){
    const { dispatch,offset,longitude,latitude } = this.props;
    dispatch(await getRestaurants(longitude,latitude,offset,8,"home"))
  }
  async showPosition(position){
    const { dispatch } = this.props;
    const {longitude,latitude} = position.coords
    dispatch(setLongitudeAndLatitude(longitude,latitude))
    dispatch(await getLocationInfo(longitude,latitude))
    dispatch(await getEntries(longitude,latitude))
  }
  render() {
    const {name,restaurants} = this.props
    console.log(name)
    return (
      <div className="App">
        <FirstPageHeader address={name}/>
        <Swiper/>
        <ShopList loadNext={this.getShopList.bind(this)} data={restaurants}/>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  const {longitude,latitude,name,offset,hasMore,restaurants} = state.home
  return {
    longitude,
    latitude,
    name,
    offset,
    hasMore,
    restaurants
  }
}

export default connect(mapStateToProps)(Home)
