import React from 'react'
import styles from './answerframe.module.sass'

class AnswerFrame extends React.Component {

    async getData() {
        //axios
        console.log("get data")
    }

    render() {
        return(
            <div className={styles.standard}>
                <div className={styles.user}>
                    <h1>Login</h1>
                    <h2>Rola</h2>
                    <h2>createdAt</h2>
                </div>
                <div className={styles.content}>
                    <h1>Tu jest treśc</h1>
                </div>
            </div>
        )
    }
}

export default AnswerFrame