import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Импорт uuid для генерации уникальных id
import { Lesson11Container, FactBox, Button, ErrorMessage } from "./styles";

function Lesson11() {
  const [facts, setFacts] = useState<{ id: string; text: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchCatFact = async () => {
    setLoading(true);
    setErrorMessage(null);
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFacts((prevFacts) => [...prevFacts, { id: uuidv4(), text: response.data.fact }]);
    } catch (error) {
      setErrorMessage("Ошибка при получении факта о котах");
    } finally {
      setLoading(false);
    }
  };

  const clearFacts = () => {
    setFacts([]);
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  const renderedFacts = facts.map((fact) => <p key={fact.id}>{fact.text}</p>);

  return (
    <Lesson11Container>
      <Button onClick={fetchCatFact} disabled={loading}>
        {loading ? "Загрузка..." : "GET MORE INFO"}
      </Button>

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

      {facts.length > 0 && (
        <>
          <FactBox>{renderedFacts}</FactBox>
          <Button onClick={clearFacts}>DELETE ALL DATA</Button>
        </>
      )}
    </Lesson11Container>
  );
}

export default Lesson11;
