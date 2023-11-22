import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { registerUser } from "../api/apiService";

function Register({ onClose, title }) {
  const { register, handleSubmit, setError, formState } = useForm();
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });
        return;
      }

      await registerUser(data);
      window.location.pathname = "/";
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <Modal onClose={onClose} title={title}>
      <div className="p-5">
        <div className="text-center h4 mb-4">Create an account</div>
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
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$"
            title="Password must contain at least 4 characters, one letter, one number, and one special character."
            required
          />
          <Input
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            register={register}
            onKeyDown={null}
            required
          />
          {errors.confirmPassword && (
            <div className="text-danger small">
              {errors.confirmPassword.message}
            </div>
          )}
          <Button>Register</Button>
        </form>
      </div>
    </Modal>
  );
}

export default Register;
