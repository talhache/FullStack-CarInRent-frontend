import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { oneUser } from '../../features/applicationSlise';

const Profile = () => {
  const user = useSelector((state: RootState) => state.application.users); // Получаем информацию о пользователе из Redux
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(oneUser())
  })

  return (
    <div>
      <h2>Личный кабинет</h2>
        <div>
          <p>Имя: {user.login}</p>
          <p>Email: {user.email}</p>
          {/* Другие данные о пользователе */}
        </div>

    </div>
  );
};

export default Profile;
