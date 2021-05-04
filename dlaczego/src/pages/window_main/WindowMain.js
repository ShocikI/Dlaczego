import React from "react"
import styles from './windowmain.module.sass'

class WindowMain extends React.Component {

    render() {
        return(
            <div className={styles.standard}>
                <h2>Dzisiejsze pytania:</h2>
                Miejsce na pytania
                najpierw mapowanie potem wrzucenie tu calego contentu
            </div>
        )
    }
}

export default WindowMain