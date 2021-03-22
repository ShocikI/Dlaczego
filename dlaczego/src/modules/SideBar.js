import React from "react";
import '../css/SideBar.css';
import Categories from './Categories';
import Forms from './Forms';

function SideBar(props) {
    return (
        <div className="side_bar">
            {props.isLogged ?
                <Categories/> :
                <Forms/>
            }
        </div>
    );
}

export default SideBar;