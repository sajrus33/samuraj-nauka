class Counter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button>-1</button>
        <button>Reset</button>
        <button>+1</button>
        <h1>Liczba klikow: </h1>
        <h1>Wynik: </h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
