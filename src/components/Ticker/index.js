import React, { Component } from "react";
import {
  Layout,
  TickerName,
  CurrentPrice,
  PrevPrice,
  RefreshButton,
  RemoveButton
} from "./styleds";

class Ticker extends Component {
  render() {
    const {
      tickerName,
      currPrice,
      prevPrice,
      refreshTicker,
      removeStock
    } = this.props;

    return (
      <Layout
        status={
          prevPrice === undefined || prevPrice === currPrice
            ? "init"
            : currPrice > prevPrice
            ? "up"
            : "down"
        }
      >
        <TickerName>{tickerName}</TickerName>
        <CurrentPrice>{currPrice}</CurrentPrice>
        <PrevPrice>{prevPrice}</PrevPrice>
        <RefreshButton onClick={() => refreshTicker(tickerName)}>
          Refresh
        </RefreshButton>
        <RemoveButton onClick={() => removeStock(tickerName)} />
      </Layout>
    );
  }
}

export default Ticker;
