import React from "react"
import styles from './changepasswordform.module.sass'
import Input from "../../fundamental/atoms/input/Input";
import Button from "../../fundamental/atoms/button/Button";

class ChangePasswordForm extends React.Component{

    async changePassword() {
        // axios
        console.log("changePassword")
    }

    render() {
        return(
            <form className={styles.standard}>
                <h2>Zmień hasło</h2>
                <Input
                    placeholder="stare hasło"
                    maxLength={255}
                    />
                <Input
                    placeholder="nowe hasło"
                    maxLength={255}
                    />
                <Input
                    placeholder="powtórz nowe hasło"
                    maxLength={255}
                    />
                <Button onClick={this.changePassword()}/>
            </form>
        )
    }
}

export default ChangePasswordForm