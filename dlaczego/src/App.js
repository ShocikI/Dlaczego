import React from "react";
import './App.css';
import NavBar from './modules/NavBar'

class App extends React.Component{

    state = {isLogged: true};

    render() {
        return (
            <div className="App">
                <NavBar isLogged={this.state.isLogged}>
                </NavBar>
            </div>
        );
    }
}

export default App;
