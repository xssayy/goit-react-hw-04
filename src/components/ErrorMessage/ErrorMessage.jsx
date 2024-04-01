import style from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div>
      <p className={style.errorMessage}>No results, try again!</p>
    </div>
  );
};

export default ErrorMessage;
