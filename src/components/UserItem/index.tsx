import React, { FC, useEffect, useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './style.module.scss';
import {
    selectActiveUser,
    selectCheckbox,
    selectSelected,
    SetActiveUser,
    SetSelected
} from '../../slices/usersSlices';

type User = {
    id: number
    name: string
    avatar: string
}

const UserItem: FC<User> = ({ id, name, avatar }) => {
    const dispatch = useDispatch();
    const active = useSelector(selectActiveUser);
    const checkbox = useSelector(selectCheckbox);
    const selected = useSelector(selectSelected);
    const [checked, SetChecked] = useState(false);
    const logo = require(`../../assets/users/${avatar}.jpg`);

    const chooseUser = (id: string) => {
        dispatch(SetActiveUser(+id));
    };

    const selectUser = (value: any) => {
        const checked = value.target.checked;
        if (checked) {
            const selectedId = [...selected , id].sort((a: number, b:number) => b - a);
            dispatch(SetSelected(selectedId));
        } else {
            const selectedId = selected.filter((user: number) => user !== id);
            dispatch(SetSelected(selectedId));
        }
    };

    useEffect(() => {
        const select = selected.find((el: number) => el === id);
        if (select) {
            SetChecked(true);
        } else {
            SetChecked(false);
        }
    }, [selected]);

    return (
        <div 
            id={`${id}`}
            key={id}
            className={style.card}
            onClick={(event) => chooseUser(event.currentTarget.id)}
            style={{backgroundColor: id === active ? '#F1F2F3' : '#FFFFFF'}}
            >
            {!checkbox && 
                <input
                    className={style.checkbox} 
                    type='checkbox' 
                    onChange={(event) => selectUser(event)}
                    checked={checked}
                />}
            <img className={style.img} src={logo} alt='avatar'/>
            <div>{name}</div>
        </div>
    )
};

export default UserItem;