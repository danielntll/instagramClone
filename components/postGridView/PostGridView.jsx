import './PostGridView.css';

const PostGridView = ({
  imgUrl,
  callback,
}) => {
  return (
    <div className="PostGridView" onClick={() => callback()}>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default PostGridView;