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
            <form className={styles.standard}
                  onSubmit={this.addAnswer}>
                <Textarea
                    placeholder="Nooo... Dlaczego?"
                    rows={3}
                />
                <Button type="submit"/>
            </form>
        )
    }
}

export default AddAnswerForm