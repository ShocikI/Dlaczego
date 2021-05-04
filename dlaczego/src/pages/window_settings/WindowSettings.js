import React from "react"
import styles from './windowsettings.module.sass'
import LogoutForm from "../../components/forms/logout_form/LogoutForm";
import ChangeDescriptionForm from "../../components/forms/change_description_form/ChangeDescriptionForm";
import ChangePasswordForm from "../../components/forms/change_password_form/ChangePasswordForm";

function WindowSettings() {
    return (
        <div className={styles.standard}>
            <LogoutForm/>
            <ChangeDescriptionForm/>
            <ChangePasswordForm/>
        </div>
    )
}

export default WindowSettings