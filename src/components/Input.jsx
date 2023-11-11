function Input({ label, id, type, register, ...rest }) {
  return (
    <div className={"mb-4"}>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        name={id}
        id={id}
        {...(register !== null && { ...register(id) })}
        type={type}
        {...rest}
      />
    </div>
  );
}

export default Input;
