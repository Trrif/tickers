import styled from "styled-components";
import { Button } from "../Common";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  border-radius: 8px;
  border: 2px solid #333;
  padding: 8px;
  animation: ${props => props.status} 0.3s;
  max-width: 200px;
  margin: 8px;
  margin-top: 16px;
  position: relative;

  @keyframes init {
    0% {
      background: rgba(0, 0, 0, 0.5);
    }

    100% {
      background: #fff;
    }
  }

  @keyframes up {
    0% {
      background: rgba(0, 255, 0, 0.3);
    }

    100% {
      background: #fff;
    }
  }

  @keyframes down {
    0% {
      background: rgba(255, 0, 0, 0.3);
    }

    100% {
      background: #fff;
    }
  }
`;

const TickerName = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

const CurrentPrice = styled.div`
  margin-top: 16px;
  font-weight: 700;
`;

const PrevPrice = styled.div`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 16px;
  font-weight: 300;
  opacity: 0.5;
`;

const RefreshButton = styled(Button)`
  margin-top: auto;
`;

const RemoveButton = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  width: 16px;
  height: 16px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 16px;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export {
  Layout,
  TickerName,
  CurrentPrice,
  PrevPrice,
  RefreshButton,
  RemoveButton
};
