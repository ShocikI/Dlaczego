import React from "react";
import '../css/Window.css';

function WindowAddQuestion () {
    return (
        <>
            <form className="window_add_question" method="POST">
                <textarea name="question"
                          placeholder="Dlaczego..?"
                          rows = "7"
                          resize = "none"
                />
                <button type="submit">
                    Zatwierdź
                </button>
            </form>
        </>
    );
}

export default WindowAddQuestion;