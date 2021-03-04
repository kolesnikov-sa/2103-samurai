import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.content}>
            <img className={s.content__img}
                src={"https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg"}/>
            <div className={s.content__avaDescription}>ava+description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
