import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1644982654072-0b42e6636821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1652662946272-5426d1cd6f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1652640599547-bd89fcb99eaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60",
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1652561596308-d2e159d5c54a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
    isFavorite: false,
    isInCart: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1652644193650-446b498f6743?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=60",
    isFavorite: false,
    isInCart: false,
  },
];

const GalleryContext = createContext();

const GalleryProvider = (props) => {
  const { storedValue: photoStorage, setValue: setPhotoStorage } =
    useLocalStorage("photos", fakeData);
  const { storedValue: favoriteStorage, setValue: setFavoriteStorage } =
    useLocalStorage("favoritePhotos", []);
  const { storedValue: cartStorage, setValue: setCartStorage } =
    useLocalStorage("cartPhotos", []);
  const [photos, setPhotos] = useState(photoStorage);
  const [cartPhotos, setCartPhotos] = useState(cartStorage);
  const [favoritePhotos, setFavoritePhotos] = useState(favoriteStorage);

  const toggleFavorite = (id) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
    setPhotoStorage(updatedPhotos);
    const updatedFavoritePhotos = updatedPhotos.filter(
      (photo) => photo.isFavorite
    );
    setFavoritePhotos(updatedFavoritePhotos);
    setFavoriteStorage(updatedFavoritePhotos);
  };

  const addToCart = (id) => {
    const updatedPhotos = photos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isInCart: true };
      }
      return photo;
    });
    setPhotos(updatedPhotos);
    const updatedFavoritePhotos = updatedPhotos.filter(
      (photo) => photo.isInCart
    );
    setCartPhotos(updatedFavoritePhotos);
    setCartStorage(updatedFavoritePhotos);
  };

  const value = {
    photos,
    cartPhotos,
    favoritePhotos,
    setPhotos,
    setCartPhotos,
    setFavoritePhotos,
    toggleFavorite,
    addToCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
};

const useGallery = () => {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
};

export { GalleryProvider, useGallery };
