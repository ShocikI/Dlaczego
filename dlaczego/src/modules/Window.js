import React from "react";
import '../css/Window.css';
import WindowAddQuestion from "./WindowAddQuestion";
import WindowQuestions from "./WindowQuestions";
import WindowSettings from "./WindowSettings";
import WindowTitle from "./WindowTitle";
import WindowProfile from "./WindowProfile";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function Window(props) {

    return (
        <>
            <div className="window">
                <div className="window_align">
                    {props.isLogged ?
                        <Switch>
                            <Route path="/addquestion"
                                   component={WindowAddQuestion}
                            />
                            <Route path="/profile"
                                   component={WindowProfile}
                            />
                            <Route path="/"
                                   component={WindowQuestions}
                            />
                            <Route path="/settings"
                                   component={WindowSettings}
                            />
                            <Route path="/title"
                                   component={WindowTitle}
                            />
                        </Switch> :
                        <WindowQuestions/> }
                </div>
            </div>
        </>
    );
}

export default Window;