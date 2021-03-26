import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EditProfile } from "../../JS/action/action";
import Navbar from "../Navbar";
import './edituser.css'
const EditUser = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [bio, setBio] = useState()
  const [phone, setPhone] = useState()
  const [dateNaissance, setDate] = useState()
  const [adress, setAdress] = useState()
  const [location, setLocation] = useState()
  const [profession, setProfession] = useState()
  const [webside, setWebside] = useState()


  const dispatch = useDispatch();


  const obj = {
    name,
    email,
    bio,
    phone,
   
    dateNaissance,
    adress,
    profession,
    location,
    webside,
  

  }

  const editt = () => {
    dispatch(EditProfile(user._id, obj))


  }

  

  return (

    <div>
      <Navbar />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="picuser" />
            <span className="font-weight-bold">{user.name}</span><span> </span></div>
          </div>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Modifier Profile </h4>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Nom</label>
                  <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} defaultValue={user.name} />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} defaultValue={user.email} />
                </div>
                <div className="col-md-12">
                  <label className="labels">Bio</label>
                  <input type="text" className="form-control" onChange={(e) => setBio(e.target.value)} defaultValue={user.bio} />
                </div>
                <div className="col-md-12">
                  <label className="labels">Number</label>
                  <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} defaultValue={user.phone} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <br /><br /><br />
            <div className="row mt-3">
            <div className="col-md-6">
                  <label className="labels">Date Naissance</label>
                  <input name="DateNaissance" type="date" className="form-control" onChange={(e) => setDate(e.target.value)} defaultValue={user.dateNaissance} />
                </div>
                <div className="col-md-6">
                  <label className="labels">Adresse</label>
                  <input name="adress" type="adress" className="form-control" onChange={(e) => setAdress(e.target.value)} defaultValue={user.adress} />
                </div>
               <br />
              <div className="col-md-12">< label className="labels">Profession</label>
                <input type="text" className="form-control" onChange={(e) => setLocation(e.target.value)} defaultValue={user.ville} />
              </div>
              <div className="col-md-12">
                <label className="labels">Facebook</label>
                <input type="text" className="form-control" onChange={(e) => (e.target.value)} defaultValue={user.facebook} />
              </div>
            </div>

            <div className="row mt-1">
              <div className="col-md-6">
                <label className="labels">Webside</label>
                <input type="text" className="form-control" onChange={(e) => setWebside(e.target.value)} defaultValue={user.webside} />
              </div>
              <div className="col-md-6"><label className="labels">Githup</label><input type="text" className="form-control" onChange={(e) => (e.target.value)} defaultValue={user.githup} /></div>
            </div>
            <Link to="/profile">
              <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={editt}>Enregistrer</button></div>
            </Link>

          </div>


        </div>
      </div>
    </div>



  );
};

export default EditUser;
