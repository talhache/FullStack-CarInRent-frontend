import React from 'react';
import styles from './Mainpage.module.css'
import {  Link } from 'react-router-dom'

interface CarCardProps {
  carsId: string,
  img: string;
  name: string;
  price: string;
  description: string;
  capacity: number;
}

const CarCard: React.FC<CarCardProps> = ({ img, name, price, description, capacity, carsId }) => {
  const shortDescription = description.split(' ').slice(0, 10).join(' ') + '...';
  return (
    <div className={styles.carCard}>
      <div><img className={styles.imgCar} src={`http://localhost:4444/assets/img/${img}`} alt={name} /></div>
      <div><h2>{name}</h2></div>
      <div>Price: {price}</div>
      <div>{shortDescription}</div>
      <div>Capacity: {capacity}</div>
      <Link to={`/cars/${carsId}`} className={styles.link}>Перейти к модели</Link>
      
    </div>
  );
}

export default CarCard;
