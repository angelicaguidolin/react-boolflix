
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";


export default function StarsVote({ vote }) {

  const showStars = (vote) => {
    const stars = Math.round(vote / 2)
    const starVote = [];

   
    for (let i = 0; i < stars; i++) {
        starVote.push(<FontAwesomeIcon key={`full-${i}`} icon={solidStar} style={{ color: "#FFD700" }} />);
    }

    for (let i = stars; i < 5; i++) {
        starVote.push(<FontAwesomeIcon key={`empty-${i}`} icon={regularStar} style={{ color: "#FFD700" }} />);
    }

    return starVote;
  };

  
  return <div>{showStars(vote)}</div>;
}