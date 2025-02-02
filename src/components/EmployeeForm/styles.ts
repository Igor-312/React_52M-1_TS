import styled from "@emotion/styled";

export const EmployeeFormContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 8px 4px rgba(59, 4, 4, 0.1);
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 10px;
  border: 1px solid white;
  border-radius: 4px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
