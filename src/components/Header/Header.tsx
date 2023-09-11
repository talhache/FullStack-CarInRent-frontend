import {  Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from "../../app/store"
import styles from '../css/Header.module.css'

const Header = () => {
    const token = useSelector((state: RootState) => state.application.token)
    
    const removeToken = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }
    
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.properties}>
                <div><img src="" alt="" /></div>
                <Link to='/Models' className={styles.models}><button>Модели</button></Link> 
                <Link to='/' className={styles.home}><button>CarInRent</button></Link>
                {token ? 
                    ( <button onClick={removeToken}>Выйти</button> ) :
                    <Link  to='/SignUp' className={styles.sign}><button>Вход и регистрация</button></Link>
                }
                </div>                
            </div>
        </div>
    )
}


export default Header