import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import Nav from '../../components/Nav';
import UserHeader from '../../components/UserHeader';
import {
    selectUsers,
    selectActiveUser,
    getUsers
} from '../../slices/usersSlices';
import Notes from '../../components/Notes';
import plus from '../../assets/plus.svg'
import Consultations from '../../components/Consultations';
import Videos from '../../components/Video';
import Events from '../../components/Events';

const HomePage: FC = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectUsers);
    const userId = useSelector(selectActiveUser);

    const [category, SetCategory] = useState('notes');
    const [add, SetAdd] = useState('Новая заметка');

    const user = users.find((user: any) => user.id === userId);
    

    useEffect(() => {
        dispatch(getUsers());
    },[]);

    const switchCase = (value: string) => {
        SetCategory(value);
        if (value === 'notes') { SetAdd('Новая заметка') }
        if (value === 'consultations') { SetAdd('Записать') }
        if (value === 'video' || value === 'events') { SetAdd('Рекомендовать') }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.header}></div>
            <div className={style.content}>
                <Nav />
                <div className={style.user}>
                    <UserHeader {...user}/>
                    <div className={style.switcher}>
                        <ul className={style.case}>
                            <li style={{ color: category === 'notes' ? '#4198C5' : '#616F82' }} onClick={() => switchCase('notes')}>Заметки</li>
                            <li className={style.separate}>|</li>
                            <li style={{ color: category === 'consultations' ? '#4198C5' : '#616F82' }} onClick={() => switchCase('consultations')}>Консультации</li>
                            <li className={style.separate}>|</li>
                            <li style={{ color: category === 'video' ? '#4198C5' : '#616F82' }} onClick={() => switchCase('video')}>Видео</li>
                            <li className={style.separate}>|</li>
                            <li style={{ color: category === 'events' ? '#4198C5' : '#616F82' }} onClick={() => switchCase('events')}>Мероприятия</li>
                        </ul>
                        <div className={style.add}>
                            <span>{add}</span>
                            <img className={style.plus} src={plus} alt='plus'/>
                        </div>
                    </div>
                    {category === 'notes' && <Notes {...user}/>}
                    {category === 'consultations' && <Consultations {...user}/>}
                    {category === 'video' && <Videos {...user}/>}
                    {category === 'events' && <Events {...user}/>}
                </div>
            </div>
        </div>
    )
};

export default HomePage;
