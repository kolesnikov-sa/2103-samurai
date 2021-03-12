import React from "react";
import s from './Dialogs.module.css';

function Dialogs() {
    return (
      <div className={s.dialog}>
        <div className={s.dialog__items}>
          <div className={s.dialog__item + ' ' + s.dialog__item_active}>Kolya</div>
          <div className={s.dialog__item}>Petya</div>
          <div className={s.dialog__item}>Masha</div>
          <div className={s.dialog__item}>Varya</div>
          <div className={s.dialog__item}>Irina</div>
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
