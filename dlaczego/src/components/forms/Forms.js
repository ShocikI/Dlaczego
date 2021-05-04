import React from "react"
import styles from './forms.module.sass'
import LoginForm from "./login_form/LoginForm";
import RegistrationForm from "./registration_form/RegistrationForm";

function Forms() {
    return(
        <div className={styles.standard}>
            <LoginForm/>
            <RegistrationForm/>
        </div>
    )
}

export default Forms