import React, { Component } from "react";

import { LayoutMain, LayoutTickers, RefreshIndicator } from "./styleds";
import Ticker from "../Ticker";
import Controls from "../Controls";

class Layout extends Component {
  render() {
    const { tickers, refreshTicker, addStock, removeStock } = this.props;
    const { rates, symbols, intervalTimeout } = tickers;

    return (
      <LayoutMain>
        <Controls addStock={addStock} />
        <LayoutTickers>
          {symbols.map(symbol => {
            const rate = rates[symbol];

            return (
              <Ticker
                key={symbol}
                tickerName={symbol}
                prevPrice={rate.prevPrice}
                currPrice={rate.currPrice}
                refreshTicker={refreshTicker}
                removeStock={removeStock}
              />
            );
          })}
        </LayoutTickers>
        <RefreshIndicator refreshInterval={intervalTimeout} />
      </LayoutMain>
    );
  }
}

export default Layout;
