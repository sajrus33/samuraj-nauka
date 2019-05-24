class Counter extends React.Component {
  state = {
    count: 0,
    result: 0
  };

  handleAdding = arg => {
    if (!isNaN(arg)) {
      this.setState({
        count: this.state.count + arg
      });
    } else {
      console.log("dont do it");
    }
  };

  handleReset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.handleAdding(-1);
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            this.handleAdding(-10);
          }}
        >
          -10
        </button>
        <button onClick={this.handleReset}>Reset</button>
        <button
          onClick={() => {
            this.handleAdding(1);
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.handleAdding(10);
          }}
        >
          +10
        </button>
        <h1>Liczba klikow: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
