import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
// import Modal from 'react-modal'
import { Modal } from "react-bootstrap";
import { UpdatePost } from "../../JS/action/Post.action";

const EditPost = ({id}) => {
  const [message, setMessage] = useState();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.postReducer);

  

  const Update = () => {
    dispatch(UpdatePost(id, message));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} as="div" color="red" floated="right">
        <Icon name="edit" style={{ margin: 0 }} />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            style={{
              width: "450px",
              height: "140px",
              borderRadius: "20px",
              outline: "none",
              border: "none",
              background: "#f0f2f5",
            }}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type Here.."
            name="message"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} >Close</Button>
          <Button onClick={Update}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditPost;
