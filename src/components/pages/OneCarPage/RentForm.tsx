import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from "react";
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');


import { RootState, AppDispatch } from '../../../app/store';
import styles from "./Rent.module.css";
import { addCarToUser } from '../../../features/userSlice';


const RentForm = ({ isOpen, closeModal, formData, handleInputChange }) => {

  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.user);
  const [fieldsFilled, setFieldsFilled] = useState({
    city: true,
    rentalDate: true,
    phoneNumber: true,
    paymentMethod: true,
  });
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.city || !formData.rentalDate || !formData.phoneNumber || !formData.paymentMethod) {
    alert('Пожалуйста, заполните все поля');
    return;
  }
    dispatch(addCarToUser(userData));
  }
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Аренда машины"
    >
      <h2>Аренда машины</h2>
      <form>
        <div className={`${styles.formGroup} ${!fieldsFilled.city && styles.error}`}>
          <label htmlFor="city">Город</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.rentalDate && styles.error}`}>
          <label htmlFor="rentalDate">Дата аренды</label>
          <input
            type="date"
            id="rentalDate"
            name="rentalDate"
            value={formData.rentalDate}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.phoneNumber && styles.error}`}>
          <label htmlFor="phoneNumber">Номер телефона</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className={`${styles.formGroup} ${!fieldsFilled.paymentMethod && styles.error}`}>
          <label htmlFor="paymentMethod">Способ оплаты</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleInputChange}
          >
            <option value="card">Кредитная карта</option>
            <option value="cash">Наличные</option>
          </select>
        </div>
        <button className={styles.butRent} onClick={handleSubmit} type="submit">Отправить</button>
      </form>
      <button className={styles.butRent} onClick={closeModal}>Закрыть</button>
    </ReactModal>
  );
}

export default RentForm;