import Input from "../components/Input";
import Button from "../components/Button";
import { login } from "../api/apiService";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Modal from "../components/Modal";

function Login({ size, onClose, title }) {
  const { register, handleSubmit } = useForm();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await login(data);
      window.location.pathname = "/";
      setShowErrorMessage(false);
    } catch (error) {
      setShowErrorMessage(true);
      console.error("Error logging in:", error);
    }
  };

  return (
    <Modal size="lg" onClose={onClose} title={title}>
      <div className="p-5">
        <div className="text-center h4 mb-4">Please login</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Username"
            id="username"
            type="text"
            register={register}
            onKeyDown={null}
            required
          />
          <Input
            label="Password"
            id="password"
            type="password"
            register={register}
            onKeyDown={null}
            required
          />
          {showErrorMessage && (
            <div className="text-danger small">
              Invalid inforamtions. Please retry!
            </div>
          )}
          <Button>login</Button>
        </form>
      </div>
    </Modal>
  );
}

export default Login;
