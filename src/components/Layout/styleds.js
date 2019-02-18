import styled from "styled-components";

const LayoutMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 768px;
  width: 100%;
`;

const LayoutTickers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RefreshIndicator = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  animation: ${props => props.refreshInterval}ms init infinite;
`;

export { LayoutMain, LayoutTickers, RefreshIndicator };
