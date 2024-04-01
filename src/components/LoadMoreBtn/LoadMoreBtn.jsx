import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleLoadMore }) => {
  return (
    <>
      <button className={style.loadMoreBtn} onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
