class Button extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          debugger;
          this.props.handleClick(this.props.change);
        }}
      >
        {this.props.change}
      </button>
    );
  }
}

class ResultPanel extends React.Component {
  render() {
    return <p className="red">{this.props.count}</p>;
  }
}

class App extends React.Component {
  state = {
    count: 0
  };
  handleClick = arg => {
    if (!isNaN(arg)) {
      this.setState({
        count: count + arg
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Button handleClick={this.handleClick} change={-10} />
        <Button handleClick={this.handleClick} change={-1} />
        <Button handleClick={this.handleClick} change={1} />
        <Button handleClick={this.handleClick} change={10} />
        <ResultPanel count={this.state.count} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
