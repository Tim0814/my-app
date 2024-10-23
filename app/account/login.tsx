"use client";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "./AuthContext";

export default function Login() {
  const [account, setAccount] = useState({ email: "", password: "" });
  const auth = useAuth();

  const handleClick = function (e: React.ChangeEvent<HTMLInputElement>) {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };
  const login = function () {
    auth.login(account.email);
  };
  return (
    <div>
      <TextField
        label="電子郵件"
        variant="outlined"
        type="text"
        name="email"
        value={account.email}
        onChange={handleClick}
      />
      <p />
      <TextField
        label="密碼"
        variant="outlined"
        type="password"
        name="password"
        value={account.password}
        onChange={handleClick}
      />
      <p />
      <Button variant="contained" color="primary" onClick={login}>
        登入
      </Button>
    </div>
  );
}
