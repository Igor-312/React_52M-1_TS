import { AnimalCardStyled, ImageStyled, Title, SpeciesBlock } from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalName, animalSpecies, animalImg, children }: AnimalCardProps) {
  return (
    <AnimalCardStyled>
      <Title>{animalName}</Title>
      <SpeciesBlock>{animalSpecies}</SpeciesBlock>
      <ImageStyled src={animalImg} alt="Animal"/>
      {/* prop children позволяет добавлять дополнительную структуру(JSX, компоненты) в компонент */}
      {children}
    </AnimalCardStyled>
  );
}

export default AnimalCard;
