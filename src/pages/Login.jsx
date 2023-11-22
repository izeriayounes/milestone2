import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { login } from "../api/apiService";

function Login({ onClose, title, openRegister }) {
  const { register, handleSubmit } = useForm();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onSubmit = async (data) => {
    try {
      await login(data);
      window.location.pathname = "/";
      setShowErrorMessage(false);
    } catch (error) {
      setShowErrorMessage(true);
      console.error("Error logging in:", error);
    }
  };

  return (
    <Modal onClose={onClose} title={title}>
      <div className="p-5">
        <div className="text-center h4 mb-4">Welcome back! Please login</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            id="username"
            type="text"
            register={register}
            required
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            required
          />
          {showErrorMessage && (
            <div className="text-danger small">
              Invalid information. Please retry!
            </div>
          )}
          <p>
            Not registered yet?{" "}
            <span
              className="text-primary cursor-pointer"
              onClick={openRegister}
            >
              <u>Register</u>
            </span>
          </p>
          <Button>Login</Button>
        </form>
      </div>
    </Modal>
  );
}

export default Login;
