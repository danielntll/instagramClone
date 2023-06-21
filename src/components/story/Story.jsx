import './Story.css'

const Story = ({ storyData, onClickEv, isYou }) => {
  // V ----------------------
  // C ----------------------
  // R ----------------------
  return (
    <div className="Story">
      <div onClick={() => onClickEv(storyData)} className={storyData?.seen === false ? (storyData?.isLive ? "Story__container Story__isLive" : "Story__container") : "Story__container Story__seen"}>
        <img className='Story__img' src={storyData?.userimage} alt="" />
        {storyData?.isLive ?
          <div className="Story__live">
            <p className="Story__live__text">
              LIVE
            </p>
          </div>
          : null
        }
      </div>
      <div className="Story__username">
        <p>
          {isYou ? "Your story" : storyData?.username}
        </p>

      </div>
    </div>
  );
}

export default Story;