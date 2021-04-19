import React from "react";
import '../css/Window.css';

function WindowSettings() {

    const change_password = (
        <form className="change_password" method="POST">
            <h2>Zmień hasło</h2>
            <input placeholder="Obecne hasło"
                   name="current_password"
                   type="password"
            />
            <input placeholder="Nowe hasło"
                   name="new_password"
                   type="password"
            />
            <input placeholder="Powtórz nowe hasło"
                   name="rpt_new_password"
                   type="password"
            />
            <button type="submit">Zatwierdź</button>
        </form>
    );

    const change_description = (
        <form className="change_description" method="POST">
            <h2>Zmień opis</h2>
            <textarea name="description"
                      resize="none"
                      maxLength="1000"
                      placeholder="Tu możesz zmienić swój opic profilu, max 1000 znaków"
            >
                  </textarea>
            <button type="submit">Zatwierdź</button>
        </form>
    );

    const logout_button = (
        <form>
            <h2>Wyloguj</h2>
            <button type="submit">Wyloguj</button>
        </form>
    );

    return (
        <>
            <div className="window_settings">
                {logout_button}
                {change_password}
                {change_description}
            </div>
        </>
    );
}

export default WindowSettings;