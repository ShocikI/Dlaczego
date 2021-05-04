import React from "react"
import styles from "./registrationform.module.sass"
import Input from "../../fundamental/atoms/input/Input"
import Button from "../../fundamental/atoms/button/Button"

class RegistrationForm extends React.Component {

    async register() {
        // axios
        console.log("register")
    }

    render() {
        return(
            <form className={styles.standard}>
                <h2>Zarejestruj się</h2>
                <Input
                    type={"email"}
                    placeholder={"email"}
                    maxLength={255}
                    />
                <Input
                    type={"text"}
                    placeholder={"login"}
                    maxLength={255}
                    />
                <Input
                    type={"password"}
                    placeholder={"hasło"}
                    maxLength={255}
                    />
                <Input
                    type={"password"}
                    placeholder={"powtórz hasło"}
                    maxLength={255}
                    />
                <Input
                    type={"text"}
                    placeholder={"number telefonu"}
                    maxLength={9}
                    />
                <Button onClick={this.register()}/>
            </form>
        )
    }
}

export default RegistrationForm