class App extends React.Component {
  // constructor(p) {
  //   super(p);
  //   this.state = {
  //     ja: "hmm"
  //   };
  // }
  state = {
    value: ""
  };

  handleInputChange = () => {
    console.log(event.target.value);
    const newValue = event.target.value;
    this.setState({
      value: newValue
    });
  };

  // reset input xdd
  handleBtnClick = () => {
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.value}
          placeholder="placeholder jak w html"
          onChange={this.handleInputChange}
          type="text"
        />
        <button onClick={this.handleBtnClick}>reset</button>
        <h1 className="title">{this.state.value}</h1>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
