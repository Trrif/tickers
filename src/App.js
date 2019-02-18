import React, { Component } from "react";
import { connect } from "react-redux";

import {
  refreshAllTickers,
  refreshTicker,
  addCurrency,
  removeCurrency,
  setRefreshInterval
} from "./store/actions";

import Layout from "./components/Layout";
import { saveStore } from "./utils/storeSaving";

class App extends Component {
  componentWillUpdate(nextProps) {
    saveStore(nextProps.tickers);
  }

  componentDidMount() {
    this.props.setRefreshInterval(2500);
  }

  render() {
    return <Layout {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    tickers: state
  };
};

export default connect(
  mapStateToProps,
  {
    refreshAllTickers,
    refreshTicker,
    addCurrency,
    removeCurrency,
    setRefreshInterval
  }
)(App);
