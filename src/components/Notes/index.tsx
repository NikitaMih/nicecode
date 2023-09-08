import React, { FC } from 'react';
import style from './style.module.scss';

type Note = {
    id: number
    data: string
    text: string
}

const Notes: FC<Array<Note>> = ({ notes }: any) => {

    return (
        <div className={style.notes}>
            {notes?.map((note: Note) => {
                return (
                    <div key={note.id} className={style.note}>
                        <span className={style.data}>{note.data}</span>
                        <span>{note.text}</span>
                    </div>
                )
            })}
        </div>
    )
};

export default Notes;