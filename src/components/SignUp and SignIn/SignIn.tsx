import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { authSignIn } from "../../features/applicationSlise";
import styles from "./Sign.module.css";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";

const SignIn = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const token = useSelector((state: RootState) => state.application.token);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  console.log(token);

  const handleSignUp = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch(authSignIn({ _id: "", password, nickname, email}));
    navigate("/");
  };


  return (
    <div className={styles.author}>
      <div className={styles.authorinput}>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            value={nickname}
            placeholder="name"
            onChange={(e) => setNickname(e.target.value)}
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
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
