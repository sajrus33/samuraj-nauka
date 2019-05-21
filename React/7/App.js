class Message extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      messageIsActive: false
    };
  }

  handleBtn = () => {
    console.log(this.state.messageIsActive);
    debugger;
    this.setState({
      messageIsActive: !this.state.messageIsActive
    });
  };

  render() {
    const text =
      "Lorem srloem lore mitchub ischi lorem lorem looor lrorl opelr?";

    return (
      <React.Fragment>
        <button onClick={this.handleBtn}>switch</button>
        <p>{this.state.messageIsActive ? text : null}</p>
        <p>{this.state.messageIsActive ? null : text}</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Message />, document.getElementById("root"));
