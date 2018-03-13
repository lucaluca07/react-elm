import * as actionTypes from '../constants'
import CategoryModel from '../fetch/category'

export const getSiftFactors = async(longitude,latitude,entryId) => {
    try{
        const {result} = await CategoryModel.getSiftFactors(longitude,latitude,entryId)
        return {
            type:actionTypes.GET_SIFT_FACTORS,
            siftFactors:result,
            categoryId:result[0].id
        }
    }catch(e){
        return e
    }
}

export const setCategoryId = (categoryId) => ({
    type:actionTypes.SET_CATEGORY_ID,
    categoryId:categoryId
})