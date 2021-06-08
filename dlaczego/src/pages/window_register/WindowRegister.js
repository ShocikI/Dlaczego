import React from "react"
import styles from '../windowstandard.module.sass'
import axios from "axios";
import RegistrationForm from "../../components/forms/registration_form/RegistrationForm";

class WindowRegister extends React.Component {

    state = {
        data: []
    }

    async register()
    {
        try {
            const res = await axios.post('https://localhost:8000/')
            this.setState({data: res.data})
        } catch (err){
            console.log(err);
        }
    }

    render() {
        return(
            <div className={styles.standard}>
                <RegistrationForm/>
            </div>
        )
    }
}

export default WindowRegister