import React from 'react';
import './App.css';

function App() {
    return (
        <div className={"app-wrapper"}>
            <header>
                <img
                    src={"https://latiendadevideojuegos.com/WebRoot/Store3/Shops/a63ae758-5c5f-4884-8052-a151d45a08da/MediaGallery/psx_latiendadevideojuegos_retro.png"}/>
            </header>
            <nav>
                <a href={"#"}>Profile</a>
                <a href={"#"}>Messages</a>
                <a href={"#"}>News</a>
                <a href={"#"}>Music</a>
                <a href={"#"}>Settings</a>
            </nav>
            <div className={"content"}>
                <img src={"https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg"} />
                <div>ava+description</div>
                <div>
                    my posts
                    <div>New posts</div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
