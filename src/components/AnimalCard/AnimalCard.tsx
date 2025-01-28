import "./styles.css";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps ) {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg} className="card-image" />
      {children}
    </div>
  );
}

export default AnimalCard;
