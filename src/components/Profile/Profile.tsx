import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { deleteUser, oneUser } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.module.css'


const Profile = () => {
  const user = useSelector((state: RootState) => state.user.users); // Получаем информацию о пользователе из Redux
  const dispatch = useDispatch<AppDispatch>()
  const token = useSelector((state: RootState) => state.application.token)
  const navigate = useNavigate()

 

  useEffect(() => {
    function parseJWT(token: string) {
      const  base64Url = token.split(".")[1];
      const  base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const  jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload).id
    }
    const id = parseJWT(token)
    dispatch(oneUser(id))
  },[])

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id))
    localStorage.removeItem('token')
    window.location.reload()
    navigate('/')
    location.reload()
  }

  return (
    <div>
        <h2 className={styles.headerText}>Личный кабинет</h2>
          <div className={styles.card}>
          <p className={styles.userName}>Имя: {user.login}</p>
          <p className={styles.userEmail}>Email: {user.email}</p>
          <button onClick={() => handleDelete(user._id)} className={styles.deletedUserButton}>Удалить пользователя</button>
        </div>  
    </div>
  );
};

export default Profile;
