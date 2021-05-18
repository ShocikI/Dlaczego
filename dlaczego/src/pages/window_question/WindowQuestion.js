import React from "react"
import styles from './windowquestion.module.sass'
import AddAnswerForm from "../../components/forms/add_answer_form/AddAnswerForm";
import QuestionFrame from "../../components/frames/question_frame/QuestionFrame";
import AnswerFrame from "../../components/frames/answer_frame/AnswerFrame";
import axios from "axios";

class WindowQuestion extends React.Component{

    state = {
        data: []
    }

    async componentDidMount()
    {
        try {
            const res = await axios.get('https://localhost:8000/{question_id}')
            this.setState({data: res.data})
        } catch (err){
            console.log(err);
        }
    }

    render() {
        return (
            <div className={styles.standard}>
                <QuestionFrame question={this.state.data[0]}/>
                <p>Tu bedzie mapowanie odpowiedzi</p>
                <AnswerFrame answer={this.state.data[1]}/>
                <AnswerFrame answer={this.state.data[2]}/>
                <AddAnswerForm/>
            </div>
        )
    }
}

export default WindowQuestion