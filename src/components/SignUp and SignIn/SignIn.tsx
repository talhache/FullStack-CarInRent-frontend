import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { authSignIn } from "../../features/applicationSlise";
import styles from "./Sign.module.css";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import Spinner from '../pages/CatalogPage/Spinner';

const SignIn = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const token = useSelector((state: RootState) => state.application.token);
  const signin = useSelector((state: RootState) => state.application.signingIn);
  const error = useSelector((state: RootState) => state.application.error as string)

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent): void => {
    e.preventDefault()
    dispatch(authSignIn({ _id: "", password, login, email: "" }));

  };
  if (signin === true) {
    return <Spinner />;
  }

  if (token) {
    navigate("/");
  }

  return (
    <div className={styles.author}>
      <div className={styles.authorinput}>
      {error && <div className={styles.error}>Неверный логин или пароль</div>}
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            value={login}
            placeholder="name"
            onChange={(e) => setLogin(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
