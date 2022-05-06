import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch } from "../../../../../app/hooks";
import { setGalleryItemChildren } from "../../../../../features/cocktails/xTreme";
import { GaleryItem } from "../../../../../utils/galery/galeryItems";

interface SearchIconProps {
  setShowPhotos: React.Dispatch<React.SetStateAction<boolean>>;
  item: GaleryItem;
}

const SearchIcon = ({ setShowPhotos, item }: SearchIconProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex-c-c searchIcon-container">
      <div
        data-testid="search-icon"
        onClick={() => {
          setShowPhotos(true);
          dispatch(setGalleryItemChildren(item.children));
        }}
        className="flex-c-c searchIcon-box"
      >
        <AiOutlineSearch size={30} />
      </div>
    </div>
  );
};

export default SearchIcon;
