// import { useState } from "react";

// import { useQuery } from "../Hooks/UseQuery";
import style from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const ImageGallery = ({
  items,
  handleLoadMore,
  maxPage,
  page,
  openModal,
  children,
}) => {
  return (
    <>
      {items.length > 0 && (
        <div>
          <ul className={style.gallery}>
            {items.map((item) => (
              <li key={item.id}>
                <ImageCard item={item} openModal={openModal} />
              </li>
            ))}
          </ul>
          {children}
          {page <= maxPage && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
        </div>
      )}
    </>
  );
};

export default ImageGallery;
