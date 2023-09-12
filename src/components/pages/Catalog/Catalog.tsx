import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import CarCard from './CarCard';
import { fetchModels } from '../../../features/modelsSlice';
import styles from './Catalog.module.css'
import { Link } from 'react-router-dom';


const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { models, status, error } = useSelector((state: RootState) => state.Cars);
  

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchModels());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.mainPage}>
      {models.map((model) => (
      
        <CarCard
        key={model._id}
        img={model.img}
        name={model.name}
        price={model.price}
        description={model.description}
        capacity={model.capacity}
        carsId={model._id}
      />
 

      ))}
    </div>
  );
};

export default MainPage;
