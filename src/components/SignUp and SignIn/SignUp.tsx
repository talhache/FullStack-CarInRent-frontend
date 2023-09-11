import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp } from "../../features/applicationSlise";
import { AppDispatch } from "../../app/store";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Sign.module.css";

const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSignUp = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(authSignUp({ _id: "", login, password, email }));
    navigate('/SignIn')
  };

  const navigate = useNavigate()

  return (
    <div className={styles.author}>
      <div className={styles.authorinput}>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            value={login}
            placeholder="name"
            onChange={(e) => setLogin(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="text"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Registration</button>          
        </form>
        <div className={styles.but}>
            Уже есть аккаунт? <Link to="/SignIn" className={styles.sign}>Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
