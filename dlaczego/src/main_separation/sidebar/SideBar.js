import React from "react"
import styles from "./sidebar.module.sass"
import SearchResult from "../../components/fundamental/results/search_result/SearchResult";
import Forms from "../../components/forms/Forms";

class SideBar extends React.Component {

    render(props) {
        return (
            <div className={styles.standard}>
                {this.props.isLogged ?
                    <SearchResult/> :
                    <Forms/>
                }
            </div>
        );
    }
}

export default SideBar;