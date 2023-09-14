import React from 'react';
import styles from './CompareCar.module.css'
import CompareTwoCar from './CompareCar/CompareCar';

const CompareCar = () => {
    return (
        <div>
            {/* <div>
                <p>Сравнение автомобилей</p>
            </div>
            <div>
                Машины
            </div>

            <div>
                оценки пользователей
            </div>
            <div>
                <h3>Сравнение характеристик</h3>
                <div>
                    
                </div>
            </div> */}
            <div>
                <CompareTwoCar/>
            </div>
        </div>
    );
};

export default CompareCar;