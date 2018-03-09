import React,{Component} from 'react';
import {connect} from 'react-redux'
import Header from '../../components/Header'
import LoactionSearch from '../../components/LocationSearch'
import SetLocation from '../../components/SetLocation'
import {setLongitudeAndLatitude,
  getLocationInfo,
  setCurrentAddress,
  getLocationList,
  clearLocationList,
  setLocationInfo
} from '../../actions/location'

 class Loaction extends Component{
    constructor(){
        super()
        this.getLocation = this.getLocation.bind(this)
        this.showPosition = this.showPosition.bind(this)
        this.errPosition = this.errPosition.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
      }

    async componentDidMount(){
        const {longitude,latitude} = this.props.location   
        if(!longitude && !latitude){
          this.getLocation()
        }
      }

      getLocation(callback){
        this.callback = callback
        if (navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.showPosition,this.errPosition);
        }
      }
      
      changeAddress(address,longitude,latitude){
        const { dispatch } = this.props;
        dispatch(setLongitudeAndLatitude(longitude,latitude))
        dispatch(setCurrentAddress(address))
        this.backHome()
      }

      handleClick(address,longitude,latitude){
        const { dispatch } = this.props;
        dispatch(setLongitudeAndLatitude(longitude,latitude))
        dispatch(setCurrentAddress(address))
        dispatch(clearLocationList())
        dispatch(setLocationInfo(address,longitude,latitude))
        this.backHome()
      }

      backHome(){
        const history = this.props.history
        history.push('/')
      }

      async showPosition(position){
        const { dispatch } = this.props;
        const {longitude,latitude} = position.coords
        dispatch(await getLocationInfo(longitude,latitude))
        this.callback&&this.callback()
      }

      async errPosition(){
        const { dispatch } = this.props;
        const {longitude,latitude} = {longitude:728,latitude:820}
        console.log("iOS,OSX在https协议下支持getCurrentPosition, 在err中给了一个固定的值")
        dispatch(await getLocationInfo(longitude,latitude))
        this.callback&&this.callback()
      }

      async handleEnter(keyword){
        const {longitude,latitude,dispatch} = this.props
        if(keyword.length === 0){
          dispatch(clearLocationList())
        }else{
          dispatch(await getLocationList(longitude,latitude,keyword))
        }
        
      }

    render(){
        const name = this.props.location.name||"正在定位..."
        const {locationList} = this.props
        const {longitude,latitude} = this.props.location
        return(
            // 行内样式是为了让div充满整个body
            <div style={{height:'100%', width:"100%",position:'absolute', backgroundColor:"#f4f4f4"}}>
                <Header title={"选择收货地址"}/>
                <LoactionSearch 
                  locationList={locationList} 
                  onClick={this.handleClick} 
                  onEnter={this.handleEnter}/>
                <SetLocation currentAddress={{name:name,longitude:longitude,latitude:latitude}}  
                    changeAddress={this.changeAddress} 
                    onClick={this.getLocation}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {longitude,latitude,location,locationList} = state.location
    return {
        longitude,
        latitude,
        location,
        locationList
    }
}
export default connect(mapStateToProps)(Loaction)