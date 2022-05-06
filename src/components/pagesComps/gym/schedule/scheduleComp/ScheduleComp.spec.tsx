import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../app/store";
import ScheduleComp from "./ScheduleComp";
import { schedules } from "../../../../../utils/schedule/schdules";

describe("ScheduleComp", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ScheduleComp />
      </Provider>
    );
  });

  it("schedules", () => {
    expect(schedules.length).toBe(7);
  });
  it("schedules day", () => {
    expect(schedules[0].day).toBe("sunday");
  });
  it("schedules symbol", () => {
    expect(schedules[0].symbol).toBe("s");
  });
  it("schedules children", () => {
    expect(schedules[0].children[0]).toEqual(
      expect.objectContaining({
        text: "cardio",
        time: "6 am - 8 am",
      })
    );
  });
});
