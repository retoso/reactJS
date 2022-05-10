import React from "react";
import reactDom from "react-dom";
import "./styles.css"

function sum(a,b){
    return a + b
}

function primeiroJSX() {
    return (
        <div>
            Renato Tonelli de Souza - rumo ao ReactJS
            <h1>Soma: {sum(1969,2022)}</h1>
        </div>

    )
}

const App = () => {

    return (
        <div className="App">
            {primeiroJSX()}

        </div>
    )
}

const rootElement = document.getElementById("root")
reactDom.render(<App />, rootElement)
