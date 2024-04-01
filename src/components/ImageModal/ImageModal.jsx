import Modal from "react-modal";
import style from "./ImageModal.module.css";
Modal.setAppElement("#root");
const ImageModal = ({ isOpen, selectedImage, setIsOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      {selectedImage && (
        <img
          className={style.modalImage}
          src={selectedImage.urls.regular}
          alt={selectedImage.alt_description}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
