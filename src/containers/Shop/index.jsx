import React,{Component} from 'react'
import {connect} from 'react-redux'
import {getRestaurants,clearRestaurants,getSiftFactors,getFilterBar} from '../../actions/home'
import Header from '../../components/Header'
import Categories from '../../components/Categories'
import FilterBar from '../../components/FilterBar'
import ShopList from '../../components/ShopList'

class Shop extends Component{
    constructor(){
        super()
        this.state = {
            order:0,
            vip:1,
            delivery:"",
            activity:"",
            support_ids:[],
            category_ids:"",
            cost:"" 
        }
        this.handleSetState = this.handleSetState.bind(this)
        this.handleSetFilterMore = this.handleSetFilterMore.bind(this)
    }

    async componentDidMount(){
      const {dispatch,longitude,latitude,filterMore} = this.props
      const entry_id = this.splitSearch('entry_id')
      dispatch(clearRestaurants())
      dispatch(await getSiftFactors(longitude,latitude,entry_id))
      if(!filterMore){
        dispatch(await getFilterBar(longitude,latitude))
      }
      const siftFactors = this.props.siftFactors
      const restaurant_category_ids = siftFactors[0].restaurant_category_ids
      this.setState({category_ids:restaurant_category_ids},() => {this.getShopList()})  
    }

    handleSetState(state,value){
        const {dispatch} = this.props
        dispatch(clearRestaurants())
        this.setState({[state]:value},() =>{this.getShopList()})    
    }
    handleSetFilterMore(delivery,activity,support_ids,cost){
        const {dispatch} = this.props
        dispatch(clearRestaurants())
        this.setState({delivery:delivery,
            activity:activity,
            support_ids:support_ids,
            cost:cost
        },() =>{this.getShopList()})
    }

    splitSearch(key){
        const search = this.props.location.search.slice(1)
        const obj = {}
        search.split('&').forEach(element => {
            const arr = element.split('=')
            obj[arr[0]] = decodeURI(arr[1])
        });
        return obj[key]
    }
    async getShopList(){
        //latitude, longitude, offset, limit, filter,order,vip,delivery,activity,support_ids,category_ids
        const {order,vip,delivery,activity,support_ids,category_ids,cost} = this.state
        const { dispatch,offset,longitude,latitude } = this.props;
        dispatch(await getRestaurants(longitude,latitude,offset,8,"",order,vip,delivery,activity,support_ids,category_ids,cost))
      }

    render(){
        const targetName = this.splitSearch('target_name')
        const {longitude,latitude,restaurants,hasMore,filterMore,siftFactors} = this.props
        console.log(longitude,latitude)
        const {delivery,activity,support_ids, cost} = this.state
        return(
        <div>
            <div style={{position: "sticky", top: 0, zIndex: 1000}}>
                <div style={{top: 0, zIndex: 1000}}>
                    <Header title={targetName}/>
                    <Categories categories={siftFactors}/>
                    <FilterBar 
                        onClick={this.handleSetState} 
                        filterMore={filterMore}
                        setFilterMore={this.handleSetFilterMore}
                        delivery={delivery}
                        activity={activity}
                        support_ids={support_ids}
                        cost={cost}
                    />
                </div>
            </div>
            
            {restaurants.length>0
                ?<ShopList 
                    loadNext={this.getShopList.bind(this)} 
                    hasMore={hasMore} 
                    data={restaurants}/>
                :"Loadding"
                } 
        </div>)
    }
}

const mapStateToProps = (state) => {
    const {longitude,latitude} = state.location
    const {restaurants,offset,siftFactors,hasMore,filterMore} = state.home
    return {
        longitude,
        latitude,
        offset,
        restaurants,
        siftFactors,
        hasMore,
        filterMore
    }
}

export default connect(mapStateToProps)(Shop)