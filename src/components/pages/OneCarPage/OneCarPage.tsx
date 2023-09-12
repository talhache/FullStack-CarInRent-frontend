import React from "react"
import styles from "./OneCarPage.module.css"

import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import {  getCarById } from "../../../features/oneCarPageSlice"
import { AppDispatch, RootState } from "../../../app/store"

const OneCarPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    
const [reviews, setReviews] = React.useState("")

const handleOnChangeTextArea = (text: string) => {
    setReviews(text)
}
const {carId} = useParams()
const cars = useSelector((state:RootState) => state.oneCarPage.car)
console.log(cars);

React.useEffect(() => {
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
</div>
)


}   


export default OneCarPage