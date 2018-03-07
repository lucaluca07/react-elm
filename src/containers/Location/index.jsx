import React,{Component} from 'react';
import {connect} from 'react-redux'
import Header from '../../components/Header'
import LoactionSearch from '../../components/LocationSearch'
import SetLocation from '../../components/SetLocation'
import {setLongitudeAndLatitude,getLocationInfo,setCurrentAddress} from '../../actions/location'

 class Loaction extends Component{
    constructor(){
        super()
        this.getLocation = this.getLocation.bind(this)
        this.showPosition = this.showPosition.bind(this)
        this.errPosition = this.errPosition.bind(this)
        this.changeAddress = this.changeAddress.bind(this)
      }
    async componentDidMount(){
        const {longitude,latitude} = this.props.location
        
        if(!longitude && !latitude){
          this.getLocation()
        }
      }

      getLocation(){
        if (navigator.geolocation){
          navigator.geolocation.getCurrentPosition(this.showPosition,this.errPosition);
        }
      }
      
      changeAddress(address,longitude,latitude){
        const { dispatch } = this.props;
        dispatch(setLongitudeAndLatitude(longitude,latitude))
        dispatch(setCurrentAddress(address))
      }

      async showPosition(position){
        const { dispatch } = this.props;
        const {longitude,latitude} = position.coords
        dispatch(await getLocationInfo(longitude,latitude))
      }
      async errPosition(){
        const { dispatch } = this.props;
        const {longitude,latitude} = {longitude:728,latitude:820}
        console.log("iOS,OSX在https协议下支持getCurrentPosition, 在err中给了一个固定的值")
        dispatch(await getLocationInfo(longitude,latitude))
      }
    render(){
        const name = this.props.location.name||"正在定位..."
        const {longitude,latitude} = this.props.location
        console.log(name)
        return(
            // 行内样式是为了让div充满整个body
            <div style={{height:'100%', width:"100%",position:'absolute', backgroundColor:"#f4f4f4"}}>
                <Header title={"选择收货地址"}/>
                <LoactionSearch/>
                <SetLocation currentAddress={{name:name,longitude:longitude,latitude:latitude}}  
                    changeAddress={this.changeAddress} 
                    onClick={this.getLocation}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {longitude,latitude,location} = state.location
    return {
        longitude,
        latitude,
        location
    }
}
export default connect(mapStateToProps)(Loaction)