import React, {Component} from "react";
import {connect} from 'react-redux';
import {getLocationList} from "../../actions/location";
import {tempAddress} from "../../actions/userinfo"
import Header from "../../components/Header";
import LoactionSearch from "../../components/LocationSearch"

class SearchAddress extends Component {
    constructor() {
        super()
        this.handleEnter = this
            .handleEnter
            .bind(this)
        this.handleClick = this
            .handleClick
            .bind(this)
    }
    async componentDidMount() {
        const {dispatch, longitude, latitude} = this.props
        dispatch(await getLocationList(longitude, latitude))
        const id = this.props.id;
    }
    async handleEnter(keyword) {
        const {longitude, latitude, dispatch} = this.props;
        if (keyword.length != 0) {
            dispatch(await getLocationList(longitude, latitude, keyword));
        }
    }
    handleClick(name, latitude, longitude, address, geohash) {
        const {dispatch} = this.props
        dispatch(tempAddress({address:name, address_detail:address, geohash}))
        this
            .props
            .history
            .push("/my/address/add")
    }
    render() {
        const {locationList} = this.props
        return (
            <div>
                <Header title="搜索地址"/>
                <LoactionSearch
                    locationList={locationList}
                    onClick={this.handleClick}
                    onEnter={this.handleEnter}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const {longitude, latitude, locationList} = state.location;
    return {longitude, latitude, locationList}
}
export default connect(mapStateToProps)(SearchAddress);