import React from "react"
import styles from "./windowprofile.module.sass"
import axios from "axios";

class WindowProfile extends React.Component {

    state = {
        data: []
    }

    async componentDidMount()
    {
        try {
            const res = await axios.get('https://localhost:8000/profile/{login}')
            this.setState({data: res.data})
        } catch (err){
            console.log(err);
        }
    }

    render() {
        return(
            <div className={styles.standard}>
                <h2>Login {this.state.data[0]}</h2>
                <h3>Data dołączenia{this.state.data[1]}</h3>
                {
                 <p className={styles.admin}>Admin{this.state.data[2]}</p>
                }
                <p>User{this.state.data[2]}</p>
                <h2>Pytania użytkownika:</h2>
                <h3>I tu leci tablica pytan w liście oczywiście w h3</h3>
                <h3>{this.state.data[3]}</h3>
            </div>
        )
    }
}

export default WindowProfile