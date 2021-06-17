import React from "react";

const Movie = () => {

    var user = fetch("http://localhost:8080/user");

    var d = {
        color: "red"
    };

    return (
        <div>
            <input type="text" />
            <h1 style={d}>영화{user.username}</h1>
        </div>
    );
}

export default Movie;