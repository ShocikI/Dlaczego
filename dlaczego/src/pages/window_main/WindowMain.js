import React from "react"
import styles from '../windowstandard.module.sass'
import axios from "axios";

class WindowMain extends React.Component {

    state = {
        data: []
    }

    async componentDidMount()
    {
        try {
            const res = await axios.get('https://localhost:8000/')
            this.setState({data: res.data})
        } catch (err){
            console.log(err);
        }
    }

    render() {
        return(
            <div className={styles.standard}>
                <h2>Dzisiejsze pytania:</h2>
                <p>{this.state.data[0]}</p>
                <p>Miejsce na pytania</p>
                <p>najpierw mapowanie potem wrzucenie tu calego contentu</p>
            </div>
        )
    }
}

export default WindowMain