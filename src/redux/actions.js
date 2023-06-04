// productActions.js
import axios from 'axios';

// Acción para obtener los productos de PetMart
export const getProducts = () => {
  return (dispatch) => {
    axios.get('http://localhost:3003/products')
      .then((response) => {
        dispatch({
          type: 'GET_PRODUCTS_SUCCESS',
          payload: response.data
        });
      })
      .catch((error) => {
        dispatch({
          type: 'GET_PRODUCTS_FAILURE',
          payload: error.message
        });
      });
  };
};

export const fetchProduct = (productId) => {
    return (dispatch) => {
      axios
        .get(`http://localhost:3003/products/${productId}`)
        .then((response) => {
          dispatch({
            type: 'GET_PRODUCTS_DETAIL',
            payload: response.data
          });
        })
        .catch((error) => {
          dispatch({
            type: 'GET_PRODUCTS_ERROR',
            payload: error.message
          });
        });
    };
  };
  
  
  
  
  