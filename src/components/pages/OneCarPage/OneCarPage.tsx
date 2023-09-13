import React from "react"
import styles from "./OneCarPage.module.css"

import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {  getCarById, patchReviews, addReviews, fetchReviews, deletedReviews } from "../../../features/oneCarPageSlice"
import { AppDispatch, RootState } from "../../../app/store"

const OneCarPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    
    const cars = useSelector((state:RootState) => state.oneCarPage.car)
    const users = useSelector((state: RootState) => state.application.users)
    const reviews = useSelector((state: RootState) => state.oneCarPage.reviews)
    console.log(reviews);
    console.log(cars);
const [review, setReviews] = React.useState("")

const handleSendReviews = (review) => {
  dispatch(addReviews({text: review, carId, userId: userId}))
}

//setReviews("")
const handleOnChangeTextArea = (text: string) => {
    setReviews(text)
}
const {carId} = useParams()



const handleDeleteReviews = (_id) => {
    dispatch(deletedReviews({_id, carId}))
}


React.useEffect(() => {
    dispatch(fetchReviews())
    dispatch(getCarById(carId))
}, [dispatch])

return(
<div className={styles.oneCarPage}>
<div className={styles.car}>
    <div className={styles.carImg}>
        <img
        width={500}
        src={`http://localhost:4444/assets/img/${cars.img}`}
        />
    </div>
    <div className={styles.carInfo}>
        <div className={styles.carName}>{cars.name}</div>
        <div className={styles.carPrice}>
            {cars.price}
        </div>
        <div className={styles.carDescription}>
            {cars.description}
        </div>
         <div className={styles.carCapacity}>
            {cars.capacity}
         </div>
    </div>
</div>

<div className={styles.reviews}>
    <span>Коментарии</span>
    {reviews.map((reviewss, index) => {
         const user = users.find((user) => user._id === reviewss)
        const review = reviews.filter((item) => item.cars !== cars._id)

        return(
            <div className={styles.review} key={index}>
                <div className={styles.reviewUser}>{user?.login}</div>
                <div className={styles.reviewText}>{reviewss.text}</div>
                 <div className={styles.reviewFilter}>{review.item}</div>
                <button className={styles.reviewButton} onClick={() =>handleDeleteReviews(reviewss._id)}>x</button>
            </div>
        )
    })}
    <div className ={styles.addReviewsText}>Оставить коментарии</div>
    <textarea
    name=""
    value={review}
    onChange={(e) => handleOnChangeTextArea(e.target.value)}
    id={styles.textarea}
    cols="30"
    rows="5"
    ></textarea>
    <div className={styles.sendReviews}>
        <button
        disabled={!review}
        onClick={() => handleSendReviews(review)}
        >
            Отправить
        </button>
    </div>
</div>

</div>
)


}   


export default OneCarPage