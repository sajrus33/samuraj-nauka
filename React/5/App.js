class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: ""
    };
  }

  state = {
    text: "",
    number: 2
  };
  handleClick = () => {
    this.setState({
      text: this.state.number,
      number: ++this.state.number
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Kliknij</button>
        <h1>{this.state.text}</h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
