import React, { useState } from "react";
import { galleryItems } from "../../../../utils/galery/galeryItems";
import Image from "../../../../assets/gym/homeBack.jpg";
import SearchIcon from "../../../../components/pagesComps/gym/Gallety/SearchIcon/SearchIcon";
import GalleryPhotos from "./galleryPhotos/GalleryPhotos";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Gallery = () => {
  const [showPhotos, setShowPhotos] = useState<boolean>(false);

  return (
    <>
      <div id="gallery" className="gallery-container">
        {galleryItems.map((item) => (
          <div
            className="flex-c-c single-box"
            style={{ backgroundImage: `url(${Image})` }}
          >
            <SearchIcon item={item} setShowPhotos={setShowPhotos} />
          </div>
        ))}
      </div>
      <div
        data-testid="galleryContainer"
        className={`gallery-photos-box ${showPhotos && "galery-photos-show"}`}
      >
        <GalleryPhotos />
        <div
          data-testid="close"
          onClick={() => setShowPhotos(false)}
          className="icon-box"
        >
          <AiOutlineCloseCircle color="white" size={50} />
        </div>
      </div>
    </>
  );
};

export default Gallery;
