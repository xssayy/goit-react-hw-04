// import { useState } from "react";

// import { useQuery } from "../Hooks/UseQuery";
import style from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ items, openModal }) => {
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
        </div>
      )}
    </>
  );
};

export default ImageGallery;
