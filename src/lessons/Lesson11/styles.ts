import styled from "@emotion/styled";

export const Lesson11Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: gray;
  padding: none;
`;

export const FactBox = styled.div`
  width: 400px;
  max-height: 700px;
  overflow-y: auto;
  border: 2px solid #444;
  border-radius: 10px;
  padding: 15px;
  margin-top: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ErrorMessage = styled.button`
width: 600px;
  padding: 20px;
  background-color: #eb9378;
  border: 2px solid #e61212;
  border-radius: 6px;
  color: #e61212;
  font-size: 28px;
  font-weight: bold;
`;
