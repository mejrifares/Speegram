// import React, { useEffect } from 'react'
// import './Home.css'
// import { useDispatch, useSelector } from "react-redux";
// import { getPosts } from "../../JS/action/Post.action";

// import { Grid} from 'semantic-ui-react'
// import Navbar from '../Navbar'
// import PostCard from '../post/PostCard';
// import NewPostForm from '../post/NewPostForm';

// const Home = () => {
//     const dispatch = useDispatch();
//     const loading = useSelector((state) => state.userReducer.loading);
//     const posts = useSelector((state) => state.postReducer);
//     const user = useSelector((state) => state.userReducer.user)

//     useEffect(() => {
//         dispatch(getPosts())

//     }, [getPosts])

//     return (
//         loading ?
//             <h1>
//                 loading page
//             </h1> :
//             <div style={{background : "#f0f2f5"}} >
//                 <div>
//                     <Navbar />
//                 </div>
//                 <div className="home-header">
//                     <NewPostForm />

//                 </div>
//                 <div className="cardstyle">

//                     <Grid >
//                         <Grid style={{display : "", justifyContent : "space-between"}}>
//                             {(
//                                 (posts[0]) && posts.map((post) => (
//                                     <PostCard post={post} key={post._id} />

//                                 ))
//                             )}
//                         </Grid>
//                     </Grid>
//                 </div>
//             </div>
//     )
// }

// export default Home
import React from "react";
import "./Home.css";


import Leftbar from "../leftbar/Leftbar";
// import Navbar from "../Navbar";
import Rightbar from "../rightbar/Rightbar";
import MiddleBar from "../middleBar/MiddleBar";
import Nav from "../Navbar/Nav";


const Home = () => {
  // const loading = useSelector((state) => state.userReducer.loading);

  return (
    <div>
      <Nav/>
      <div className="HomeContainer">
        <Leftbar />
        <MiddleBar />
        <Rightbar />
      </div>
    </div>
  );
};

export default Home;
