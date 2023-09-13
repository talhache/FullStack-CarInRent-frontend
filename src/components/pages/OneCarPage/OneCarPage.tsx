import React from "react";
import styles from "./OneCarPage.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCarById,
  patchReviews,
  addReviews,
  fetchReviews,
  deletedReviews,
} from "../../../features/oneCarPageSlice";
import { AppDispatch, RootState } from "../../../app/store";

const OneCarPage = () => {

  const dispatch = useDispatch<AppDispatch>();
  const { carId } = useParams();

  React.useEffect(() => {
    dispatch(fetchReviews());
    dispatch(getCarById(carId));
  }, [dispatch]);

  const cars = useSelector((state: RootState) => state.oneCarPage.car);
  const reviews = useSelector((state: RootState) => state.oneCarPage.reviews);
  const [review, setReviews] = React.useState("");


  // const handleSendReviews = (review: string) => { 
  //   dispatch(addReviews({ text: review, carId, userId: userId })); 
  // }; 

  // const handleOnChangeTextArea = (text: string) => { 
  //   setReviews(text); 
  // }; 

  const handleDeleteReviews = (_id: string) => {
    dispatch(deletedReviews({ _id, carId }));
  };


  console.log(cars)
  console.log(reviews)

  return (
    <div className={styles.oneCarPage}>
      <div className={styles.car}>
        <div className={styles.carImg}>
          <img
            width={500}
            src={`http://localhost:4444/assets/img/${cars.img}`} 
            alt="car"
          />
        </div>
        <div className={styles.carInfo}>
          <div className={styles.carName}>{cars.name}</div>
          <div className={styles.carPrice}>{cars.price}</div>
          <div className={styles.carDescription}>{cars.description}</div>
          <div className={styles.carCapacity}>{cars.capacity}</div>
        </div>
      </div>

      <div className={styles.reviews}>
        <span>Коментарии</span>

        {reviews.map((item, index) => {
          if (item.cars._id === cars. _id) {
            return (
              <div className={styles.review} key={index}>
                <div className={styles.reviewUser}>{item.user?.login}</div>
                <div className={styles.reviewText}>{item.text}</div>
                <div className={styles.reviewFilter}>{reviewCar.item}</div>
                <button
                  className={styles.reviewButton}
                  onClick={() => handleDeleteReviews(item._id)}
                >
                  x
                </button>
              </div>
            );
          }
        })}
        <div className={styles.addReviewsText}>Оставить коментарии</div>
        <textarea
          name=""
          value={review}
          onChange={(e) => handleOnChangeTextArea(e.target.value)}
          id={styles.textarea}
          cols="30"
          rows="5"
        ></textarea>
        <div className={styles.sendReviews}>
          <button disabled={!review} onClick={() => handleSendReviews(review)}>
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default OneCarPage;