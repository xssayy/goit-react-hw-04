import style from "./ImageCard.module.css";

const ImageCard = ({ item, openModal }) => {
  return (
    <div>
      <img
        className={style.galleryItem}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item)}
      />
    </div>
  );
};

export default ImageCard;
