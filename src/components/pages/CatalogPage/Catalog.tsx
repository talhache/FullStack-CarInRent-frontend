import React, { Suspense, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import CarCard from './CarCard'
import { fetchModels } from '../../../features/modelsSlice';
import styles from './Catalog.module.css'
import Spinner from './Spinner';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { models, status, error } = useSelector((state: RootState) => state.Cars);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCars = models.filter(car =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchModels());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <Spinner />;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.mainPage}>
      <input
        type="text"
        className={`${styles.searchInput} ${isActive ? styles.active : ''}`}
        value={searchQuery}
        onChange={handleSearchChange}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholder="Найди свою мечту..."
      />


      {filteredCars.map((model) => (
        <Suspense fallback={<div><Spinner /></div>} key={model._id}>
          <CarCard
            key={model._id}
            img={model.img}
            name={model.name}
            price={model.price}
            description={model.description}
            capacity={model.capacity}
            carsId={model._id}
            className={`${styles.carCard} ${isActive ? styles.visible : ''}`}
          />
        </Suspense>
      ))}
    </div>
  );
};

export default MainPage;
