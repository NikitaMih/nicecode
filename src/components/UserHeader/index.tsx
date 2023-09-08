import React, { FC } from 'react';
import style from './style.module.scss';

type User = {
    name: string
    avatar: string
    age: number
    status: string
}

const UserHeader: FC<User> = ({ name, avatar = 'none', age, status }) => {  

    const logo = require(`../../assets/users/${avatar}.jpg`);

    return (
        <div className={style.header}>
            <img className={style.img} src={logo} alt='logo'/>
            <div>
                <div className={style.title}>{name}</div>
                <div className={style.subtitle}>{age} лет, {status}</div>
            </div>
        </div>
    )
};

export default UserHeader;