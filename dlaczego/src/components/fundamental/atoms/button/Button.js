import React from "react"
import PropTypes from "prop-types"
import styles from './button.module.sass'

const propTypes = {
    onClick: PropTypes.func.isRequired
}

function Button(props) {
    return (
     <button
         className={styles.standard}
         onClick={props.onClick}
     >Zatwierdź</button>
    )
}

export default Button