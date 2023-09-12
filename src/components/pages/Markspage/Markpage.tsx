import React from 'react';
import styles from './Markpage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { fetchMarks } from '../../../features/marksSlice';
import { useEffect } from 'react';


const Markpage = () => {
    const dispatch = useDispatch()
    const marks = useSelector((state: RootState) => state.marks.marks)

    useEffect(() => {
        dispatch(fetchMarks())
    }, [])

    return (
        <div className={styles.marksContainer}>
            <div>
                <input type="text" />
            </div>
            <div className={styles.marksContainer_cont}>
                    {marks.map((mark) => {
                        return (
                            <div className={styles.marksBlock}>
                                <div className={styles.marksImg}>
                                    <img src="" alt="" />
                                </div>
                                <p>{mark.mark}</p>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
};

export default Markpage;