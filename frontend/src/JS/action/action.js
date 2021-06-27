import {USER_REGISTER, REGISTER_FAIL, REGISTER_SUCCESS,LOGIN_SUCCESS, USER_LOGIN, LOGIN_FAIL, GET_PROFILE, GET_PROFILE_SUCCESS, GET_PROFILE_FAIL  } from '../constants/actionsTypes'
import axios from "axios"

export const User_Register = (NewUser) => async (dispatch)=>{
    dispatch ({type: USER_REGISTER})

    try {
        const AddUser = await axios.post ("/user/register" , NewUser )
        dispatch ({type : REGISTER_SUCCESS, payload : AddUser.data})
        
    } catch (error) {
        dispatch ({type: REGISTER_FAIL, payload: error.response.data})
        
    }
}

export const Userlogin = (userlog) => async (dispatch) =>{

    dispatch ({type : USER_LOGIN}) 

    try {
        const login = await axios.post ("/user/login" , userlog )
        // console.log(login)

        localStorage.setItem("token", login.data.token)

        dispatch({ type: LOGIN_SUCCESS, payload: login.data })

        
    } catch (error) {
        dispatch  ({type: LOGIN_FAIL, payload : error.response.data})
    }

}

export const profile = () => async (dispatch) => {
    dispatch({ type: GET_PROFILE });
  
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
  
      const user = await axios.get("/user/current", config);
        console.log(user,"aaa")
      dispatch({ type: GET_PROFILE_SUCCESS, payload: user.data });
    } catch (error) {
      dispatch({ type: GET_PROFILE_FAIL, payload: error.response.data });
    }
  };

  export const EditProfile = (id, EditProfile) => (dispatch) => {


    axios
      .put(`/user/update/${id}`, EditProfile )
      .then(() => dispatch(profile()))
      .catch((err) => console.log(err));
  };
  