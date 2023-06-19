import './Button.css'

const Button = ({ imgUrl, onClickEv, notification = false, isSelected = false }) => {
  // V ----------------------
  // C ----------------------

  // R ----------------------
  return (
    <div className="Button" onClick={() => onClickEv()}>
      <img className='Button__img' src={isSelected ? imgUrl[1] : imgUrl[0]} alt="button img" />
      {notification ?
        <>
          <div className="Button__notification"></div>
        </>
        :
        null
      }
    </div>
  );
}

export default Button;