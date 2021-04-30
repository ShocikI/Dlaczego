import React from "react";
import '../css/Forms.css';

function Forms (props) {
    const login = (
        <form method="POST" action="login">
            <h1>Zaloguj się</h1>
            <input name="login"
                   placeholder="Login"
                   type="text"
            />
            <input name="password"
                   placeholder="Password"
                   type="password"
            />
            <button type="submit">
                Zatwierdź
            </button>
        </form>
    );

    const register = (
        <form method="POST" action="addUser" encType="multipart/form-data">
            <h1>Zarejestruj się</h1>
            <input name="email"
                   placeholder="Email"
                   type="text"
            />
            <input name="login"
                   placeholder="Login"
                   type="text"
            />
            <input name="password"
                   placeholder="Password"
                   type="password"
            />
            <input name="password_rpt"
                   placeholder="Repeat password"
                   type="password"
            />
            <input name="telnumber"
                   placeholder="Telephone number"
                   type="text"
            />
            <button type="submit">
                Zatwierdź
            </button>
        </form>
    );

    return (
        <>
            {login}
            {register}
        </>
    );
}

export default Forms;