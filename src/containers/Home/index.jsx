import React, { Component } from 'react'
import {connect} from 'react-redux'
import FirstPageHeader from '../../components/FirstPageHeader'
import Swiper from '../../components/Swiper'
import Activity from '../../components/Activity'
import ShopList from '../../components/ShopList'
import Footer from '../../components/Footer'
import ShopListTitle from '../../components/ShopListTitle'
import {FoodentryTombstone} from '../../components/Tombstone'
import {getEntries,getRestaurants} from '../../actions/home'
import {setLongitudeAndLatitude,getLocationInfo,setCurrentAddress} from '../../actions/location'
import newUser from '../../static/image/red_envelope.png'


class Home extends Component {
  constructor(){
    super()
    this.getLocation = this.getLocation.bind(this)
    this.showPosition = this.showPosition.bind(this)
    this.errPosition = this.errPosition.bind(this)
  }
  async componentDidMount(){
    const {longitude,latitude} = this.props
    if(longitude === 0 && latitude===0){
      this.getLocation()
    }
  }
  getLocation(){
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.showPosition,this.errPosition);
    }
  }
  async getShopList(){
    const { dispatch,offset,longitude,latitude } = this.props;
    if(longitude&&latitude){
      dispatch(await getRestaurants(longitude,latitude,offset,8,"home"))
    }
    
  }
  async showPosition(position){
    const { dispatch } = this.props;
    const {longitude,latitude} = position.coords
    dispatch(setLongitudeAndLatitude(longitude,latitude))
    dispatch(await getLocationInfo(longitude,latitude))
    dispatch(await getEntries(longitude,latitude))
    console.log("name::::",this.props.name)
    const name = this.props.name
    dispatch(setCurrentAddress(name))
    this.getShopList()
  }
  async errPosition(){
    const { dispatch } = this.props;
    const {longitude,latitude} = {longitude:728,latitude:820}
    console.log("iOS,OSX在https协议下支持getCurrentPosition, 在err中给了一个固定的值")
    dispatch(setLongitudeAndLatitude(longitude,latitude))
    dispatch(await getLocationInfo(longitude,latitude))
    dispatch(await getEntries(longitude,latitude))
    console.log("name::::",this.props.name)
    const name = this.props.name
    dispatch(setCurrentAddress(name))
    this.getShopList()
  }
  render() {
    const {currentAddress,restaurants,hasMore,foodentry,activity} = this.props
    return (
      <div className="App">
      <FirstPageHeader address={currentAddress} />
        {foodentry.length>0
          ?<div>
            <Swiper foodentry={foodentry}/>
            <img style={{width:'100%', height:'100%'}} src={newUser} alt="新用户"/>
          </div>
          :<FoodentryTombstone/>}
        {activity.length > 0
        ? <Activity data={activity[0]}/>
        : ""}
        {restaurants?
          <div>
            <ShopListTitle/>
            {restaurants.length>0
            ?<ShopList loadNext={this.getShopList.bind(this)} hasMore={hasMore} data={restaurants}/>
            :"暂无数据"
            }           
          </div>:""} 
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  const {offset,hasMore,restaurants,foodentry,activity} = state.home
  const {longitude,latitude,name,currentAddress} = state.location
  return {
    longitude,
    latitude,
    name,
    currentAddress,
    offset,
    hasMore,
    restaurants,
    foodentry,
    activity
  }
}

export default connect(mapStateToProps)(Home)