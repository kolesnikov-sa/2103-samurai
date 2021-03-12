import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

function Dialogs() {
    return (
      <div className={s.dialog}>
        <div className={s.dialog__items}>
          <div className={s.dialog__item + ' ' + s.dialog__item_active}><NavLink to={'/dialogs/1'}>Kolya</NavLink></div>
          <div className={s.dialog__item}><NavLink to={'/dialogs/2'}>Petya</NavLink></div>
          <div className={s.dialog__item}><NavLink to={'/dialogs/3'}>Masha</NavLink></div>
          <div className={s.dialog__item}><NavLink to={'/dialogs/4'}>Varya</NavLink></div>
          <div className={s.dialog__item}><NavLink to={'/dialogs/5'}>Irina</NavLink></div>
          <div className={s.dialog__item}><NavLink to={'/dialogs/6'}>Tikhon</NavLink></div>
        </div>
        <div className={s.dialog__messages}>
          <div className={s.dialog__message}>Message 1</div>
          <div className={s.dialog__message}>Message 2</div>
          <div className={s.dialog__message}>Message 3</div>
          <div className={s.dialog__message}>Message 4</div>
          <div className={s.dialog__message}>Message 5</div>
        </div>
      </div>
    );
}

export default Dialogs;
