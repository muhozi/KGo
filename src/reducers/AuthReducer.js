import { LOGGING, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/Constants'

const initialState = {
  logging: false,
  loggedin: false,
  token: null,
  data: [],
  error:false,
  token:null,
}

export default function AuthReducer (state = initialState, action) {
  switch (action.type) {
    case LOGGING:
      return {
        ...state,
        logging: 1,
        loggedin: false,
        data: [],
        error:false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        logging: false,
        loggedin: true,
        data: action.data,
        error: false,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        logging: false,
        loggedin: false,
        data: [],
        error:true,
      }
    default:
      return state
  }
}