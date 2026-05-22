import "./styles.css";
function Error({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} className="err-msg" role="alert">
      {message}
    </p>
  );
}

export default Error;
