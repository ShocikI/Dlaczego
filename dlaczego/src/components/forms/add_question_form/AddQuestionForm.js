import React from "react"
import Button from "../../fundamental/atoms/button/Button"
import Textarea from "../../fundamental/atoms/textarea/Textarea"
import styles from './addquestionform.module.sass'

class AddQuestionForm extends React.Component{

    async sendQuestion() {
        // tu bedzie axios
        console.log("sendQuestion")
    }

    render() {
        return(
            <form className={styles.standard}
                  onSubmit={this.sendQuestion}>
                <Textarea
                    placeholder="Dlaczego..?"
                    rows={5}
                />
                <Button type="submit"/>
            </form>
        );
    }
}

export default AddQuestionForm