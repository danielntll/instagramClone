import { useLocation } from "react-router-dom";


export const pageAnimation = () => {
  const ANIMATION_SPEED = 0.2;

  const location = useLocation();
  const direction = location.state?.dir;

  console.log("ANIMATION direction : ", direction);

  switch (direction) {
    case "back":
      return (
        {
          initial: {
            x: '-100vw'
          },
          final: {
            x: '0vw',
            transition: { duration: ANIMATION_SPEED }
          }
        }
      );
    case "forward":
      return (
        {
          initial: {
            x: '100vw'
          },
          final: {
            x: '0vw',
            transition: { duration: ANIMATION_SPEED }
          }
        }
      );

    default:
      return (
        {
          initial: {
            x: '0vw'
          },
          final: {
            x: '0vw',
            transition: { duration: ANIMATION_SPEED }
          }
        }
      );
  }
}