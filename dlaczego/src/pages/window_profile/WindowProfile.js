import React from "react"
import { withRouter } from "react-router"
import styles from "./windowprofile.module.sass"
import axios from "axios";
import WindowLoading from "../window_loading/WindowLoading";
import Warning from "../../components/fundamental/warning/Warning";
import { NavLink } from "react-router-dom";

class WindowProfile extends React.Component {

    state = {
        user: [],
        question: [],
        isLoaded: false,
        status: true,
        message: []
    }

    fetchData = async id => {
        this.setState({isLoaded: false})
        try {
            const res = await axios.get('https://localhost:8000/user/'+id)
            if(res.status == 202) {
                this.setState({status: false})
                this.setState({message: res.data})
            } else {
                this.setState({user: res.data.user[0]})
                this.setState({question: res.data.question})
            }
        } catch (err) {
            console.log(err);
        }
        this.setState({isLoaded: true})
    }

    componentDidMount()
    {
        const id = this.props.match.params.id
        this.fetchData(id)
    }

    render() {
        return(
            (this.state.status) ?
                (this.state.isLoaded) ?
                <div className={styles.standard}>
                    <h1>{this.state.user.login}</h1>
                    <h2>Data dołączenia: {this.state.user.created_at.substr(0,10)}</h2>
                    {
                        this.state.user.admin ?
                            <h2 className={styles.admin}>Admin</h2> :
                            <h2>User</h2>
                    }
                    <h2>Opis:<br/>{this.state.user.description}</h2>
                    <h2>Pytania użytkownika:</h2>
                    <ul>
                        {this.state.question.map(function(item) {
                            return <li key={item.id}>
                                <NavLink to={'/question/'+item.id}
                                className={styles.links}
                                id={item.id}>
                                {item.content}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </div> :
                <WindowLoading/> :
            <Warning data={this.state.message}/>
        )
    }
}

export default withRouter(WindowProfile)