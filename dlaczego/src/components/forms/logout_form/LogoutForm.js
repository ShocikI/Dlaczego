import React from "react"
import styles from "./logoutform.module.sass"
import Button from "../../fundamental/atoms/button/Button";

class LogoutForm extends React.Component {

    async logout() {
        // axios
        console.log("logout")
    }

    render() {
        return(
            <form className={styles.standard}>
                <h2>Wyloguj się</h2>
                <Button onClick={this.logout()}/>
            </form>
        )
    }
}

export default LogoutForm