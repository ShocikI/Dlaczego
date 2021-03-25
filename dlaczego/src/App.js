import React from "react";
import './App.css';
import NavBar from './modules/NavBar'
import SideBar from './modules/SideBar';
import Window from './modules/Window';
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {

    state = {isLogged: true};

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar isLogged={this.state.isLogged}/>
                    <SideBar isLogged={this.state.isLogged}/>
                    <Window/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
