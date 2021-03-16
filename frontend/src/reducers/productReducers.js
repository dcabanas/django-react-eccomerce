import {
   PRODUCT_LIST_REQUEST,
   PRODUCT_LIST_SUCCESS,
   PRODUCT_LIST_FAIL,
   PRODUCT_DETAILS_REQUEST,
   PRODUCT_DETAILS_SUCCESS,
   PRODUCT_DETAILS_FAIL,
   PRODUCT_CREATE_REVIEW_REQUEST,
   PRODUCT_CREATE_REVIEW_SUCCESS,
   PRODUCT_CREATE_REVIEW_FAIL,
   PRODUCT_CREATE_REVIEW_RESET,
   PRODUCT_TOP_SUCCESS,
   PRODUCT_TOP_FAIL,
   PRODUCT_TOP_REQUEST,
} from '../constants/productConstants'

const productListInitState = { products: [], loading: false, error: null }

export const productListReducer = (state = productListInitState, action) => {
   switch (action.type) {
      case PRODUCT_LIST_REQUEST:
         return { loading: true, products: [] }

      case PRODUCT_LIST_SUCCESS:
         return {
            loading: false,
            products: action.payload.products,
            page: action.payload.page,
            pages: action.payload.pages,
         }

      case PRODUCT_LIST_FAIL:
         return { loading: false, error: action.payload }

      default:
         return state
   }
}

const productDetailsInitState = {
   product: {
      reviews: [],
   },
   loading: false,
   error: null,
}

export const productDetailsReducer = (
   state = productDetailsInitState,
   action
) => {
   switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
         return { loading: true, ...state }

      case PRODUCT_DETAILS_SUCCESS:
         return { loading: false, product: action.payload }

      case PRODUCT_DETAILS_FAIL:
         return { loading: false, error: action.payload }

      default:
         return state
   }
}

const reviewCreateInitState = {
   loading: false,
   success: false,
   error: null,
}

export const productReviewCreateReducer = (
   state = reviewCreateInitState,
   action
) => {
   switch (action.type) {
      case PRODUCT_CREATE_REVIEW_REQUEST:
         return { loading: true, ...state }

      case PRODUCT_CREATE_REVIEW_SUCCESS:
         return { ...state, loading: false, success: true }

      case PRODUCT_CREATE_REVIEW_FAIL:
         return { ...state, loading: false, error: action.payload }

      case PRODUCT_CREATE_REVIEW_RESET:
         return reviewCreateInitState

      default:
         return state
   }
}

const topRatedInitState = {
   products: [],
   loading: false,
   error: null,
}

export const productTopRatedReducer = (state = topRatedInitState, action) => {
   switch (action.type) {
      case PRODUCT_TOP_REQUEST:
         return { loading: true, ...state }

      case PRODUCT_TOP_SUCCESS:
         return { ...state, loading: false, products: action.payload }

      case PRODUCT_TOP_FAIL:
         return { ...state, loading: false, error: action.payload }

      default:
         return state
   }
}
