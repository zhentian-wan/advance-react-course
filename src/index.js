import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./style.css";

ReactDOM.render(  <div
    style={{
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    }}
>
    <App />
</div>, document.getElementById("root"));