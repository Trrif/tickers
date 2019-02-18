import axios from "axios";

const ADD_CURRENCY = "ADD_CURRENCY";
const REMOVE_CURRENCY = "REMOVE_CURRENCY";
const REFRESH_ALL_TICKERS = "REFRESH_ALL_TICKERS";
const REFRESH_TICKER = "REFRESH_TICKER";
const SET_REFRESH_INTERVAL = "SET_REFRESH_INTERVAL";

const apiUrl =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL_DEV
    : process.env.REACT_APP_API_URL_PROD;

const refreshAllTickers = () => (dispatch, getState) => {
  const symbolsList = getState().symbols.join(",");

  if (symbolsList.length !== 0) {
    axios({
      url: `${apiUrl}/stock/market/batch?symbols=${symbolsList}&types=quote&filter=latestPrice`,
      method: "get"
    })
      .then(response => {
        const { data } = response;

        dispatch({ type: REFRESH_ALL_TICKERS, payload: data });
      })
      .catch(error => {});
  }
};

const refreshTicker = symbol => dispatch => {
  axios({
    url: `${apiUrl}/stock/${symbol}/price`,
    method: "get"
  })
    .then(response => {
      const { data } = response;

      dispatch({ type: REFRESH_TICKER, payload: { data, symbol } });
    })
    .catch(error => {
      if (error.response.status === 404) {
        alert("Probably the stock is not exist.");
      } else {
        alert("Something go wrong please retry later.");
      }
    });
};

const addCurrency = symbol => dispatch => {
  axios({
    url: `${apiUrl}/stock/${symbol}/price`,
    method: "get"
  })
    .then(response => {
      const { data } = response;

      dispatch({ type: ADD_CURRENCY, payload: { symbol, price: data } });
    })
    .catch(error => {
      if (error.response.status === 404) {
        alert("Probably the stock is not exist.");
      } else {
        alert("Something go wrong please retry later.");
      }
    });
};

const removeCurrency = symbol => ({ type: REMOVE_CURRENCY, payload: symbol });

const setRefreshInterval = intervalTimeout => (dispatch, getState) => {
  const { refreshIntervalId } = getState();

  if (refreshIntervalId !== undefined) clearInterval(refreshIntervalId);

  const newRefreshIntervalId = setInterval(
    () => dispatch(refreshAllTickers()),
    intervalTimeout
  );

  dispatch({
    type: SET_REFRESH_INTERVAL,
    payload: { newRefreshIntervalId, intervalTimeout }
  });
};

export {
  refreshAllTickers,
  refreshTicker,
  addCurrency,
  removeCurrency,
  setRefreshInterval
};
