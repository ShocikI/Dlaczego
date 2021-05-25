import React from "react"
import styles from './loginform.module.sass'
import Input from "../../fundamental/atoms/input/Input";
import Button from "../../fundamental/atoms/button/Button";

class LoginForm extends React.Component {

    async login() {
        // axios
        console.log("login")
    }

    render() {
        return(
            <div className={styles.flex}>
                <form className={styles.standard}
                      onSubmit={this.login}>
                    <h2>Zaloguj się</h2>
                    <Input
                        name={"login"}
                        placeholder={"login"}
                        maxLength={255}
                        type={"text"}
                        />
                    <Input
                        name={"password"}
                        placeholder={"hasło"}
                        maxLength={255}
                        type={"password"}
                        />
                    <Button type="submit"/>
                </form>
            </div>
        )
    }
}

export default LoginForm