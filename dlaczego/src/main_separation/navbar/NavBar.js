import React from 'react'
import styles from './navbar.module.sass'
import NavLinks from "../../components/links/navlinks/NavLinks"
import SearchBar from "../search_bar/SearchBar";
import StandardLinks from "../../components/links/standardlinks/StandardLinks";

class NavBar extends React.Component{


    render(props) {
        return (
            <div className={styles.standard}>
                <SearchBar/>
                {(this.props.isLogged) ? <NavLinks/> : <StandardLinks/>}
            </div>
        );
    }
}

export default NavBar;