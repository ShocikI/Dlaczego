import React from "react"
import styles from "./woquestionframe.module.sass"
import {NavLink} from "react-router-dom";

class WOQuestionFrame extends React.Component {

    render(props) {
        return (
            <div className={styles.standard}>
                <h2>Pytania bez odpowiedzi:</h2>
                <ul className={styles.flex}>
                    {this.props.data.map(function(item) {
                        return <li key={item.id}>
                            <NavLink to={'/question/'+item.id}
                                     className={styles.links}
                                     id={item.id}>
                                {item.content}
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default WOQuestionFrame