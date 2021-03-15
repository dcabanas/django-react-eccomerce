import {
   ORDER_CREATE_REQUEST,
   ORDER_CREATE_SUCCESS,
   ORDER_CREATE_FAIL,
   ORDER_CREATE_RESET,
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
