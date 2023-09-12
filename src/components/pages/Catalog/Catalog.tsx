import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store';
import CarCard from './CarCard';
import { fetchModels } from '../../../features/modelsSlice';
import styles from './Catalog.module.css'
import SearchBar from './Search';


const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const { models, status, error } = useSelector((state: RootState) => state.Cars);
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.mainPage}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Поиск..."
      />


      {filteredCars.map((model) => (
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
