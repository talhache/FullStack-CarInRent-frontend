import React from 'react';
import { useSelector } from 'react-redux';

const CompareTwoCar = () => {
    const car1 = useSelector((state) => state.compareCars.car1)
    console.log(car1)
    return (
        <div>
            1
        </div>
    );
};

export default CompareTwoCar;