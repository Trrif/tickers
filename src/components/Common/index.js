import styled from "styled-components";

const Button = styled.button`
  font-size: 24px;
  border: none;
  border-radius: 8px;
  min-width: 150px;
  cursor: pointer;
  padding: 16px;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-weight: 700;
  transition: background 0.3s;
  border: 2px solid rgba(0, 0, 0, 0.7);

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Input = styled.input`
  border: 2px solid rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  padding: 8px;
  font-weight: 700;
  font-size: 24px;
`;

export { Button, Input };
