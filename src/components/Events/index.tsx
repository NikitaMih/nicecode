import React, { FC } from 'react';
import style from './style.module.scss';
import eventImg from '../../assets/event.jpg';
import video from '../../assets/video-camera.jpg';
import calendar from '../../assets/calendar.jpg';
import time from '../../assets/time.jpg';

type Event = {
    id: number
    data: string
    time: string
    type: string
    text: string 
}

const Events: FC<Array<Event>> = ({ events }: any) => {

    return (
        <div className={style.events}>
            {events?.map((event: Event) => {
                return (
                    <div key={event.id} className={style.event}>
                        <img src={eventImg} alt='event'/>
                        <div className={style.info}>
                            <div className={style.title}>{event.text}</div>
                            <div className={style.optional}>
                                <div className={style.item}>
                                    <img src={video} alt='video'/>
                                    <span>{event.type}</span>
                                </div>
                                <div className={style.item}>
                                    <img src={calendar} alt='calendar'/>
                                    <span>{event.data}</span>
                                </div>
                                <div className={style.item}>
                                    <img src={time} alt='time'/>
                                    <span>{event.time}</span>
                                </div>
                            </div>
                        </div>  
                    </div>
                )
            })}
        </div>
    )
};

export default Events;