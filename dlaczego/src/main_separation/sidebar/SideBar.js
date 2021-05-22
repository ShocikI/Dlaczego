import React from "react"
import styles from "./sidebar.module.sass"
import SearchResult from "../../components/fundamental/results/search_result/SearchResult";
import WOQuestionFrame from "../../components/frames/wo_question_frame/WOQuestionFrame";

class SideBar extends React.Component {

    render(props) {
        return (
            <div className={styles.standard}>
                {this.props.isLogged ?
                    <SearchResult/> :
                    <WOQuestionFrame/>
                }
            </div>
        );
    }
}

export default SideBar;