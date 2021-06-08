import React from 'react'
import styles from '../standardframe.module.sass'
import {NavLink} from "react-router-dom";

class QuestionFrame extends React.Component {

    render(props) {
        return(
            <div className={styles.standard}>
                <div className={styles.user}>
                    <NavLink to={'/user/'+this.props.data.userId}
                             className={styles.links}>
                        {this.props.data.login}
                    </NavLink>
                    {
                        this.props.data.admin ?
                        <h2 className={styles.admin}>Admin</h2> :
                        <h2>User</h2>
                    }
                    <h2>{this.props.data.created_at.substr(0,10)}</h2>
                </div>
                <div className={styles.content}>
                    <h1>{this.props.data.content}</h1>
                </div>
            </div>
        )
    }
}

export default QuestionFrame