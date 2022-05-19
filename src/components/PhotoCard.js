import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useGallery } from "../contexts/GalleryContext";

const PhotoCard = ({ photo: { url, isFavorite, id, isInCart } }) => {
  const { toggleFavorite, addToCart } = useGallery();

  return (
    <div className="card relative mx-auto">
      <div
        className={`card_favorite absolute top-2 right-4 text-2xl text-white hover:cursor-pointer ${
          isFavorite ? "block text-pink-600" : "hidden"
        }`}
        onClick={() => toggleFavorite(id)}
      >
        {isFavorite ? (
          <FontAwesomeIcon icon={faHeartSolid} />
        ) : (
          <FontAwesomeIcon icon={faHeartRegular} />
        )}
      </div>
      <img
        src={url}
        alt="product"
        className="h-60 w-60 object-cover rounded-lg"
      />
      {!isInCart ? (
        <button
          className="card_button absolute transform left-1/2 bottom-5 bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded hidden"
          onClick={() => addToCart(id)}
        >
          Add to cart
        </button>
      ) : (
        <button className="card_button absolute transform left-1/2 bottom-5 bg-gray-400 text-black font-bold py-2 px-4 rounded hidden cursor-not-allowed">
          Already in cart!
        </button>
      )}
    </div>
  );
};

export default PhotoCard;
