import styles from "./Rent.module.css";
import ReactModal from 'react-modal';
ReactModal.setAppElement('#root');

const RentForm = ({ isOpen, closeModal, formData, handleInputChange }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Аренда машины"
    >
      <h2>Аренда машины</h2>
      <form>
      <div className={styles.formGroup}>
                <label htmlFor="city">Город</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="rentalDate">Дата аренды</label>
                <input
                  type="date"
                  id="rentalDate"
                  name="rentalDate"
                  value={formData.rentalDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">Номер телефона</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.formGroup}>
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
              <button className={styles.butRent} type="submit">Отправить</button>
      </form>
      <button className={styles.butRent} onClick={closeModal}>Закрыть</button>
    </ReactModal>
  );
}

export default RentForm;