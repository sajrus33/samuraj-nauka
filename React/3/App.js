// LESSON 4

// komponent funkcyjny bezstanowy, musi return i tyle w sumie
const Header = () => {
  return <h1>jam jest Header z duzej</h1>;
};

// dzie dzicz po klasach react, komponent klasowy,stanowy  zawsze rozszerza .Component, musi rozwijac render
class Blog extends React.Component {
  // state = {
  //   number: 0
  // };
  render() {
    return (
      <section>
        <h2>Komponent clasowy numer stata: </h2>
        <p>
          Loremki lorem loo Loremki lorem loo Loremki lorem loo Loremki lorem
          loo
        </p>
      </section>
    );
  }
}

// Zagniezdzamy komponenty w głównym komponencie, powinnien być stanowy (bo główny), bedzie korzystac z stanów głównie. ponoć xd
const App = () => {
  return (
    <div>
      <Header />
      <Blog />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
