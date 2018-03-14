import * as actionTypes from '../constants'

const defaultState = {
    siftFactors:[],
    category:false,
    categoryId:""
}

const category = (state = defaultState,action) => {
    switch(action.type){
        case actionTypes.GET_SIFT_FACTORS:
            return {...state,
                siftFactors:action.siftFactors,
                categoryId:action.categoryId
            }
        case actionTypes.SET_CATEGORY_ID:
            return{...state,
                categoryId:action.categoryId
            }
        case actionTypes.GET_CATEGORY:
            return {...state,
                category:action.category
            }
        default:
            return state
    }
}

export default category