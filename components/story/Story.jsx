import './Story.css'

const Story = ({ storyData, onClickEv, isYou, onlyAvatar = false, size = 1 }) => {
  // V ----------------------
  const style = {
    width: 52,
    height: 52,
  }
  // C ----------------------
  // R ----------------------
  return (
    <div className="Story" style={{ display: onlyAvatar ? "block" : "flex" }}>
      <div onClick={() => onClickEv(storyData)} className={storyData?.seen === false ? (storyData?.isLive ? "Story__container Story__isLive" : "Story__container") : "Story__container Story__seen"}

        style={{ width: 8 + style.width * size + "px", height: 8 + style.height * size + "px" }}
      >
        <img
          style={{ width: style.width * size + "px", height: style.height * size + "px" }}
          className='Story__img' src={storyData?.userimage} alt="" />
        {storyData?.isLive ?
          <div className="Story__live">
            <p className="Story__live__text">
              LIVE
            </p>
          </div>
          : null
        }
      </div>
      {onlyAvatar ?
        null
        : <div className="Story__username">
          <p>
            {isYou ? "Your story" : storyData?.username}
          </p>
        </div>}

    </div>
  );
}

export default Story;