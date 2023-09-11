import React from 'react';
import styles from './Mainpage.module.css'

interface CarCardProps {
  img: string;
  name: string;
  price: string;
  description: string;
  capacity: number;
}

const CarCard: React.FC<CarCardProps> = ({ img, name, price, description, capacity }) => {
  return (
    <div className={styles.CarCard}>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>{description}</p>
      <p>Capacity: {capacity}</p>
    </div>
  );
}

export default CarCard;
