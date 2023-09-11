import {  Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from "../../app/store"
import  image from './carInRent_logo.svg'
import styles from './Header.module.css'

const Header = () => {
    const token = useSelector((state: RootState) => state.application.token) // берёт токен из слайса
    
    const removeToken = () => {
        localStorage.removeItem('token')
        window.location.reload()
    } //Функция по удалению токена
    
    return (
            <div className={styles.header}>
                <Link to='/' ><img src={image} alt="CarInRent" className={styles.home}/></Link>
                <Link to='/Marks' ><button className={styles.button}>Марки</button></Link> 
                <Link to='/Catalog'> <button className={styles.button}>Каталог</button></Link>
                {token ? 
                    ( <button onClick={removeToken} className={styles.button}>Выйти</button> ) :
                    <Link  to='/SignUp'><button className={styles.button}>Вход и регистрация</button></Link>
                }                
            </div>
    )
}


export default Header