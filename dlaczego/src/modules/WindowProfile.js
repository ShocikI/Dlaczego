import React from "react";
import '../css/Window.css';

function WindowProfile() {
    // const items = pobieram pytania z bazy danych;
    // const questions = items.map(item => <li className="questions">{item}</li>);

    return (
        <>
            <div className="window_question">
                <div className="user"></div>
                <div className="since"></div>
                <div className="role"></div>
                <div className="description"></div>
                <h2>Pytania użytkownika:</h2>
                {/*{questions}*/}
            </div>
        </>
    );
}

export default WindowProfile;