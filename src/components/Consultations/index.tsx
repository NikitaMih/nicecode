import React, { FC } from 'react';
import style from './style.module.scss';
import offline from '../../assets/offline.jpg';
import online from '../../assets/online.jpg';

type Consultation = {
    id: number
    data: string
    time: string
    type: string
    status: boolean
}

const Consultations: FC<Array<Consultation>> = ({ consultations }: any) => {

    return (
        <div className={style.consultations}>
            {consultations?.map((consultation: Consultation) => {
                console.log(consultation);
                
                return (
                    <div key={consultation.id} className={style.consultation}>
                        <img src={consultation.type === 'online' ? online : offline} alt='img'/>
                        <div className={style.info}>
                            <div className={style.type}>{consultation.type === 'online' ? 'Online консультация' : 'Личный прием'}</div>
                            <div className={style.time}>{consultation.data}, {consultation.time}</div>
                        </div>  
                    </div>
                )
            })}
        </div>
    )
};

export default Consultations;