import styled from "styled-components";
import { Input } from "../Common";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const InputControl = styled(Input)`
  max-width: 150px;
  margin-right: 16px;
  padding: 16px;
  text-align: center;
`;

export { Layout, InputControl };
