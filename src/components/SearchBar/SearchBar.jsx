import style from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.searchbar.value.trim().toLowerCase();
    if (query === "") {
      toast.error("Field cannot be empty!", {
        duration: 2000,
        position: "top-right",
      });
      return;
    }
    onSubmit(query);
    e.target.reset();
  };
  return (
    <header className={style.header}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          name="searchbar"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={style.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
