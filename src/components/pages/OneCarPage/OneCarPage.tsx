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
const car = useSelector((state:RootState) => state.car.car)

React.useEffect(() => {
    
    dispatch(getCarById())
}, [dispatch])
return(
<div className={styles.glavCard}>
    {car.map((oneCar) => {
        return (
            <div>
                {oneCar.name}
            </div>
        )
    })}
</div>
)


}   


export default OneCarPage