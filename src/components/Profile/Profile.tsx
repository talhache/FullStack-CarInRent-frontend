import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { oneUser } from '../../features/userSlice';

const Profile = () => {
  const user = useSelector((state: RootState) => state.user.users); // Получаем информацию о пользователе из Redux
  const dispatch = useDispatch<AppDispatch>()
  const token = useSelector((state: RootState) => state.application.token)
   

 

  useEffect(() => {
    function parseJWT(token) {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
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

  return (
    <div>
      <h2>Личный кабинет</h2>

          <div>
          <p>Имя: {user.login}</p>
          <p>Email: {user.email}</p>
          Другие данные о пользователе
        </div>


    </div>
  );
};

export default Profile;
