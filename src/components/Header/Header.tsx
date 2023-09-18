import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../../app/store"
import logo from './carInRent_logo.svg'

import styles from './Header.module.css'
import profile from './registr.svg'

const Header = () => {
    const navigate = useNavigate()
    const token = useSelector((state: RootState) => state.application.token) // берёт токен из слайса
    const removeToken = () => {
        localStorage.removeItem('token')
        window.location.reload()
        navigate('/')
        location.reload()

    } //Функция по удалению токена

    return (
        <div className={styles.header}>
            <Link to='/' ><img src={logo} alt="CarInRent" className={styles.home} /></Link>
            <div className={styles.navigation}>
                <Link to='/marks' ><button className={styles.button}>Марки</button></Link>
                <Link to='/Catalog'> <button className={styles.button}>Каталог</button></Link>
                <Link to='/cars/compare'> <button className={styles.button}>Сравнить</button></Link>
            </div>

            {token ?
                (<div>
                    <button onClick={removeToken} className={styles.buttonExit}>ВЫЙТИ</button>
                    <Link to='/Profile'>
                        <img src={profile} alt='profile' className={styles.profile} />
                    </Link>
                </div>) :
                <Link to='/SignUp'>
                    <button className={styles.button}>Вход и регистрация</button>
                </Link>
            }
        </div>
    )
}


export default Header