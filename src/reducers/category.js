import * as actionTypes from "../constants";

const defaultState = {
  siftFactors: [],
  category: false,
  categoryId: "",
  mainCategoryId: "",
  subCategoryId: ""
};

const category = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_SIFT_FACTORS:
      return {
        ...state,
        siftFactors: action.siftFactors,
        categoryId: action.categoryId
      };
    case actionTypes.SET_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.categoryId
      };
    case actionTypes.GET_CATEGORY:
      return {
        ...state,
        category: action.category,
        mainCategoryId: action.mainCategoryId,
        subCategoryId: action.subCategoryId
      };
    case actionTypes.SET_SIFT_FACTORS:
      return {
        ...state,
        siftFactors: action.siftFactors,
        subCategoryId: action.subCategoryId
      };
    case actionTypes.SET_MAIN_CATEGORY_ID:
      return {
        ...state,
        mainCategoryId: action.mainCategoryId
      };
    case actionTypes.CLEAR_CATEGORY:
      return {
        ...state,
        category: false
      };
    default:
      return state;
  }
};

export default category;
