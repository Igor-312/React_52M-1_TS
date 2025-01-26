import { useState } from "react";
import Button from "../Button/Button";
import "./styles.css";
import {FeedbackProps} from './types';

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislike, setDislike] = useState(0);
  console.log('render');
  

  const addLike = () => {
    setLikes((prevValue) => prevValue + 1);
  };

  const addDislike = () => {
    setDislike((prevValue) => prevValue + 1);
  };

  const resetResult = () => {
    setLikes((0))
    setDislike((0))
  };

  return (
    <div className="feedback-container">
      <div className="feedback-result-container">
        <div className="like-dislike-container">
          <div className="result">{likes}</div>
          <Button name="LIKE" type="button" onClick={addLike} />
        </div>
        <div className="like-dislike-container">
          <div className="result">{dislike}</div>
          <Button name="DISLIKE" type="button" onClick={addDislike} />
        </div>
      </div>
      <Button name="RESET RESULTS" type="button" onClick={resetResult} />
    </div>
  );
}

export default Feedback;
