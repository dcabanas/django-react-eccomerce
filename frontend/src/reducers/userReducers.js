import {
   USER_LOGIN_REQUEST,
   USER_LOGIN_SUCCESS,
   USER_LOGIN_FAIL,
   USER_LOGOUT,
   USER_REGISTER_REQUEST,
   USER_REGISTER_SUCCESS,
   USER_REGISTER_FAIL,
   USER_DETAILS_REQUEST,
   USER_DETAILS_SUCCESS,
   USER_DETAILS_FAIL,
   USER_DETAILS_RESET,
   USER_UPDATE_PROFILE_REQUEST,
   USER_UPDATE_PROFILE_SUCCESS,
   USER_UPDATE_PROFILE_FAIL,
   USER_UPDATE_PROFILE_RESET,
} from '../constants/userConstants'

const userInitState = {
   userInfo: null,
   loading: false,
   error: null,
}

export const userLoginReducer = (state = userInitState, action) => {
   switch (action.type) {
      case USER_LOGIN_REQUEST:
         return { loading: true }

      case USER_LOGIN_SUCCESS:
         return { loading: false, userInfo: action.payload }

      case USER_LOGIN_FAIL:
         return { loading: false, error: action.payload }

      case USER_LOGOUT:
         return userInitState

      default:
         return state
   }
}

export const userRegisterReducer = (state = userInitState, action) => {
   switch (action.type) {
      case USER_REGISTER_REQUEST:
         return { loading: true }

      case USER_REGISTER_SUCCESS:
         return { loading: false, userInfo: action.payload }

      case USER_REGISTER_FAIL:
         return { loading: false, error: action.payload }

      default:
         return state
   }
}

const userDetailsInitState = {
   user: null,
   loading: false,
   error: null,
}

export const userDetailsReducer = (state = userDetailsInitState, action) => {
   switch (action.type) {
      case USER_DETAILS_REQUEST:
         return { loading: true, ...state }

      case USER_DETAILS_SUCCESS:
         return { loading: false, user: action.payload }

      case USER_DETAILS_FAIL:
         return { loading: false, error: action.payload }

      case USER_DETAILS_RESET:
         return userDetailsInitState

      default:
         return state
   }
}

const updateProfileInitState = {
   loading: false,
   userInfo: null,
   success: false,
   error: null,
}

export const userUpdateProfileReducer = (
   state = updateProfileInitState,
   action
) => {
   switch (action.type) {
      case USER_UPDATE_PROFILE_REQUEST:
         return { loading: true, ...state }

      case USER_UPDATE_PROFILE_SUCCESS:
         return { loading: false, success: true, userInfo: action.payload }

      case USER_UPDATE_PROFILE_FAIL:
         return { loading: false, error: action.payload }

      case USER_UPDATE_PROFILE_RESET:
         return updateProfileInitState

      default:
         return state
   }
}
