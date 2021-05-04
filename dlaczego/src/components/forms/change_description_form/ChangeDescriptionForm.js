import React from "react";
import Button from "../../fundamental/atoms/button/Button";
import Textarea from "../../fundamental/atoms/textarea/Textarea";
import styles from './changedescriptionform.module.sass'

class ChangeDescriptionForm extends React.Component {

    async changeDescription() {
        // axios
        console.log("changeDescription")
    }

    render() {
        return (
            <form className={styles.standard}>
                <h2>Zmień opis</h2>
                <Textarea
                    placeholder="Napisz coś o sobie."
                    rows={5}
                />
                <Button onClick={this.changeDescription()}/>
            </form>
        )
    }
}

export default ChangeDescriptionForm
