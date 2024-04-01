import style from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={style.header}>
      <form
        className={style.form}
        onSubmit={async (e) => {
          e.preventDefault();
          const query = e.target.elements.searchbar.value.trim().toLowerCase();
          await onSubmit(query);
          e.target.reset();
        }}
      >
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
