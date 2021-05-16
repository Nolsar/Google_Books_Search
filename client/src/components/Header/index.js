import React from "react";
import style from "./style.css"

function Header() {
    return (
        <div className="jumbotron text-center">
            <div className="container text-light">
                <h1>Google Books Search</h1>
                <h2>Search for and save books of interest!</h2>
            </div>
        </div>
    );
}

export default Header;