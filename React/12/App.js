// Check box  for horror movie :P with props=2 coops elements
// outter functionality
const ValidtaionMessage = (props) => {
  const { message, title } = props;
  return (<p>{message + title}</p>)
};

const displayMessage = (isConfirmed, isFormSubmitted) => {
  if (isFormSubmitted && isConfirmed) {
    return <ValidtaionMessage message="mozesz" title="-AutoBot" />
  } else if (isFormSubmitted) {
    return <ValidtaionMessage title="-AutoBot" message="nie mozesz" />
  } else {
    return null;
  }
};
// forma
class App extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  }
  handleCheckbox = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    })
  };
  handleForm = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      })
    }

  };

  render() {
    const { isConfirmed, isFormSubmitted } = this.state;
    console.log(isConfirmed);


    return (
      <React.Fragment>
        <h1> Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleForm}>
          <input type="checkbox" id="age"
            onChange={this.handleCheckbox} checked={isConfirmed}
          />
          <label htmlForm="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit" >Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isFormSubmitted)}
      </React.Fragment>
    );


  }
}
ReactDOM.render(
  <App />,
  document.getElementById("root")
);
// ReactDOM.render(<checkConfirmMovie />, document.getElementById("root"));