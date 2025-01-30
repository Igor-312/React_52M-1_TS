import { ChangeEvent, useState } from "react";

import Input from "../../components/Input/Input";
import {
  Homework09Wrapper,
  FormWrapper,
  ResultWrapper,
  ResultBlock,
} from "./styles";
import Button from "../../components/Button/Button";

function Homework09() {
  const [firstNote, setFirstNote] = useState<string>("");
  const [secondNote, setSecondNote] = useState<string>("");
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNote(event.target.value);
  };
  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNote(event.target.value);
  };

  const showResult = () => {
    setIsShowResult(true);
  };

  return (
    <Homework09Wrapper>
      <FormWrapper>
        <Input
          name="first-note"
          placeholder="Enter first note"
          value={firstNote}
          onChange={firstNoteOnChange}
        />
        <Input
          name="second-note"
          placeholder="Enter second note"
          value={secondNote}
          onChange={secondNoteOnChange}
        />
        <Button name="SHOW" onClick={showResult} />
      </FormWrapper>
      {isShowResult && (
        <ResultWrapper>
          <ResultBlock>{firstNote}</ResultBlock>
          <ResultBlock>{secondNote}</ResultBlock>
        </ResultWrapper>
      )}
    </Homework09Wrapper>
  );
}

export default Homework09;
