import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { GaleryItemChildren } from "../../utils/galery/galeryItems";
import { menuItems } from "../../utils/menuItems";
import Image from "../../assets/gym/homeBack.jpg";
import { schedules } from "../../utils/schedule/schdules";
import { v4 as uuidv4 } from "uuid";
import xTremeReducer, {
  handleProductCount,
  InitialState,
  handleTotal,
  removeCartItem,
  setCartItem,
  setCartToggle,
  setCurrentMenu,
  setCurrentMenuChild,
  setCurrentMenuChildren,
  setCurrentProductIndex,
  setGalleryItemChildren,
  setHomeDynamicText,
  setMenuChildrenCategory,
  setMenuToggle,
  setScheduleDay,
  setScheduleDayChildren,
  setTopMenuHeight,
  xTreme,
} from "./xTreme";

const cartItemsTest = {
  cartItemId: "130eeaf5-9280-4ed4-9144-88255ce9c116",
  category: "footwear",
  color: "green",
  count: "1",
  details: [],
  featured: true,
  header: "XTREME ARENAS SPORT BAG RIDER SB-009 HDE-F",
  id: "11897bf5-e8e5-4741-ab34-829cfdb8faa6",
  info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed posuere est, in malesuada libero. Cras euismod, mi non accumsan ultrices, est est scelerisque nunc, non tempor nisi velit nec est. Cras ut felis vel tortor ornare cursus. Donec odio ante, lacinia vitae massa semper, varius bibendum eros.",
  secondPrice: "440.23",
  select: [],
  sign: "11897bf5-e8e5-4741-ab34-829cfdb8faa6green40",
  size: "40",
  license:
    "https://www.shutterstock.com/tr/image-vector/tshirt-sport-design-templatesoccer-jersey-mockupuniform-1135214936",
};

export const initialState: InitialState = {
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
  cartItems: [cartItemsTest],
  totalPrice: 0,
  totalProducts: 0,
};

const currentMenuChildrenTest = [
  { id: uuidv4(), text: "gallery", href: "gallery", useToFilter: false },
];

const galleryItemChildrenTest = [
  { id: uuidv4(), img: Image },
  { id: uuidv4(), img: Image },
  { id: uuidv4(), img: Image },
];

const scheduleDayChildrenTest = [
  { id: uuidv4(), text: "cardio", time: "6 am - 8 am" },
];

describe("xtreme counter", () => {
  it("handleCurrentMenu", () => {
    const currentMenu = xTremeReducer(initialState, setCurrentMenu("blog"));
    expect(currentMenu.currentMenu).toBe("blog");
  });
  it("handleCurrentMenuChild", () => {
    const currentMenuChild = xTremeReducer(
      initialState,
      setCurrentMenuChild("all")
    );
    expect(currentMenuChild.currentMenuChild).toBe("all");
  });
  it("handleCurrentMenuChildren", () => {
    const currentMenuChildren = xTremeReducer(
      initialState,
      setCurrentMenuChildren(currentMenuChildrenTest)
    );
    expect(currentMenuChildren.currentMenuChildren).toBe(
      currentMenuChildrenTest
    );
  });
  it("hnadleMenuToggle", () => {
    const menuToggle = xTremeReducer(initialState, setMenuToggle(true));
    expect(menuToggle.menuToggle).toBe(true);
  });
  it("handleTopMenuHeight", () => {
    const topMenuHeight = xTremeReducer(initialState, setTopMenuHeight(200));
    expect(topMenuHeight.topMenuHeight).toBe(200);
  });
  it("handleMenuChildrenCategory", () => {
    const galleryItemChildren = xTremeReducer(
      initialState,
      setGalleryItemChildren(galleryItemChildrenTest)
    );
    expect(galleryItemChildren.galleryItemChildren).toBe(
      galleryItemChildrenTest
    );
  });
  it("handleScheduleDayChildren", () => {
    const scheduleDayChildren = xTremeReducer(
      initialState,
      setScheduleDayChildren(scheduleDayChildrenTest)
    );
    expect(scheduleDayChildren.scheduleDayChildren).toBe(
      scheduleDayChildrenTest
    );
  });
  it("handleScheduleDay", () => {
    const scheduleDay = xTremeReducer(initialState, setScheduleDay("sunday"));
    expect(scheduleDay.scheduleDay).toBe("sunday");
  });
  it("handleMenuChildrenCatrgory", () => {
    const menuChildrenCategory = xTremeReducer(
      initialState,
      setMenuChildrenCategory("all")
    );
    expect(menuChildrenCategory.menuChildrenCategory).toBe("all");
  });
  it("handleHomeDynamicComp", () => {
    const homeDynamicText = xTremeReducer(
      initialState,
      setHomeDynamicText({
        firstText: "EXTREME",
        secondText: "ARENAS",
      })
    );
    expect(homeDynamicText.homeDynamicText).toStrictEqual({
      firstText: "EXTREME",
      secondText: "ARENAS",
    });
  });
  it("handleCurrentProductIndex", () => {
    const currentProductIndex = xTremeReducer(
      initialState,
      setCurrentProductIndex(1)
    );
    expect(currentProductIndex.currentProductIndex).toBe(1);
  });
  it("handleCartToggle", () => {
    const cartToggle = xTremeReducer(initialState, setCartToggle(true));
    expect(cartToggle.cartToggle).toBe(true);
  });
  it("hnadleCartItems", () => {
    const cartItems = xTremeReducer(initialState, setCartItem(cartItemsTest));
    expect(cartItems.cartItems.length).toBe(1);
  });
  it("handleTotalPrice", () => {
    const totalPriceTest = xTremeReducer(initialState, handleTotal());
    expect(totalPriceTest.totalPrice).toBe(440.23);
  });
  it("handleTotalItem", () => {
    const totalProductTest = xTremeReducer(initialState, handleTotal());
    expect(totalProductTest.totalProducts).toBe(1);
  });
  it("handleRemoveItem", () => {
    const removeCartItemTest = xTremeReducer(
      initialState,
      removeCartItem("130eeaf5-9280-4ed4-9144-88255ce9c116")
    );
    expect(removeCartItemTest.cartItems.length).toBe(0);
  });
});
