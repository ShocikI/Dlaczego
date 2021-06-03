import React from "react"
import axios from "axios"
import styles from "./registrationform.module.sass"
import Input from "../../fundamental/atoms/input/Input"
import Button from "../../fundamental/atoms/button/Button"

class RegistrationForm extends React.Component {


    samePasswords(pass, confPass) {
        return pass === confPass;
    }

    register = async e => {
        e.preventDefault();

        if (!this.samePasswords(e.target.password.value, e.target.passwordConfirm.value)) {
                // TODO validation()
            return
        }

        const userData = {
            email:      e.target.email.value,
            login:      e.target.login.value,
            password:   e.target.password.value,
            telnumber:  e.target.telnumber.value
        }

        const requestOptions = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
                'Allow': 'GET, POST, OPTIONS, PUT, DELETE'
            },
            mode :'cors'
        }

        try {
            const response = await axios.post('http://localhost:8000/register', userData, requestOptions)
            console.log(response)
        } catch (ex) {
            console.log(ex)
        }
    }

    render() {
        return(
            <div className={styles.flex}>
                <form className={styles.standard}
                      onSubmit={(e) => this.register(e)}>
                    <h2>Zarejestruj się</h2>
                    <Input
                        name={"email"}
                        type={"email"}
                        placeholder={"email"}
                        maxLength={255}
                        />
                    <Input
                        name={"login"}
                        type={"text"}
                        placeholder={"login"}
                        maxLength={255}
                        />
                    <Input
                        name={"password"}
                        type={"password"}
                        placeholder={"hasło"}
                        maxLength={255}
                        />
                    <Input
                        name={"passwordConfirm"}
                        type={"password"}
                        placeholder={"powtórz hasło"}
                        maxLength={255}
                        />
                    <Input
                        name={"telnumber"}
                        type={"text"}
                        placeholder={"number telefonu"}
                        maxLength={9}
                        />
                    <Button type="submit"/>
                </form>
            </div>
        )
    }
}

export default RegistrationForm