import React, { useState } from "react";
import icon from "../pics/youtube-icon.svg";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("");

    const onInputChange = (event) => {
        //callback when a user type smth inside input
        setTerm(event.target.value); //we get what a user typed and save it as a current state
    };

    const onSubmit = (event) => {
        //callback when a user submits the form
        event.preventDefault();
        // we call prop from App (parent) when a user submits the form
        //and add current term to it
        onFormSubmit(term);
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="ui fluid icon input">
                    <img
                        src={icon}
                        style={{
                            height: "37px",
                            margin: "auto 5px auto 0",
                            borderRadius: "3px",
                        }}
                        alt="youtube-icon"
                    />
                    <input
                        className="ui action"
                        type="text"
                        value={term}
                        onChange={onInputChange}
                        placeholder="What are you looking for ..."
                    />
                    <i className="search icon" />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
