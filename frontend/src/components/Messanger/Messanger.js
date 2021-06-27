import React, { useContext, useEffect, useRef, useState } from "react";
import "./Messanger.css";
import Nav from "../Navbar/Nav";
import Chatmenu from "../chatMenu/Chatmenu";
import Message from "../ChatMessages/Message";
import axios from "axios";
// import { io } from "socket.io-client";

import { BsMicFill } from "react-icons/bs";
import { BsFillImageFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiEmojiHappy } from "react-icons/hi";
import { MdMoreHoriz } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AuthContext } from "../../context/AuthContext";

const Messanger = () => {
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const [userTop, setUserTop] = useState("");

  // const [socket, setSocket] = useState(null);



  const LastMsg = useRef();

  const { user } = useContext(AuthContext);

  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(`/conversation/${user._id}`);
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversation();
  }, [user._id]);

  useEffect(() => {
    const getmessages = async () => {
      try {
        const MessagesRes = await axios.get(`/message/${currentChat?._id}`);
        setMessages(MessagesRes.data);
      } catch (err) {
        console.log(err);
      }
    };
    getmessages();
  }, [currentChat]);

  const handelSend = async (e) => {
    e.preventDefault();
    const message = {
      conversationId: currentChat._id,
      sender: user._id,
      text: newMessage,
    };
    try {
      const AddMessage = await axios.post("/message", message);
      setMessages([...messages, AddMessage.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };
  // useEffect(() => {
  //   const friendId = messages.sender.find((e) => e !== user._id);
  //   const getUser = async () => {
  //     try {
  //       const res = await axios(`/users?userId=${friendId}`);
  //       console.log(res.data)

  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [user, messages]);

  // }, [conversation.members , user._id])
  // useEffect(() => {
  //   const friendId = conversation.members.find((e) => e !== user._id);
  //   const getUser = async () => {
  //     try {
  //       const res = await axios(`/users?userId=/${friendId}`);
  //       setUserTop(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getUser();
  // }, [user]);

  useEffect(() => {
    LastMsg.current?.scrollIntoView();
  }, [messages]);

  // useEffect(() => {
  //   setSocket(io("ws://localhost:7000"));

  // }, []);

  return (
    <>
      <Nav />
      <div className="messanger">
        <div className="messangerLeft">
          <div className="messangerLeftWrapper">
            <input className="messangerleftInput" placeholder="search.." />
            {conversation.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Chatmenu conversation={c} />
              </div>
            ))}
          </div>
        </div>

        <div className="messangerMiddel">
          <div className="messangerMiddelWrapper">
            <div className="chatBoxtop">
              <div className="chatBoxTopWrapper">
                <div className="chatBoxTopLeftContainer">
                  <div className="chatBoxTopItem">
                    <IoCall className="chatBoxTopItemIcon" />
                  </div>
                  <div className="chatBoxTopItem">
                    <BsFillCameraVideoFill className="chatBoxTopItemIcon" />
                  </div>
                </div>
                <div className="chatBoxTopMiddle">
                  <img
                    src={pf + "userprofile.png"}
                    className="chatBoxTopImg"
                    alt="user profile"
                  />
                  <span className="chatBoxTopUsername">Faress Mejri</span>
                </div>
                <div className="chatBoxTopRight">
                  <div className="chatBoxTopRightWraap">
                    <MdMoreHoriz className="chatBoxTopRightIcon" />
                  </div>
                </div>
              </div>
            </div>
            {currentChat ? (
              <>
                <div className="chatBoxMiddle">
                  {messages.map((m) => (
                    <div ref={LastMsg}>
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <div className="chatBoxBottomLeft">
                    <div className="chatBoxBottomLeftIcon">
                      <BsMicFill className="chatBoxIcon" />
                    </div>
                    <div className="chatBoxBottomLeftIcon">
                      <BsFillImageFill className="chatBoxIcon" />
                    </div>
                  </div>
                  <div className="chatBoxBottomMiddel">
                    <textarea
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                      className="chatBoxInput"
                      // placeholder="Ask Me?"
                    ></textarea>
                  </div>
                  <div className="chatBoxBottomRight">
                    <div onClick={handelSend} className="chatBoxBottomLeftIcon">
                      <RiSendPlaneFill className="chatBoxIcon" />
                    </div>
                    <div className="chatBoxBottomLeftIcon">
                      <HiEmojiHappy className="chatBoxIcon" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="openChatContainer">
                <span className="openChatSpan">
                  You Don't Have A Message Selected
                </span>
                <p className="openChatParagraph">
                  Open A Conversation To Start A Chat
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Messanger;
