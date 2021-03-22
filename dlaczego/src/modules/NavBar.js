import React from 'react';
import '../css/NavBar.css';
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

function NavBar(props) {
    return (
      <>
        <div class="navigation">
            <SearchBar></SearchBar>
            {props.isLogged ? <NavLinks></NavLinks> : null }
        </div>
      </>
    );
}

export default NavBar;