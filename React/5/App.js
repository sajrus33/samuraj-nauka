class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     test: ""
  //   };
  // }

  state = {
    text: "",
    number: 1
  };
  handleClick = () => {
    this.setState({
      text: this.state.number,
      number: ++this.state.number
    });
  };

  render() {
    const btnName = " zmienna lokalna i tyle";
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>
          {this.props.btnTitle}
          {btnName}
        </button>
        <PanelResult text={this.state.text}>
          jam jest wpisem w component, przekazuje sie co rusz by stworzyc nowy
          obj
        </PanelResult>
      </React.Fragment>
    );
  }
}

// zamiast uzywac powyzej h1 bezposrednio, tworze go w componencie
const PanelResult = props => {
  return (
    <h1>
      {props.text} - a tutaj props.children: {props.children}
    </h1>
  );
};

// mozna przekazac propsa wszedzie

ReactDOM.render(
  <App btnTitle="jeste atrybuto-propse do labelownia guzika" />,
  document.getElementById("root")
);
