// productReducer.js

const initialState = {
    products: [],
    detail:[],
    loading: false,
    error: null
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload,
          error: null
        };
      case 'GET_PRODUCTS_FAILURE':
        return {
          ...state,
          products: [],
          error: action.payload
        };
        case 'GET_PRODUCTS_DETAIL':
      return {
        ...state,
        detail: action.payload,
        loading: false,
        error: null
      };
    case 'GET_PRODUCTS_ERROR':
      return {
        ...state,
        detail: null,
        loading: false,
        error: action.payload
      };
      default:
        return state;
    }
  };
  
  export default productReducer;
  