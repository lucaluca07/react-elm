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

export const getCategory = async(longitude,latitude,index=1) => {
    try{
        const {result} = await CategoryModel.getCategory(longitude,latitude)
        return{
            type:actionTypes.GET_CATEGORY,
            category:result,
            mainCategoryId:result[index].id,
            subCategoryId:result[index].sub_categories[0].id ,
        }
    }catch(e){
        return e
    }
}

export const setCategoryId = (categoryId) => ({
    type:actionTypes.SET_CATEGORY_ID,
    categoryId:categoryId
})

export const setSiftFactors = (id,category) => ({
    type:actionTypes.SET_SIFT_FACTORS,
    siftFactors:category,
    subCategoryId:id
})

export const setMainCategory = (id) =>({
    type:actionTypes.SET_MAIN_CATEGORY_ID,
    mainCategoryId:id
})

export const clearCategory = () => ({
    type:actionTypes.CLEAR_CATEGORY
})