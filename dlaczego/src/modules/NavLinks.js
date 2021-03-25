import React from "react";
import '../css/NavLinks.css';
import { NavLink } from "react-router-dom";

function NavLinks() {
    const items = ['home', 'profile', 'addquestion', 'settings'];
    const links = items.map(item =>
        <li className="link">
            <NavLink to="/addquestion">
                {item}
            </NavLink>
        </li>
    );

    return (
        <>
            <ul className="nav_links">
                {links}
            </ul>
        </>
    );
}

export default NavLinks;