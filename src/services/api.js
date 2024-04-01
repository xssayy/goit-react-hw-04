import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
export const getData = async (query, page) => {
  const response = await axios.get("", {
    params: {
      client_id: "RYfnsD_OSWqdJOknKnh_kbmhW4zYn8qLrrzs1hxPv5o",
      query,
      page,
    },
  });

  return response.data;
};

// const onSubmit = async (query) => {
//   setPage(1);

//   if (query === "") {
//     toast.error("Field cannot be empty!", {
//       duration: 2000,
//       position: "top-right",
//     });

//     setLoader(true);
//     setGallery([]);
//     setLoader(false);

//     // alert("Field cannot be empty!");
//     return;
//   }

//   setGallery([]);
//   setQuery(query);
//   try {
//     const response = await getData(query);
//     const data = response.results;
//     const totalPages = response.total_pages;
//     setGallery(data);
//     setMaxPage(totalPages);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// };
// //=========
// useEffect(() => {
//   console.log("useEffect page: ", page);
// }, [page]);

// const handleLoadMore = async () => {
//   try {
//     setPage(page + 1);
//     console.log(page);
//     const newData = await getData(query, page);
//     const newImages = newData.results;
//     setGallery((prevImages) => [...prevImages, ...newImages]);
//     scrollBy({
//       top: window.innerHeight,
//       behavior: "smooth",
//     });
//     console.log(page);
//     if (page === maxPage) {
//       toast.error("You've reached the end of collection!", {
//         duration: 2000,
//         position: "top-right",
//       });
//     }
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// };
