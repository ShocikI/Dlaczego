import React from "react";
import '../css/Window.css';

function WindowQuestions({data}) {

    return (
        <>
            <div className="window_question">
                <h1>Dzisiejsze pytania</h1>
                <h2>{data[0]}</h2>
                Tu będą pytania<br/>
                Trzeba polaczenia z baza danych<br/>
                Trzeba ogarnac jak to zrobic w react'cie
            </div>
        </>
    );
}

export default WindowQuestions;