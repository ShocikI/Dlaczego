import React from "react";
import axios from "axios";
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
                    <Window isLogged={this.state.isLogged}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
