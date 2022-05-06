import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { isTypeNode } from "typescript";
import { CartItem } from "../../utils/cartItems/cartItems";
import { GaleryItemChildren } from "../../utils/galery/galeryItems";
import {
  DynamicTextProps,
  MenuItemChildren,
  menuItems,
} from "../../utils/menuItems";
import { Post } from "../../utils/posts/posts";
import { ProductProps } from "../../utils/products/products";
import { ScheduleDayChildren } from "../../utils/schedule/schdules";
import { schedules } from "../../utils/schedule/schdules";

export interface InitialState {
  currentMenu: string;
  currentMenuChild: string;
  currentMenuChildren: MenuItemChildren[];
  menuToggle: boolean;
  topMenuHeight: number;
  galleryItemChildren: GaleryItemChildren[];
  scheduleDayChildren: ScheduleDayChildren[];
  scheduleDay: string;
  menuChildrenCategory: string;
  homeDynamicText: DynamicTextProps;
  currentProductIndex: number;
  cartToggle: boolean;
  cartItems: CartItem[];
  totalPrice: number;
  totalProducts: number;
}

const initialState: InitialState = {
  currentMenu: "gym",
  currentMenuChild: "",
  currentMenuChildren: menuItems[0].children,
  menuToggle: false,
  topMenuHeight: 0,
  galleryItemChildren: [] as GaleryItemChildren[],
  scheduleDayChildren: schedules[0].children,
  scheduleDay: schedules[0].day,
  menuChildrenCategory: "all",
  homeDynamicText: {
    firstText: "EXTREME",
    secondText: "ARENAS",
  },
  currentProductIndex: 0,
  cartToggle: false,
  cartItems: [],
  totalPrice: 0,
  totalProducts: 0,
};

interface HandleProductCount {
  id: string;
  target: string;
}

export const xTreme = createSlice({
  name: "xTreme",
  initialState,
  reducers: {
    setCurrentMenu: (state, action: PayloadAction<string>) => {
      state.currentMenu = action.payload;
    },
    setCurrentMenuChildren: (
      state,
      action: PayloadAction<MenuItemChildren[]>
    ) => {
      state.currentMenuChildren = action.payload;
    },
    setMenuToggle: (state, action: PayloadAction<boolean>) => {
      state.menuToggle = action.payload;
    },
    setTopMenuHeight: (state, action: PayloadAction<number>) => {
      state.topMenuHeight = action.payload;
    },
    setGalleryItemChildren: (
      state,
      action: PayloadAction<GaleryItemChildren[]>
    ) => {
      state.galleryItemChildren = action.payload;
    },
    setScheduleDayChildren: (
      state,
      action: PayloadAction<ScheduleDayChildren[]>
    ) => {
      state.scheduleDayChildren = action.payload;
    },
    setScheduleDay: (state, action: PayloadAction<string>) => {
      state.scheduleDay = action.payload;
    },
    setCurrentMenuChild: (state, action: PayloadAction<string>) => {
      state.currentMenuChild = action.payload;
    },
    setHomeDynamicText: (state, action: PayloadAction<DynamicTextProps>) => {
      state.homeDynamicText = action.payload;
    },
    setMenuChildrenCategory: (state, action: PayloadAction<string>) => {
      state.menuChildrenCategory = action.payload;
    },
    setCurrentProductIndex: (state, action: PayloadAction<number>) => {
      state.currentProductIndex = action.payload;
    },
    setCartToggle: (state, action: PayloadAction<boolean>) => {
      state.cartToggle = action.payload;
    },
    setCartItem: (state, action: PayloadAction<CartItem>) => {
      let currentItem: CartItem | undefined = state.cartItems.find(
        (item) => item.sign === action.payload.sign
      );
      if (currentItem !== undefined) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.sign === action.payload.sign) {
            return {
              ...item,
              count: (
                Number(item.count) + Number(action.payload.count)
              ).toString(),
            };
          } else {
            return item;
          }
        });
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeCartItem: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload
      );
    },
    handleTotal: (state) => {
      const { totalPrice, totalProducts } = state.cartItems.reduce(
        (arr, item) => {
          const totalProducts = (arr.totalProducts += Number(item.count));
          const totalPrice = (arr.totalPrice +=
            Number(item.count) * Number(parseFloat(item.secondPrice)));

          return { totalPrice, totalProducts };
        },
        { totalPrice: 0, totalProducts: 0 }
      );

      state.totalPrice = totalPrice;
      state.totalProducts = totalProducts;
    },
    handleProductCount: (state, action: PayloadAction<HandleProductCount>) => {
      const product = state.cartItems.find(
        (item) => item.cartItemId === action.payload.id
      );
      if (product) product.count = action.payload.target;
    },
  },
});

export const {
  setCurrentMenu,
  setCurrentMenuChildren,
  setMenuToggle,
  setTopMenuHeight,
  setGalleryItemChildren,
  setScheduleDayChildren,
  setScheduleDay,
  setCurrentMenuChild,
  setHomeDynamicText,
  setMenuChildrenCategory,
  setCurrentProductIndex,
  setCartToggle,
  setCartItem,
  removeCartItem,
  handleTotal,
  handleProductCount,
} = xTreme.actions;

export default xTreme.reducer;
