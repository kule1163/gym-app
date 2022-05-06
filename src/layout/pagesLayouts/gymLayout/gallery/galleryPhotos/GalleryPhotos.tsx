import React, { useState, useCallback, useEffect, memo } from "react";
import ImageGallery from "react-image-gallery";
import { useAppSelector } from "../../../../../app/hooks";

interface ImagesProps {
  original: string;
  thumbnail: string;
}

const GalleryPhotos = () => {
  const [images, setImages] = useState([] as ImagesProps[]);
  const galleryItemChildren = useAppSelector(
    (state) => state.xTreme.galleryItemChildren
  );

  const imagesCallback = useCallback(() => {
    let pimages: ImagesProps[] = [];
    galleryItemChildren.forEach((item) => {
      pimages.push({ original: item.img, thumbnail: item.img });
    });
    setImages(pimages);
  }, [galleryItemChildren]);

  useEffect(() => {
    imagesCallback();
  }, [imagesCallback]);

  return <ImageGallery items={images} />;
};

export default memo(GalleryPhotos);
