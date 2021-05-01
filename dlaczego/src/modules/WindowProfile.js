import React from "react";
import '../css/Window.css';

function WindowProfile() {

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