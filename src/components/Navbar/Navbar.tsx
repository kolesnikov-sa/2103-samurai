import React from "react";
import s from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={s.nav}>
            <a href={"/profile"} className={`${s.nav__item} ${s.nav__item_active}`}>Profile</a>
            <a href={"/dialogs"} className={s.nav__item}>Messages</a>
            <a href={"#"} className={s.nav__item}>News</a>
            <a href={"#"} className={s.nav__item}>Music</a>
            <a href={"#"} className={s.nav__item}>Settings</a>
        </nav>
    );
}

export default Navbar;
