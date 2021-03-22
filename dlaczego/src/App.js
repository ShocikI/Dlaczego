import React from "react";
import './App.css';
import NavBar from './modules/NavBar'
import SideBar from './modules/SideBar';
import Window from './modules/Window';

class App extends React.Component{

    state = {isLogged: true};

    render() {
        return (
            <div className="App">
                <NavBar isLogged={this.state.isLogged}>
                </NavBar>
                <SideBar isLogged={this.state.isLogged}>
                </SideBar>
                <Window>
                </Window>
            </div>
        );
    }
}

export default App;
