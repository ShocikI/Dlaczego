import React from 'react'
import styles from './navbar.module.sass'
import NavLinks from "../../components/links/navlinks/NavLinks"
import SearchBar from "../search_bar/SearchBar";

class NavBar extends React.Component{


    render(props) {
        return (
            <div className={styles.standard}>
                <SearchBar/>
                {(this.props.isLogged) ? <NavLinks/> : null}
            </div>
        );
    }
}

export default NavBar;