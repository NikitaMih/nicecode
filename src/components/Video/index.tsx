import React, { FC } from 'react';
import style from './style.module.scss';
import videoImg from '../../assets/video.jpg';

type Video = {
    id: number
    author: string
    text: string
}

const Videos: FC<Array<Video>> = ({ videos }: any) => {

    return (
        <div className={style.videos}>
            {videos?.map((video: Video) => {
                return (
                    <div key={video.id} className={style.video}>
                        <img src={videoImg} alt='video'/>
                        <div className={style.info}>
                            <div className={style.title}>{video.text}</div>
                            <div className={style.author}>{video.author}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Videos;