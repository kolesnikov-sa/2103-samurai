import React from "react";
import s from './Post.module.css';

function Post(props: any) {
    return (
        <div className={s.post}>
            <img className={s.post__avatar} src={"https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png"} alt={'img-alt'}/>
            <div className={s.post__content}>{props.message}</div>
            <div className={s.post__like}>Likes: {props.likesCount}</div>
        </div>
    );
}

export default Post;
