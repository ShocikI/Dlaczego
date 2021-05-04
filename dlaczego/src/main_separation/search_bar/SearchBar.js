import React from "react"
import styles from "./searchbar.module.sass"
import Input from "../../components/fundamental/atoms/input/Input";

class SearchBar extends React.Component {

    async search() {
        // axios
        console.log("search")
    }

    render() {
        return (
            <div className={styles.standard}>
                <form>
                    <Input
                        placeholder={"Szukaj"}
                        maxLength={1000}
                        />
                    <span onClick={() => {this.search()}}>
                        <i className="fas fa-search"/>
                    </span>
                </form>
            </div>
        )
    }
}

export default SearchBar