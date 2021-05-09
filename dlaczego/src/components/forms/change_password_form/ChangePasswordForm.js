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
            <form className={styles.standard}
                  onSubmit={this.changePassword}>
                <h2>Zmień hasło</h2>
                <Input
                    name={"current_password"}
                    placeholder="obecne hasło"
                    maxLength={255}
                    />
                <Input
                    name={"new_password"}
                    placeholder="nowe hasło"
                    maxLength={255}
                    />
                <Input
                    name={"new_password_rpt"}
                    placeholder="powtórz nowe hasło"
                    maxLength={255}
                    />
                <Button type="submit"/>
            </form>
        )
    }
}

export default ChangePasswordForm