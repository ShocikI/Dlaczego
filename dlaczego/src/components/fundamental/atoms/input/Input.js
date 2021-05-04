import React from "react"
import PropTypes from "prop-types"
import styles from './input.module.sass'

function Input(props) {

    const propTypes = {
        placeholder: PropTypes.string.isRequired,
        maxLength: PropTypes.number.isRequired,
        onChange: PropTypes.string.isRequired,
        type: PropTypes.string,
        value: PropTypes.string,
    }

    return(
        <input
            className={styles.standard}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            maxLength={props.maxLength}
            value={props.value}
        ></input>
    )
}

export default Input