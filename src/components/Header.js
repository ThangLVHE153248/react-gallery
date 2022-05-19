import { faHeart, faCompass } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo512 from "../assets/logos/logo512.png";
import { useGallery } from "../contexts/GalleryContext";

const User = {
  name: "Viet Thang",
  avatar:
    "https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
};

const Header = () => {
  const { favoritePhotos, cartPhotos } = useGallery();

  const Items = [
    {
      name: "favorite",
      quantity: favoritePhotos.length,
      icon: faHeart,
    },
    {
      name: "cart",
      quantity: cartPhotos.length,
      icon: faCompass,
    },
  ];

  return (
    <div className="h-15 px-5 py-3 flex justify-between items-center shadow-md">
      <div className="flex gap-5 items-center text-2xl">
        <img
          src={logo512}
          alt="logo"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>Simple Gallery</div>
      </div>
      <div className="flex gap-5 items-center text-2xl">
        {Items.map((item, index) => (
          <div className="relative cursor-pointer" key={index}>
            <div className="item_favorite-number absolute top-0 left-3 w-5 h-5 rounded-full bg-pink-600 text-white text-center font-semibold">
              <span>{item.quantity}</span>
            </div>
            <FontAwesomeIcon icon={item.icon} />
          </div>
        ))}
        <img
          src={User.avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
