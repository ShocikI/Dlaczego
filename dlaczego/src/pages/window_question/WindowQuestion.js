import React from "react"
import styles from './windowquestion.module.sass'
import AddAnswerForm from "../../components/forms/add_answer_form/AddAnswerForm";
import QuestionFrame from "../../components/frames/question_frame/QuestionFrame";
import AnswerFrame from "../../components/frames/answer_frame/AnswerFrame";

function WindowQuestion() {

    return (
        <div className={styles.standard}>
            <QuestionFrame/>
            <AnswerFrame/>
            <AnswerFrame/>
            <AddAnswerForm/>
        </div>
    )
}

export default WindowQuestion