import React from 'react'
import Textarea from "../../fundamental/atoms/textarea/Textarea";
import Button from "../../fundamental/atoms/button/Button";
import styles from './addanswerform.module.sass'

class AddAnswerForm extends React.Component {

    async addAnswer() {
        // axios
        console.log("add answer")
    }

    render() {
        return (
            <form className={styles.standard}>
                <Textarea
                    placeholder="Nooo... Dlaczego?"
                    rows={3}
                />
                <Button onClick={this.addAnswer()}/>
            </form>
        )
    }
}

export default AddAnswerForm