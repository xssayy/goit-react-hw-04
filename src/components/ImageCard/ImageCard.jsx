import style from "./ImageCard.module.css";

const ImageCard = ({ item }) => {
  return (
    <div>
      <img className={style.galleryItem} src={item.urls.small} alt="" />
    </div>
  );
};

export default ImageCard;
