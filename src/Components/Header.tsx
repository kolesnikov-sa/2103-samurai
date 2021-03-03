import React from "react";
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img className={s.header__img}
                src={"https://latiendadevideojuegos.com/WebRoot/Store3/Shops/a63ae758-5c5f-4884-8052-a151d45a08da/MediaGallery/psx_latiendadevideojuegos_retro.png"}/>
        </header>
    );
}

export default Header;
