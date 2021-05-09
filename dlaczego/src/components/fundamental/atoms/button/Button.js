import React from "react"
import PropTypes from "prop-types"
import styles from './button.module.sass'

const propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

function Button(props) {
    return (
     <button
         className={styles.standard}
         type={props.type}
         onClick={props.onClick}
     >Zatwierdź</button>
    )
}

export default Button