import React, { useEffect } from 'react'
import {  Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "../../app/store"
import logo from './carInRent_logo.svg'
import styles from './Header.module.css'
import { oneUser } from '../../features/applicationSlise'
import profile from './registr.svg'

const Header = () => {
    const token = useSelector((state: RootState) => state.application.token) // берёт токен из слайса
    const dispatch = useDispatch<AppDispatch>()
    const removeToken = () => {
        localStorage.removeItem('token')
        window.location.reload()
    } //Функция по удалению токена
    useEffect(() => {
        dispatch(oneUser())
      })
    
    return (
            <div className={styles.header}>
                <Link to='/' ><img src={logo} alt="CarInRent" className={styles.home}/></Link>
                <Link to='/marks' ><button className={styles.button}>Марки</button></Link> 
                <Link to='/Catalog'> <button className={styles.button}>Каталог</button></Link>

                {token ? 
                    ( <div><button onClick={removeToken} className={styles.button}>Выйти</button> <Link to='/Profile'><img src={profile} alt='profile' className={styles.button}/></Link></div> ) :
                    <Link  to='/SignUp'><button className={styles.button}>Вход и регистрация</button></Link>
                }                
            </div>
    )
}


export default Header