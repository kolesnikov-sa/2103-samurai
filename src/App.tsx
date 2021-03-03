import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";
import { Footer } from './footer';

function App() {
    return (
        <div>
            <div>
                <Header/>
                <Technologies/>
                <Footer />
            </div>
        </div>
    );
}

export default App;
