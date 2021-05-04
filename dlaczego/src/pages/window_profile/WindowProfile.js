import React from "react"
import styles from "./windowprofile.module.sass"

class WindowProfile extends React.Component {

    render() {
        return(
            <div className={styles.standard}>
                <h2>Login</h2>
                <h3>Data dołączenia</h3>
                {
                 <p className={styles.admin}>Admin</p>
                }
                <p>User</p>
                <h2>Pytania użytkownika:</h2>
                <h3>I tu leci tablica pytan w liście oczywiście w h3</h3>
            </div>
        )
    }
}

export default WindowProfile