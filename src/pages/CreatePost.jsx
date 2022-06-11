import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase.config";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [link,setLink]=useState("");
  const postCollectionRef = collection(db, "posts");

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
      link:link,
    });
    navigate("/");
  };
   
  useEffect(() => {
   
    if (!isAuth) {
      navigate("/login");
    }
  });
    useEffect(()=>{
       getLink();
    },[])


  const getLink=()=>{
    const image=document.getElementById("randomImage");

    let randomURL = 'https://source.unsplash.com/random/1920x1080/';

    axios.get(randomURL).then( data => {
      // the url of the random img
   
      setLink(data.request.responseURL);
    });
  }
  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <img src={link} id="randomImage" onClick={getLink}/>
   
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title.."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post :</label>
          <textarea
            placeholder="Post.."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
