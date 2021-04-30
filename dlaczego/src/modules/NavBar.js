import React from 'react';
import '../css/NavBar.css';
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";

function NavBar(props) {
    return (
      <>
        <div className="navigation">
            <SearchBar/>
            {(props.isLogged) ? <NavLinks/> : null }
        </div>
      </>
    );
}

export default NavBar;