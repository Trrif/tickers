import React, { Component } from "react";
import { Layout, InputControl } from "./styleds";
import { Button } from "../Common";

class Controls extends Component {
  constructor() {
    super();

    this.state = { symbol: "" };
  }

  inputSymbol = event => {
    this.setState({ symbol: event.target.value.toUpperCase() });
  };

  render() {
    const { inputSymbol, state } = this;
    const { addCurrency } = this.props;

    return (
      <Layout>
        <InputControl onChange={inputSymbol} value={state.symbol} />
        <Button
          onClick={() => {
            addCurrency(state.symbol);
            this.setState({ symbol: "" });
          }}
        >
          Add ticker
        </Button>
      </Layout>
    );
  }
}

export default Controls;
