import React from "react"
import { withRouter } from "react-router"
import styles from './windowquestion.module.sass'
import AddAnswerForm from "../../components/forms/add_answer_form/AddAnswerForm";
import QuestionFrame from "../../components/frames/question_frame/QuestionFrame";
import AnswerFrame from "../../components/frames/answer_frame/AnswerFrame";
import axios from "axios";
import WindowLoading from "../window_loading/WindowLoading";
import Warning from "../../components/fundamental/warning/Warning";

class WindowQuestion extends React.Component{

    state = {
        question: [],
        answer: [],
        isLoaded: false,
        status: true,
        message: []
    }

    fetchData = async id => {
        this.setState({isLoaded: false})
        try {
            const res = await axios.get('https://localhost:8000/question/'+id)
            if(res.status == 202) {
                this.setState({status: false})
                this.setState({message: res.data})
            } else {
                this.setState({question: res.data.question[0]})
                this.setState({answer: res.data.answers})
            }
        } catch (err) {
            console.log(err);
        }
        this.setState({isLoaded: true})
    }

    componentDidMount()
    {
        const id = this.props.match.params.id
        this.fetchData(id)
    }

    render() {
        return (
            (this.state.status) ?
                (this.state.isLoaded) ?
                <div className={styles.standard}>
                    <QuestionFrame data={this.state.question}/>
                    <ul>
                        {this.state.answer.map(function(item) {
                            return <li key={item.id}>
                                <AnswerFrame data={item}/>
                            </li>
                        })}
                    </ul>
                    <AddAnswerForm/>
                </div> :
                <WindowLoading/> :
            <Warning data={this.state.message}/>
        )
    }
}

export default withRouter(WindowQuestion)