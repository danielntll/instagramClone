import "./Post.css";
import Verified from "../../assets/verified.png"
import dots from "../../assets/dots.png"
import like from "../../assets/like.png"
import chat from "../../assets/chat.png"
import messages from "../../assets/messages.png"
import bookmark from "../../assets/bookmark.png"
import Button from "../button/Button";
import { useEffect, useState } from "react";

const Post = ({ dataPost }) => {
  // V ----------------------
  const imgs = [
    "https://picsum.photos/400/500.jpg",
    "https://picsum.photos/400/500.jpg",
    "https://picsum.photos/400/500.jpg"
  ]
  const [isLiked, setisLiked] = useState(false);
  // C ----------------------
  useEffect(() => {
    if (dataPost) {
      // setisLiked(dataPost.isLiked)
    }
  }, [dataPost])
  const handleOpenProfile = (profileId) => {
    console.log("handleOpenProfile : ", profileId);
  }
  const handleOpenMap = (coordinates) => {
    console.log("handleOpenMap : ", coordinates);
  }
  const handleOpenPostOptions = (postData) => {
    console.log("handleOpenPostOptions : ", postData)
  }

  const handleLikeContent = (postId) => {
    console.log("handleLikeContent : ", postId);
  }
  const handleComment = (postId) => {
    console.log("handleComment : ", postId);
  }
  const handleShare = (postId) => {
    console.log("handleShare : ", postId);
  }
  const handleBookmark = (postId) => {
    console.log("handleBookmark : ", postId);
  }
  // R ----------------------
  return (
    <div className="Post">
      <div className="Post__header">
        <div className="Post__header_sx">
          <div className="Post__header__avatar">
            <img src="https://robohash.org/hicveldicta.png?size=50x50&set=set1" />
          </div>
          <div className="Post__header__info" >
            <b onClick={() => handleOpenProfile(0)}>Lorem, ipsum dolor.
              <img src={Verified} alt="" />
            </b>
            <p onClick={() => handleOpenMap([1.215112, 650114])}>Tokyo, Japan</p>
          </div>
        </div>
        <div className="Post__header_dx">
          <Button imgUrl={[dots]} onClickEv={() => handleOpenPostOptions({})} />
        </div>
      </div>
      <div className="Post__imgContainer" onClick={() => handleLikeContent(1)}>
        { //TODO: da sostituire con un carousel che ritorna il current index of img 
          imgs.map((img, index) => {
            return (
              <img key={index + "post.id"} src={img} />
            )
          })
        }
      </div>
      <div className="Post__toolbar">
        <div className="Post__toolbar__sx">
          <Button imgUrl={[like]} onClickEv={() => handleLikeContent(1)} />
          <Button imgUrl={[chat]} onClickEv={() => handleComment(1)} />
          <Button imgUrl={[messages]} onClickEv={() => handleShare(1)} />
        </div>
        <div className="Post__toolbar__center">
          { // creare il current img indicator con il valore ritornato dal carosello
            <></>
          }
        </div>
        <div className="Post__toolbar__dx">
          <Button imgUrl={[bookmark]} onClickEv={() => handleBookmark(1)} />
        </div>
      </div>
      <div className="Post__likes__container">
        <div className="Post__likes">
          <div className="Post__likes__avatar">
            <img src="https://robohash.org/hicveldicta.png?size=50x50&set=set1" alt="" />
          </div>
          <div className="Post__likes__info">
            <p>
              Liked by <b>Lorem ipsum</b> and <b>44444 others</b>
            </p>
          </div>
        </div>
      </div>
      <div className="Post__comments">
        <div className="Post__comment">
          <p>
            <b>user</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ullam unde ipsum vitae, fuga natus in placeat vero iste possimus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;