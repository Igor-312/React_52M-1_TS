export interface AnimalCardProps {
  name: string;
  species: string;
  age?: number;
  onAdopt: () => void;
}
