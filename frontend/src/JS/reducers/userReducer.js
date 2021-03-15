import { REGISTER_FAIL, REGISTER_SUCCESS, USER_REGISTER, LOGIN_SUCCESS,LOGIN_FAIL, USER_LOGIN, GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from "../constants/actionsTypes";

const inisialstate = {
    loading : false,
    user : null,
    errors: null,
    isAuth:false
}

const userReducer = (state = inisialstate, {type, payload}) =>{

    switch (type) {

        case USER_REGISTER : 
        case USER_LOGIN :
        case GET_PROFILE :
        return {
            ...state,
            loading : true

        }

        case REGISTER_SUCCESS : return {
            ...state , 
            loading : false,
            user : payload,
            
        }

        case REGISTER_FAIL :
        case LOGIN_FAIL :
        case GET_PROFILE_FAIL :  
        return {
            ...state,
            loading : false,
            errors : payload
        }

        case LOGIN_SUCCESS : return {
            ...state , 
            loading : false,
            token : payload,
            isAuth : true
        }

        case GET_PROFILE_SUCCESS : return {
            ...state , 
            loading : false,
            user : payload,
            isAuth: true,
        }
         
        default: 
        return state;
    }


}
export default userReducer