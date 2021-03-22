import React from "react";
import '../css/NavLinks.css';


function NavLinks() {
    const items = ["Home", "Profile", "AddQuestion", "Settings"];
    const links = items.map(item => <li class="link">{item}</li>);

    return (
        <>
            <ul className="nav_links">
                {links}
            </ul>
        </>
    );
}

export default NavLinks;