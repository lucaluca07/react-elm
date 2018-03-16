import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getFilterBar} from '../../actions/home'
import {setMainCategory, setCategoryId, getCategory} from '../../actions/category'
import SearchHeader from '../../components/SearchHeader'
import ResultFilterBar from '../../components/ResultFilterBar'

class SearchResult extends Component{
    constructor(props){
        super(props)
        this.state = {
            order:0,
            delivery:"",
            activity:"",
            support_ids:[],
            category_ids:"",
            cost:"",
        }
        this.splitSearch = this.splitSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setMainMenuId = this.setMainMenuId.bind(this)
        this.setSubMenuId = this.setSubMenuId.bind(this)
        this.handleSetFilterMore = this.handleSetFilterMore.bind(this)   
    }

    async componentDidMount(){
        const {dispatch,longitude,latitude,filterMore,category} = this.props
        !filterMore&&dispatch(await getFilterBar(longitude,latitude))
        !category&&dispatch(await getCategory(longitude,latitude,0))
        category&&this.setMainMenuId(category[0].id)
    }

    handleChange(keyword){
        this.props.history.push(`/search?keyword=${keyword}`)
    }

    handleSetFilterMore(delivery,activity,support_ids,cost){
        // const {dispatch} = this.props
        // dispatch(clearRestaurants())
        this.setState({delivery:delivery,
            activity:activity,
            support_ids:support_ids,
            cost:cost
        },() =>{this.getShopList()}) 
    }

    async getShopList(){
        //latitude, longitude, offset, limit, filter,order,vip,delivery,activity,support_ids,category_ids
        // const {order,vip,delivery,activity,support_ids,category_ids,cost} = this.state
        console.log("ids")
        // const { dispatch,offset,longitude,latitude } = this.props;
        // dispatch(await getRestaurants(longitude,latitude,offset,8,"",order,vip,delivery,activity,support_ids,category_ids,cost))
    }

    setMainMenuId(id){
        const {dispatch} = this.props
        dispatch(setMainCategory(id))
    }
    setSubMenuId(id,category){
        const {dispatch} = this.props
        dispatch(setCategoryId(id))
        // dispatch(clearRestaurants())
        this.setState({category_ids:[id]},() =>{this.getShopList()})
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

    render(){
        const keyword = this.splitSearch("keyword")
        const {longitude,latitude,filterMore,categoryId,category,mainCategoryId} = this.props
        console.log(longitude,latitude)
        const {delivery,activity,support_ids,cost} = this.state
        return(
            <div>
                <SearchHeader 
                    onChange={this.handleChange}  
                    value={keyword}/>
                <ResultFilterBar
                    onClick={this.handleSetState} 
                    filterMore={filterMore}
                    setFilterMore={this.handleSetFilterMore}
                    delivery={delivery}
                    activity={activity}
                    support_ids={support_ids}
                    cost={cost}
                    category={category}
                    setMainMenuId={this.setMainMenuId}
                    setSubMenuId={this.setSubMenuId}
                    mainCategoryId={mainCategoryId}
                    subCategoryId={categoryId}
                />         
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const {longitude,latitude} = state.location
    const {categoryId,category,mainCategoryId} = state.category
    return {
        longitude,
        latitude,
        categoryId,
        category,
        mainCategoryId
    }
}
export default connect(mapStateToProps)(SearchResult)