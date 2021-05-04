import React from "react"
import PropTypes from "prop-types"
import styles from './textarea.module.sass'

const propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    rows: PropTypes.number
}

function Textarea(props) {
    return (
        <textarea
            className={styles.standard}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            rows={props.rows}
        ></textarea>
    )
}

export default Textarea