import React from "react";

/* Passing in props for button onClick callback and state variable. */
function Header({onDarkModeClick, isDarkMode}) {

    return (
        <header>
            <h2>Shopster</h2>
            {/* <button onClick={handleDarkModeClick}> */}
            <button onClick={onDarkModeClick}>
            {isDarkMode ? "Dark" : "Light"} Mode
            </button>
        </header>        
    )
}


export default Header;