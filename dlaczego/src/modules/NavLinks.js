import React from "react";
import '../css/NavLinks.css';
import { NavLink } from "react-router-dom";

function NavLinks() {
    return (
        <>
            <ul className="nav_links">
                <li className="link">
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/addquestion">
                        Add Question
                    </NavLink>
                </li>
                <li className="link">
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </li>
            </ul>
        </>
    );
}

export default NavLinks;