import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.posts}>
            <h3 className={s.posts__heading}>My posts</h3>
            <div className={s.posts__newPost}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts__content}>
                <Post message={"Hi, how are you?"}/>
                <Post message={"Great to see you!"}/>
            </div>
        </div>
    );
}

export default MyPosts;
