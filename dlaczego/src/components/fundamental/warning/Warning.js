import React from 'react'
import PropTypes from 'prop-types'
import styles from './warning.module.sass'

const propTypes = {
    msg: PropTypes.string.isRequired
}

function Warning(props) {
    return (
        <p className={styles.error}>{props.msg}</p>
    )
}

Warning.propTypes = propTypes

export default Warning