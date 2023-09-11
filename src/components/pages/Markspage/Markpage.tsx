import React from 'react';
import styles from './Markpage.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const Markpage = () => {
    // const marks = useSelector((state: RootState) => state.marks.marks)

    return (
        <div>
            <div>
                <input type="text" />
            </div>
            <div>
                <div>
                    <div className={styles.markBlock}>
                        <img src="" alt="" />
                        <p>MarkName</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Markpage;