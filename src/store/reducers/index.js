import { restoreStore, saveStore } from "../../utils/storeSaving";

const initialState = restoreStore() || {
  rates: {
    AAPL: {},
    FB: {},
    SIG: {},
    BAX: {}
  },
  symbols: ["AAPL", "FB", "SIG", "BAX"]
};

function tickers(state = initialState, action) {
  switch (action.type) {
    case "ADD_STOCK": {
      const { symbol, price } = action.payload;
      const { rates, symbols } = state;

      return symbols.findIndex(existSymbol => existSymbol === symbol) === -1
        ? {
            ...state,
            rates: {
              ...rates,
              [symbol]: {
                currPrice: price
              }
            },
            symbols: [...symbols, symbol]
          }
        : state;
    }

    case "REMOVE_STOCK": {
      const { payload } = action;
      const { rates, symbols } = state;

      const newSymbols = symbols.filter(symbol => symbol !== payload);

      let newRates = {};

      newSymbols.forEach(symbol => {
        newRates[symbol] = rates[symbol];
      });

      return {
        ...state,
        rates: newRates,
        symbols: newSymbols
      };
    }

    case "REFRESH_ALL_TICKERS": {
      const { payload } = action;
      const { symbols, rates } = state;

      let newRates = {};

      symbols.forEach(symbol => {
        const { latestPrice } = payload[symbol].quote;
        const { currPrice, prevPrice } = rates[symbol];

        newRates[symbol] = {
          prevPrice: currPrice !== latestPrice ? currPrice : prevPrice,
          currPrice: latestPrice
        };
      });

      const newState = {
        ...state,
        rates: newRates
      };

      saveStore(newState);

      return newState;
    }

    case "REFRESH_TICKER": {
      const { symbol, data } = action.payload;
      const { rates } = state;

      return {
        ...state,
        rates: {
          ...rates,
          [symbol]: {
            symbol,
            prevPrice:
              rates[symbol].currPrice !== data
                ? rates[symbol].currPrice
                : rates[symbol].prevPrice,
            currPrice: data
          }
        }
      };
    }

    case "SET_REFRESH_INTERVAL": {
      const { newRefreshIntervalId, intervalTimeout } = action.payload;

      return {
        ...state,
        refreshIntervalId: newRefreshIntervalId,
        intervalTimeout: intervalTimeout
      };
    }

    default:
      return state;
  }
}

export default tickers;
