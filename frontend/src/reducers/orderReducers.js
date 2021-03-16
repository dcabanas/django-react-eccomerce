import {
   ORDER_CREATE_REQUEST,
   ORDER_CREATE_SUCCESS,
   ORDER_CREATE_FAIL,
   ORDER_CREATE_RESET,
   ORDER_DETAILS_REQUEST,
   ORDER_DETAILS_SUCCESS,
   ORDER_DETAILS_FAIL,
   ORDER_PAY_REQUEST,
   ORDER_PAY_SUCCESS,
   ORDER_PAY_FAIL,
   ORDER_PAY_RESET,
   ORDER_LIST_MY_REQUEST,
   ORDER_LIST_MY_SUCCESS,
   ORDER_LIST_MY_FAIL,
   ORDER_LIST_MY_RESET,
} from '../constants/orderConstants'

const orderInitState = {
   loading: false,
   success: false,
   order: {},
   error: null,
}

export const orderCreateReducer = (state = orderInitState, action) => {
   switch (action.type) {
      case ORDER_CREATE_REQUEST:
         return {
            ...state,
            loading: true,
         }

      case ORDER_CREATE_SUCCESS:
         return {
            ...state,
            loading: false,
            success: true,
            order: action.payload,
         }

      case ORDER_CREATE_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      case ORDER_CREATE_RESET:
         return orderInitState

      default:
         return state
   }
}

const orderDetailsInitState = {
   loading: true,
   shippingAddress: {},
   order: {},
}

export const orderDetailsReducer = (state = orderDetailsInitState, action) => {
   switch (action.type) {
      case ORDER_DETAILS_REQUEST:
         return {
            ...state,
            loading: true,
         }

      case ORDER_DETAILS_SUCCESS:
         return {
            ...state,
            loading: false,
            order: action.payload,
         }

      case ORDER_DETAILS_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      default:
         return state
   }
}

const orderPayInitState = {
   loading: false,
   success: false,
   error: null,
}

export const orderPayReducer = (state = orderPayInitState, action) => {
   switch (action.type) {
      case ORDER_PAY_REQUEST:
         return {
            ...state,
            loading: true,
         }

      case ORDER_PAY_SUCCESS:
         return {
            ...state,
            loading: false,
            success: true,
         }

      case ORDER_PAY_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      case ORDER_PAY_RESET:
         return orderPayInitState

      default:
         return state
   }
}

const orderListMyInitState = {
   orders: [],
   loading: false,
   error: null,
}

export const orderListMyReducer = (state = orderListMyInitState, action) => {
   switch (action.type) {
      case ORDER_LIST_MY_REQUEST:
         return {
            ...state,
            loading: true,
         }

      case ORDER_LIST_MY_SUCCESS:
         return {
            ...state,
            loading: false,
            orders: action.payload,
         }

      case ORDER_LIST_MY_FAIL:
         return {
            ...state,
            loading: false,
            error: action.payload,
         }

      case ORDER_LIST_MY_RESET:
         return orderListMyInitState

      default:
         return state
   }
}
