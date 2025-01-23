import "./styles.css";
import { useState } from "react";

function Consultation03() {
  const [ingredients, setIngredients] = useState([]);
  const buttonNames: string[] = [
    "Cheese",
    "Meat",
    "Salat",
    "Bacon",
    "Broad",
    "Katchup",
  ];
  const buttons = buttonNames.map((ingredient) => {
    return <button onClick={() => {}} className="button">{ingredient}</button>
  });

  return (
    <div className="consultation02-container">
      <ol className="ingredients"></ol>
      <div className="button-container">
        {/* <button onClick={() => {}} className="button">
          Cheese
        </button>
        <button onClick={() => {}} className="button">
          Meat
        </button>
        <button onClick={() => {}} className="button">
          Salad
        </button>
        <button onClick={() => {}} className="button">
          Bacon
        </button>
        <button onClick={() => {}} className="button">
          Broad
        </button>
        <button onClick={() => {}} className="button">
          Katchup
        </button> */}
        {buttons}
      </div>
    </div>
  );
}

export default Consultation03;
