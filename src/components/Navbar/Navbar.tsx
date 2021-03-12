import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={s.nav}>
      <NavLink className={s.nav__item} activeClassName={s.nav__item_active} to='/profile'>Profile</NavLink>
      <NavLink className={s.nav__item} activeClassName={s.nav__item_active} to='/dialogs'>Messages</NavLink>
      <NavLink className={s.nav__item} activeClassName={s.nav__item_active} to='/news'>News</NavLink>
      <NavLink className={s.nav__item} activeClassName={s.nav__item_active} to='/music'>Music</NavLink>
      <NavLink className={s.nav__item} activeClassName={s.nav__item_active} to='/settings'>Settings</NavLink>
    </nav>
  );
}

export default Navbar;
