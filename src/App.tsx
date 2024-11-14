import React from "react";
import "./App.css";
import { RevealAnswer } from "./components/RevealAnswer";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Your UM COS420 App</header>
            <RevealAnswer></RevealAnswer>
        </div>
    );
}

export default App;
