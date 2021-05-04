import React from "react";
import styles from './windowloading.module.sass'
import './windowloading.css'

function WindowLoading() {
    return (
        <div className={styles.standard}>
            <h2>Ładowanie</h2>
            <div className={"lds-ripple"}>
                <div/><div/>
            </div>
        </div>
    )
}

export default WindowLoading