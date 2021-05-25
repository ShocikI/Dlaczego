import React from "react"
import {Route, Switch} from "react-router-dom";
import WindowAddQuestion from "../../pages/window_add_question/WindowAddQuestion";
import WindowProfile from "../../pages/window_profile/WindowProfile";
import WindowSettings from "../../pages/window_settings/WindowSettings";
import WindowMain from "../../pages/window_main/WindowMain"
import WindowQuestion from "../../pages/window_question/WindowQuestion"
import WindowLogin from "../../pages/window_login/WindowLogin";
import WindowRegister from "../../pages/window_register/WindowRegister";
import styles from './window.module.sass'
import WindowLoading from "../../pages/window_loading/WindowLoading";

class Window extends React.Component {

    render(props) {
        return(
            <div className={styles.flex}>
                <div className={styles.standard}>
                    <Switch>
                        <Route exact path="/"
                               component={WindowMain}
                        />
                        <Route path="/profile"
                               component={WindowProfile}
                        />
                        <Route path="/settings"
                               component={WindowSettings}
                        />
                        <Route path="/addquestion"
                               component={WindowAddQuestion}
                        />
                        <Route path="/login"
                               component={WindowLogin}
                        />
                        <Route path="/register"
                               component={WindowRegister}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Window