import React from "react";
import s from './Post.module.css';

function Post() {
    return (
        <div className={s.post}>
            <img className={s.post__avatar} src={"https://www.nicepng.com/png/detail/186-1866063_dicks-out-for-harambe-sample-avatar.png"} />
            <div className={s.post__content}>Post</div>
            <div className={s.post__like}>Like</div>
        </div>
    );
}

export default Post;
