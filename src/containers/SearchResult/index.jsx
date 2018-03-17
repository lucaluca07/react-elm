import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getFilterBar} from '../../actions/home'
import {setMainCategory, setCategoryId, getCategory} from '../../actions/category'
import {getSearchResult,clearSearchResult} from '../../actions/search'
import SearchHeader from '../../components/SearchHeader'
import ResultFilterBar from '../../components/ResultFilterBar'
import SearchResultList from '../../components/SearchResultList'
import Loadding from '../../components/Loadding';

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
        this.setOrderState = this.setOrderState.bind(this)
        this.handleSetFilterMore = this.handleSetFilterMore.bind(this)
        this.getSearchResult = this.getSearchResult.bind(this)
        
    }

    async componentDidMount(){
        const {dispatch,longitude,latitude,filterMore,category} = this.props
        !filterMore&&dispatch(await getFilterBar(longitude,latitude))
        !category&&dispatch(await getCategory(longitude,latitude,0))
        category&&this.setMainMenuId(category[0].id)
        dispatch(clearSearchResult())
        this.getSearchResult()
    }

    handleChange(keyword){
        this.props.history.push(`/search?keyword=${keyword}`)
    }

    handleSetFilterMore(delivery,activity,support_ids,cost){
        const {dispatch} = this.props
        dispatch(clearSearchResult())
        this.setState({delivery:delivery,
            activity:activity,
            support_ids:support_ids,
            cost:cost
        },() =>{this.getSearchResult()}) 
    }

    setMainMenuId(id){
        const {dispatch} = this.props
        dispatch(setMainCategory(id))
    }

    setSubMenuId(id,category){
        const {dispatch} = this.props
        dispatch(setCategoryId(id))
        dispatch(clearSearchResult())
        this.setState({category_ids:[id]},() =>{this.getSearchResult()})
    }

    setOrderState(id){
        const {dispatch} = this.props
        dispatch(clearSearchResult())
        this.setState({order:id},() => {this.getSearchResult()})
    }

    async getSearchResult(){
        //(keyword,offset,limit,latitude, longitude,order,category,delivery,activity,support
        const {order,delivery,activity,support_ids,category_ids,cost} = this.state
        const keyword = this.splitSearch("keyword")

        const { dispatch,offset,longitude,latitude } = this.props;
        dispatch(await getSearchResult(keyword,offset,8,longitude,latitude,order,category_ids,delivery,activity,support_ids,cost))
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
        const {filterMore,categoryId,category,mainCategoryId,restaurant_with_foods,hasMore} = this.props
        console.log("restaurant_with_foods",restaurant_with_foods)
        const {delivery,activity,support_ids,cost} = this.state
        return(
            <div>
                <div style={{position: "sticky", top: 0, zIndex: 100}}>
                <div style={{top: 0, zIndex: 100}}>
                    <SearchHeader 
                        onChange={this.handleChange}  
                        value={keyword}/>
                    <ResultFilterBar
                        onClick={this.setOrderState} 
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
            </div>
                {restaurant_with_foods?
                    restaurant_with_foods.length>0
                        ?<SearchResultList
                        loadNext={this.getSearchResult}
                        data={restaurant_with_foods}
                        hasMore={hasMore}/>
                        :"没有数据"
                    :<Loadding/>}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const {filterMore} = state.shop
    const {longitude,latitude} = state.location
    const {categoryId,category,mainCategoryId} = state.category
    const {data} = state.search
    const {restaurant_with_foods, offset, hasMore} = data
    console.log(1111111,data)
    return {
        longitude,
        latitude,
        categoryId,
        category,
        mainCategoryId,
        filterMore,
        restaurant_with_foods,
        offset,
        hasMore
    }
}
export default connect(mapStateToProps)(SearchResult)