import s from './ProfileInfo.module.css';
import React from 'react';

function ProfileInfo() {
  return (
    <div>
      <img className={s.content__img}
           src={'https://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg'}
           alt={'img-alt'}/>
      <div className={s.content__avaDescription}>ava+description</div>
    </div>
  )
    ;
}

export default ProfileInfo;
