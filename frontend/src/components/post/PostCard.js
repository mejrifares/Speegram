import React from 'react'
// import {useSelector} from "react-redux"

import { Link } from 'react-router-dom';
import { Button, Card, Icon, Image } from 'semantic-ui-react';
import DeleteCard from './DeleteCard';
import LikeButton from './LikeButton';


const PostCard = ({ post }) => {



  // const posts = useSelector((state) => state.postReducer);
  // const user = useSelector((state) => state.userReducer.user)


  return (
    <Card style={{
      // margin : "0 0 700px 0" ,
      fontSize : "17px" ,
      lineHeight : "50px" ,
      width : "750px",
      bordre : "none",
      bordreRadius : "30px"
      
      }}>

      <Card.Content style={{ backround : "#a3ddee"}}>
        <Image
          floated='right'
          size='mini'
          src='https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
        />
        <Card.Header >
          <p style={{fontSize : "20px"}}>{post.user?.name}</p>

        </Card.Header>


        {/* <Card.Meta></Card.Meta> */}
        <Card.Description>
        {post.message}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <Button as='div' labelPosition='right'>
        <LikeButton post={post} />
          <Link to="/posts/:postId" >
            <Button color='blue' basic>
              <Icon name='comments' />
            </Button>
          </Link>
          </Button>

          <DeleteCard id={post._id}/>
      </Card.Content>
    </Card>
  )
}

export default PostCard
