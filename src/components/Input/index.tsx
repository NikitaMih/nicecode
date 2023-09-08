import React, { FC } from 'react';
import style from './style.module.scss';
import search from '../../assets/search.svg';
import filter from '../../assets/filter.svg';
import plus from '../../assets/plus.svg';

const Input: FC = () => {

    return (
        <div className={style.inputBlock}>
            <img className={style.btn} src={search} alt='search'/>
            <input className={style.input} type="text" />
            <img className={style.btn} src={filter} alt='filter'/>
            <img className={style.btn} src={plus} alt='plus'/>
        </div>
    )
};

export default Input;