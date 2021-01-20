import React, { useContext } from "react";
import { ContextProvider } from "../Global/Context";
import Comment from "./Comments";
import {FaRegComment} from "react-icons/fa";
import TelegramIcon from '@material-ui/icons/Telegram';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Time from "./Time"
const Posts = () => {
  const { posts } = useContext(ContextProvider);
  return (
    <>
      {posts.map((post) => (
        <div className="posts" key={post.id}>
          <div className="posts__header">
            <div className="posts__header-avator">{post.username[0]}</div>
            <div className="posts__header-name">{post.username}</div>
            <div className="posts__Time"><Time/>
          
          </div>
            
          </div>
          
          <div className="posts__img">
            <img src={post.image} alt={post.image} />
            
            <FavoriteBorderIcon className="post__icon"/>
              <TelegramIcon className="post__icons"/>
              <FaRegComment className="post__commenticon"/>
              
              
          </div>
          <Comment id={post.id} />
        </div>
      ))}
    </>
  );
};

export default Posts;