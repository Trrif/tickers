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
    const { addStock } = this.props;

    return (
      <Layout>
        <InputControl onChange={inputSymbol} value={state.symbol} />
        <Button
          onClick={() => {
            addStock(state.symbol);
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
