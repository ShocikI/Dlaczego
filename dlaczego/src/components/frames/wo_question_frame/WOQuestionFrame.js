import React from "react"
import axios from "axios";
import styles from "./woquestionframe.module.sass"

class WOQuestionFrame extends React.Component {

    state = {
        data: []
    }

    // async componentDidMount() {
    //     try {
    //         const res = await axios.get("http//localhost:8000")
    //         this.setState({data: res.data})
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    //
    // questions = () => {
    //     if (!(state.data.isEmpty())) {
    //         state.data.map((item) => {
    //             <li className={styles.links}>{item}</li>
    //         })
    //     } else {
    //          setState({data: "Brak pytań"})
    //     }
    // }

    render() {
        return (
            <div className={styles.standard}>
                <h2>Pytania bez odpowiedzi:</h2>
                <ul className={styles.flex}>
                    {/*{this.questions}*/}
                    <li className={styles.links}>Dlaczego stoły mają 4 nogi?</li>
                    <li className={styles.links}>Dlaczego ubrania nie rozszerzają się w nieskończoność?</li>
                </ul>
            </div>
        )
    }
}

export default WOQuestionFrame