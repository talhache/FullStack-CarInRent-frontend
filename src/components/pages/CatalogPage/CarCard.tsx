import React from 'react';
import styles from './Catalog.module.css'
import { Link } from 'react-router-dom'
import CompareIcon from '@mui/icons-material/Compare';
import { Tooltip, IconButton, Grid } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import { useDispatch } from 'react-redux';



interface CarCardProps {
  carsId: string,
  img: string;
  name: string;
  price: string;
  description: string;
  capacity: number;
}

const handleCompareClick = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.stopPropagation();
}

const handleRentClick = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.stopPropagation();
}


const CarCard: React.FC<CarCardProps> = ({ img, name, price, description, capacity, carsId }) => {
  const dispatch = useDispatch()

  const shortDescription = description.split(' ').slice(0, 10).join(' ') + '...';

  const handleAddToCompare = (id) => {
    dispatch(addCarToCompare(id))
  }

  return (
    <>
      <Grid className={styles.carCard}>
        <Grid item xs={12} sm={4}>
          <img className={styles.imgCar} src={`http://localhost:4444/assets/img/${img}`} alt={name} />
        </Grid>
        <Grid item xs={12} sm={8} className={styles.info}>
          <div><h2>{name}</h2></div>
          <div>Price: {price}</div>
          <div>{shortDescription}</div>
          <div>Capacity: {capacity}</div>
        </Grid>
        <div className={styles.compareIconContainer}>
            <Tooltip title="Сравнить" placement="top">
              <IconButton onClick={() => handleAddToCompare({_id})}>
                <CompareIcon className={styles.compareIcon}/>
              </IconButton>
            </Tooltip>

          <Link to={`/cars/${carsId}`}>
            <Tooltip title="Арендовать" placement="top">
              <IconButton >
                <CarRentalIcon className={styles.compareIcon} />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
        <Link to={`/cars/${carsId}`} className={styles.link}>Перейти к модели</Link>

      </Grid>
    </>
  );
}

export default CarCard;
