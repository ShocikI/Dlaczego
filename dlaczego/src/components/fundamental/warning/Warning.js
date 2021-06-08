import React from 'react'
import styles from './warning.module.sass'

function Warning(props) {
    return (
        <p className={styles.error}>
            {props.data}
        </p>
    )
}

export default Warning