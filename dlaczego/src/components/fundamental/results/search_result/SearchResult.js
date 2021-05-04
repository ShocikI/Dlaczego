import React from "react"
import styles from './searchresult.module.sass'
import QuestionResult from "../question_result/QuestionResult"
import UserResult from "../user_result/UserResult"

function SearchResult(){
    return(
        <div className={styles.standard}>
            <div>
                <h2>Wyszukane pytania:</h2>
                <QuestionResult/>
            </div>
            <div>
                <h2>Wyszukani użytkownicy:</h2>
                <UserResult/>
            </div>
        </div>
    )
}

export default SearchResult