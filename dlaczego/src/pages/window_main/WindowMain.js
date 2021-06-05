import React from "react"
import { NavLink } from "react-router-dom"
import styles from '../windowstandard.module.sass'
import axios from "axios"
import WindowLoading from "../window_loading/WindowLoading"

class WindowMain extends React.Component {

    state = {
        data: [],
        isLoaded: false
    }

    questions = []

    async componentDidMount()
    {
        this.setState({isLoaded: false})
        try {
            const res = await axios.get('https://localhost:8000/')
            this.setState({data: res.data})
            this.questions = this.state.data.map(function (item) {
                return <li key={item.id}>
                    <NavLink to={'/question/'+item.id}
                        className={styles.links}
                        id={item.id}>
                    {item.content}
                    </NavLink>
                </li>
            })
        } catch (err){
            console.log(err);
        }
        this.setState({isLoaded: true})
    }

    render() {
        return(
            (this.state.isLoaded) ?
            <div className={styles.standard}>
                <h2>Dzisiejsze pytania:</h2>
                <ul>
                    {this.questions}
                </ul>
            </div> :
            <WindowLoading/>
        )
    }
}

export default WindowMain