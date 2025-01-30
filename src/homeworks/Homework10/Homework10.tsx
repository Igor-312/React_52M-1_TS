import { useState, useEffect } from "react";
import { DogImg, ErrorMessage, Homework10Wrapper, Spinner } from "./styles";
import Input from "../../components/Input/Input";

function Homework10() {
  const [inputValue, setInputValue] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (inputValue) {
      setIsLoading(true);
      fetch(`https://dog.ceo/api/breeds/image/random`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setImageUrl(data.message))
        .catch((error) => {
            console.error("Ошибка при запросе:", error); 
            setError(error.message); 
          })
        .finally(() => setIsLoading(false));
    } else {
      setImageUrl("");
      setError(null);
    }
  }, [inputValue]);

  return (
    <Homework10Wrapper>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Input 1"
        name={""}
      />
      <Input type="text" placeholder="Input 2" name={""} />

      {isLoading && <Spinner>Загрузка...</Spinner>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {imageUrl && <DogImg src={imageUrl} alt="Random Dog" />}
    </Homework10Wrapper>
  );
}

export default Homework10;
