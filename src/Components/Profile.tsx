import React from "react";
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.content}>
            <img className={s.content__img}
                src={"https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg"}/>
            <div className={s.content__avaDescription}>ava+description</div>
            <div className={s.posts}>
                <h3 className={s.posts__heading}>My posts</h3>
                <div className={s.newPost}>New post</div>
                <div className={s.postsContent}>
                    <div className={s.post}>post 1</div>
                    <div className={s.post}>post 2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
