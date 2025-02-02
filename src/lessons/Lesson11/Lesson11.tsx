import { useState } from "react";
import axios from "axios";

import { Lesson11Container, FactBox, Button } from "./styles";

function Lesson11 () {
  const [facts, setFacts] = useState<string[]>([]);

  const fetchCatFact = async () => {
    try {
      const response = await axios.get("https://catfact.ninja/fact");
      setFacts((prevFacts) => [...prevFacts, response.data.fact]);
    } catch (error) {
      console.error("Ошибка при получении факта о котах:", error);
    }
  };

  const clearFacts = () => {
    setFacts([]);
  };

  return (
    <Lesson11Container >
      <Button onClick={fetchCatFact}>GET MORE INFO</Button>
      {facts.length > 0 && (
        <>
          <FactBox>
            {facts.map((fact, index) => (
              <p key={index}>{fact}</p>
            ))}
          </FactBox>
          <Button onClick={clearFacts}>DELETE ALL DATA</Button>
          {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
        </>
      )}
    </Lesson11Container>
  );
};

export default Lesson11;
