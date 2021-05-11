import React from "react"
import {Route, Switch} from "react-router-dom";
import WindowAddQuestion from "../../pages/window_add_question/WindowAddQuestion";
import WindowProfile from "../../pages/window_profile/WindowProfile";
import WindowSettings from "../../pages/window_settings/WindowSettings";
import WindowMain from "../../pages/window_main/WindowMain"
import WindowQuestion from "../../pages/window_question/WindowQuestion"
import styles from './window.module.sass'
import WindowLoading from "../../pages/window_loading/WindowLoading";

class Window extends React.Component {

    // paths = (windowLinks) => {
    // windowLinks.map((link) => {
    //     <Route path={link[0]} component={link[1]}/>;
    //     });
    // }

    render(props) {
        return(
            <div className={styles.flex}>
                <div className={styles.standard}>
                    {this.props.isLogged ?
                        <Switch>
                            <Route path={"/"}
                                   component={WindowMain}
                            />
                            <Route path={"/profile"}
                                   component={WindowProfile}
                            />
                            <Route path={"/settings"}
                                   component={WindowSettings}
                            />
                            <Route path={"/addquestion"}
                                   component={WindowAddQuestion}
                            />
                        </Switch> :
                        <WindowMain data={this.props.data[0]}/>
                    }
                </div>
            </div>
        );
    }
}

export default Window