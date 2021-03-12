import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

type DialogItemType = {
  id: string,
  name: string
}

function DialogItem(props: DialogItemType) {
  let path = '/dialogs/' + props.id
  return (
    <div className={s.dialog__item}><NavLink to={path}>{props.name}</NavLink></div>
  );
}

type MessageType = {
  message: string;
}

function Message(props: MessageType) {
  return (
    <div className={s.dialog__message}>{props.message}</div>
  );
}

function Dialogs() {
    return (
      <div className={s.dialog}>
        <div className={s.dialog__items}>
          <DialogItem id={"1"} name={"Kolya"}/>
          <DialogItem id={"2"} name={"Petya"}/>
          <DialogItem id={"3"} name={"Masha"}/>
          <DialogItem id={"4"} name={"Varya"}/>
          <DialogItem id={"5"} name={"Irina"}/>
          <DialogItem id={"6"} name={"Tikhon"}/>
        </div>
        <div className={s.dialog__messages}>
          <Message message={'Message 1'}/>
          <Message message={'Message 2'}/>
          <Message message={'Message 3'}/>
          <Message message={'Message 4'}/>
          <Message message={'Message 5'}/>
          <Message message={'Message 6'}/>
        </div>
      </div>
    );
}

export default Dialogs;
