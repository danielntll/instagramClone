import Story from '../story/Story';
import './Stories.css'

const Stories = ({ you, friendsStories, onClickEv }) => {
  // V ----------------------
  // C ----------------------
  // R ----------------------
  return (
    <div className="Stories__container">
      <div className="Stories">
        <Story storyData={you[0]} isYou onClickEv={() => onClickEv("-1")} />
        {friendsStories?.map((story, index) => {
          return (
            <Story key={index + "story " + story.userId} storyData={story} onClickEv={() => onClickEv(index)} />
          )
        })}

      </div>

    </div>
  );
}

export default Stories;