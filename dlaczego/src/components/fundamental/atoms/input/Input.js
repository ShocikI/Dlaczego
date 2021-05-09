import React from "react"
import PropTypes from "prop-types"
import styles from './input.module.sass'

function Input(props) {

    const propTypes = {
        name: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        maxLength: PropTypes.number.isRequired,
        onChange: PropTypes.string.isRequired,
        type: PropTypes.string,
    }

    return(
        <input
            className={styles.standard}
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            maxLength={props.maxLength}
        ></input>
    )
}

export default Input