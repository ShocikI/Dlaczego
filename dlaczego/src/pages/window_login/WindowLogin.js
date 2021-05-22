import React from "react"
import styles from './windowlogin.module.sass'
import axios from "axios";
import LoginForm from "../../components/forms/login_form/LoginForm";

class WindowLogin extends React.Component {

    state = {
        data: []
    }

    async login()
    {
        try {
            const res = await axios.post('https://localhost:8000/login')
            this.setState({data: res.data})
        } catch (err){
            console.log(err);
        }
    }

    render() {
        return(
            <div className={styles.standard}>
                <LoginForm/>
            </div>
        )
    }
}

export default WindowLogin