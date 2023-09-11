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
                <div className={styles.properties}>
                <Link to='/' className={styles.home}><div><img src={image} alt="" /></div></Link>
                <Link to='/Marks' className={styles.marks}><button>Марки</button></Link> 
                {token ? 
                    ( <button onClick={removeToken}>Выйти</button> ) :
                    <Link  to='/SignUp' className={styles.sign}><button>Вход и регистрация</button></Link>
                }
                </div>                
            </div>
    )
}


export default Header