import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";

function App() {
    return (
        <div>
            <div>
                <Header/>
                <Technologies/>
            </div>
        </div>
    );
}

export default App;
