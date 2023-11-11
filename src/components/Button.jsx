function Button({ children, ...rest }) {
  return (
    <button
      className={"btn btn-primary px-3 py-1.5 rounded border mb-4"}
      type="submit"
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
