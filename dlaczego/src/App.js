import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from "./main_separation/navbar/NavBar"
import SideBar from "./main_separation/sidebar/SideBar"
import Window from "./main_separation/window/Window"
import SearchBar from "./main_separation/search_bar/SearchBar"
import './app.sass'

class App extends React.Component {

  state = {
    isLogged: false
  }

  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className="SearchBarImitation"/>
            <div className="NavBarImitation"/>
            <div className="SideBarImitation"/>
            <SearchBar/>
            <NavBar isLogged={this.state.isLogged}/>
            <SideBar className="SideBar"
                     isLogged={this.state.isLogged}/>
            <Window className="Window"/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
