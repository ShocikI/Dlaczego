import React from 'react'
import styles from '../standardframe.module.sass'

class AnswerFrame extends React.Component {

    render(props) {
        return(
            <div className={styles.standard}>
                <div className={styles.user}>
                    <h1>{this.props.data.login}</h1>
                    {
                        this.props.data.admin ?
                            <h2>Admin</h2> :
                            <h2>User</h2>
                    }
                    <h2>{this.props.data.created_at}</h2>
                </div>
                <div className={styles.content}>
                    <h1>{this.props.data.content}</h1>
                </div>
            </div>
        )
    }
}

export default AnswerFrame