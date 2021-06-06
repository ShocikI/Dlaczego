import React from "react"
import styles from "./sidebar.module.sass"
import SearchResult from "../../components/fundamental/results/search_result/SearchResult";
import WOQuestionFrame from "../../components/frames/wo_question_frame/WOQuestionFrame";
import axios from "axios";

class SideBar extends React.Component {

    state = {
        data: []
    }

    async fetchData() {
        try {
            const res = await axios.get('https://localhost:8000/')
            this.setState({data: res.data.withoutAnswers})
            console.log(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.fetchData()

    }

    render(props) {
        return (
            <div className={styles.standard}>
                {this.props.isLogged ?
                    <SearchResult/> :
                    <WOQuestionFrame data={this.state.data}/>
                }
            </div>
        );
    }
}

export default SideBar;