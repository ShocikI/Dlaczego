import React from "react"
import styles from "../links.module.sass"
import { NavLink } from "react-router-dom"

function NavLinks() {
    return(
        <div className={styles.standard}>
            <ul>
                <li>
                    <NavLink to="/"
                             className={styles.links}
                    >Strona główna</NavLink>
                </li>
                <li>
                    <NavLink to="/profile"
                             className={styles.links}
                    >Profil</NavLink>
                </li>
                <li>
                    <NavLink to="/addquestion"
                             className={styles.links}
                    >Zapytaj</NavLink>
                </li>
                <li>
                    <NavLink to="/settings"
                             className={styles.links}
                    >Ustawienia</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavLinks