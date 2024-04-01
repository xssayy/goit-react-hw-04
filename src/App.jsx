import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [gallery, setGallery] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  //=====
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };
  Modal.setAppElement("#root");
  //===
  axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
  const onSubmit = async (query) => {
    if (query === "") {
      toast.error("Field cannot be empty!", {
        duration: 2000,
        position: "top-right",
      });

      setLoader(true);
      setGallery([]);
      setLoader(false);

      // alert("Field cannot be empty!");
      return;
    }
    setGallery([]);
    setQuery(query);
    try {
      const response = await getData(query);
      const data = response.results;
      const totalPages = response.total_pages;
      setGallery(data);
      setPage(2);
      setMaxPage(totalPages);
    } catch (err) {
      console.log("Error: ", err);
    }
  };
  //=========
  const handleLoadMore = async () => {
    try {
      const newData = await getData(query, page);
      const newImages = newData.results;
      setGallery((prevImages) => [...prevImages, ...newImages]);
      scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
      const newPage = page + 1;
      setPage(newPage);
      if (newPage > maxPage) {
        toast.error("You've reached the end of collection!", {
          duration: 2000,
          position: "top-right",
        });
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  //============
  const getData = async (query, page = 1) => {
    setError(false);
    setLoader(true);
    const response = await axios.get("", {
      params: {
        client_id: "RYfnsD_OSWqdJOknKnh_kbmhW4zYn8qLrrzs1hxPv5o",
        query,
        page,
      },
    });
    if (Boolean(response.data.total) === false) {
      setError(true);
      toast.error("No results were found :(. Try again!", {
        duration: 2000,
        position: "top-right",
      });
      setLoader(false);
      return;
    }
    setLoader(false);
    return response.data;
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} setGallery={setGallery} />
      {loader && page < 2 && <Loader />}
      {gallery.length > 0 && (
        <ImageGallery
          items={gallery}
          handleLoadMore={handleLoadMore}
          page={page}
          maxPage={maxPage}
          openModal={openModal}
        >
          {loader && page > 1 && <Loader />}
        </ImageGallery>
      )}

      {error && <ErrorMessage />}

      <ImageModal
        selectedImage={selectedImage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Toaster />
    </>
  );
}

export default App;
