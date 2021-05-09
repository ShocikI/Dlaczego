import React from 'react'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import NavBar from "./main_separation/navbar/NavBar"
import SideBar from "./main_separation/sidebar/SideBar"
import Window from "./main_separation/window/Window"
import SearchBar from "./main_separation/search_bar/SearchBar"
import './app.sass';

class App extends React.Component {

  state = {
    data: [],
    isLogged: false
  }

  async componentDidMount()
  {
    try {
      const res = await axios.get('https://localhost:8000/')
      this.setState({data: res.data})
    } catch (err){
      console.log(err);
    }
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
            <Window className="Window"
                    data={this.state.data}
                    isLogged={this.state.isLogged}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
