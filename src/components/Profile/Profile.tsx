import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Profile = () => {
  const user = useSelector((state: RootState) => state.application.users); // Получаем информацию о пользователе из Redux
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
