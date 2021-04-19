import React from "react";
import '../css/SideBar.css';
import SearchResult from './SearchResult';
import Forms from './Forms';

function SideBar(props) {
    return (
        <div className="side_bar">
            {props.isLogged ?
                <SearchResult/> :
                <Forms/>
            }
        </div>
    );
}

export default SideBar;