import React from "react";

function WindowTitle() {
    const title_box = (
        <div className="title_align">
            <div className="user_box">
                <div className="user"></div>
                <div className="role"></div>
                <div className="since"></div>
            </div>
            <div className="title_box">
                <div className="content"></div>
            </div>

        </div>
    );

    const add_question = (
        <form className="new_answer" method="POST">
            <textarea name="new_answer"
                      resize="none"
                      placeholder="No dlaczego??"
            >
                  </textarea>
            <button type="submit">
                Zatwierdź
            </button>
        </form>
    );

    return (
        <>
            <div className="window_title">
                {title_box}
                {title_box}
                {add_question}
            </div>
        </>
    );
}

export default WindowTitle;