import { useEffect, useState } from 'react';
import './Story.css'

const Story = ({ userData, onClickEv, isYou }) => {
  // V ----------------------
  const [toSee, setToSee] = useState(undefined);
  // C ----------------------
  useEffect(() => {
    if (userData) {
      setToSee(userData.story.stories.find((story) =>
        story.seen === false
      ))
    }
  }, [userData])
  // R ----------------------
  return (
    <div className="Story">
      <div onClick={() => onClickEv(toSee)} className={toSee !== undefined ? (userData.story.isLive ? "Story__container Story__isLive" : "Story__container") : "Story__container Story__seen"}>
        <img className='Story__img' src={userData.image} alt="" />
        {userData.story.isLive ?
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
          {isYou ? "Your story" : userData.username}
        </p>

      </div>
    </div>
  );
}

export default Story;