import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import Input from '../Input';
import UserItem from '../UserItem';
import {
    selectUsers,
    selectCheckbox,
    selectSelected,
    SetCheckbox,
    SetSelected
} from '../../slices/usersSlices';

const Nav: FC = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectUsers);
    const checkbox = useSelector(selectCheckbox);
    const selected = useSelector(selectSelected);

    const switchBtn = () => {
        dispatch(SetCheckbox(!checkbox));
        dispatch(SetSelected([]));
    };

    const selectAll = (value: any) => {
        const checked = value.checked;
        if (checked) {
            const selectedUsers = users.map((user: any) => user.id);
            dispatch(SetSelected(selectedUsers));
        } else {
            dispatch(SetSelected([]));
        }
    };

    return (
        <nav className={style.nav}>
            <Input />
            <div className={style.actions}>
                {checkbox && <div className={style.count}>{users.length}</div>}
                {!checkbox && <div className={style.choose}> 
                    <input className={style.checkbox} onClick={(event) => selectAll(event.target)} type='checkbox'/>
                    <div className={style.all}>Все</div>
                    <div className={style.count}>{selected.length}</div>
                </div>}
                <div className={style.buttons}>
                    {checkbox && <button className={style.btn} onClick={switchBtn}>Выбрать</button>}
                    {!checkbox && <button className={style.btn}>Действия</button>}
                    {!checkbox && <button className={style.btn} onClick={switchBtn}>Отменить</button>}
                </div>
            </div>
            <div className={style.userItems}>
                {users.map((user: any) => {
                    return <UserItem {...user}/>;
                })}
            </div>
        </nav>
    )
};

export default Nav;
