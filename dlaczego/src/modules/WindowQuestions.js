import React from "react";
import '../css/Window.css';

function WindowQuestions(props) {
    // const questions = props.map(item => <li className="questions">{item}</li>)

    return (
        <>
            <div className="window_question">
                <h1>Dzisiejsze pytania</h1>
                {/*{{questions}}*/}
                Tu będą pytania<br/>
                Trzeba polaczenia z baza danych<br/>
                Trzeba ogarnac jak to zrobic w react'cie
            </div>
        </>
    );
}

export default WindowQuestions;