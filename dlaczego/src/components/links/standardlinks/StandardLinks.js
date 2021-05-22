import React from "react"
import styles from "./standardlinks.module.sass"
import { NavLink } from "react-router-dom"

function StandardLinks() {
    return(
        <div className={styles.standard}>
            <ul>
                <li>
                    <NavLink to={"/"}
                             className={styles.links}
                    >Strona główna</NavLink>
                </li>
                <li>
                    <NavLink to={"/login"}
                             className={styles.links}
                    >Zaloguj się</NavLink>
                </li>
                <li>
                    <NavLink to={"/register"}
                             className={styles.links}
                    >Zarejestruj się</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default StandardLinks