import React from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import {FaEdit} from "react-icons/fa"
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'



const Profile = () => {
    const user = useSelector((state) => state.userReducer.user)
    
    
    return (
      
        // <h1>waiting</h1> 

        <div>
            <Navbar />
            <div className="page-content page-container" id="page-content">
                <div className="paddingstyle">
                    <div className="card user-card-full">
                        <div className=" bg-c-lite-green user-profile">
                            <div className="card-block text-center text-white">
                                <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile" /> </div>
                                <h1 className="f-w-600">{user.name}</h1>
                                <span>{user.bio}</span> <br/> 
                                <Link to='/editprofile'>
                                <FaEdit className="editstyle" />
                                </Link>
                                
                                
                               
                            </div>
                        </div>
                        <div className="">
                            <div className="card-block">
                                <h6 className="infoStyle">Information</h6>
                                <div className="">
                                    <div className="">
                                        <p className="m-b-10 f-w-600">Email</p>
                                        <h5 className="text-muted f-w-400">{user.email}</h5>
                                    </div>
                                    <div className="">
                                        <p className="m-b-10 f-w-600">Phone</p>
                                        <h5 className="text-muted f-w-400">{user.phone}</h5>
                                    </div>
                                    <div className="">
                                        <p className="m-b-10 f-w-600">dateNaissance</p>
                                        <h5 className="text-muted f-w-400">{user.dateNaissance}</h5>
                                    </div>
                                    <div className="">
                                        <p className="m-b-10 f-w-600">adress</p>
                                        <h5 className="text-muted f-w-400">{user.adress}</h5>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>


    )
}

export default Profile
