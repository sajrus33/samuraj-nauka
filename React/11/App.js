// Check box  for horror movie :P
const PositiveMessage = () => <p>Możesz obejrzeć film.</p>;
const NegativeMessage = () => <p>Nie możesz obejrzeć filmu.</p>;

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
    displayMessage = () => {
        if (this.state.isFormSubmitted && this.state.isConfirmed) {
            return <PositiveMessage />
        } else if (this.state.isFormSubmitted) {
            return <NegativeMessage />
        } else {
            return null;
        }
    };
    render() {
        console.log(this.state.isConfirmed);
        return (
            <React.Fragment>
                <h1> Kup bilet na horror roku!</h1>
                <form onSubmit={this.handleForm}>
                    <input type="checkbox" id="age"
                        onChange={this.handleCheckbox} checked={this.state.isConfirmed}
                    />
                    <label htmlForm="age">Mam co najmniej 16 lat</label>
                    <br />
                    <button type="submit" >Kup bilet</button>
                </form>
                {this.displayMessage()}
            </React.Fragment>
        );


    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);
// ReactDOM.render(<checkConfirmMovie />, document.getElementById("root"));