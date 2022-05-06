import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { AiTwotoneDownSquare } from "react-icons/ai";
import { schedules } from "../../../../../utils/schedule/schdules";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import {
  setScheduleDay,
  setScheduleDayChildren,
} from "../../../../../features/cocktails/xTreme";
import gsap from "gsap";

const ScheduleComp = () => {
  const dispatch = useAppDispatch();
  const scheduleDayChildren = useAppSelector(
    (state) => state.xTreme.scheduleDayChildren
  );
  const scheduleDay = useAppSelector((state) => state.xTreme.scheduleDay);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1 });
  }, [scheduleDay]);

  return (
    <div className="schedule-comp-container ">
      <div className="header-container">
        {schedules.map((item) => (
          <Typography
            onClick={() => {
              dispatch(setScheduleDayChildren(item.children));
              dispatch(setScheduleDay(item.day));
            }}
            className={`header-text ${
              item.day === scheduleDay && "current-text"
            }`}
            key={item.id}
          >
            {item.symbol.toUpperCase()}
          </Typography>
        ))}
      </div>
      <div ref={ref} className="section-box">
        {scheduleDayChildren.map((item) => (
          <div key={item.id} className="single-box">
            <Typography className="content-text">{item.text}</Typography>
            <div className="doted"></div>
            <div className="right-box">
              <AiTwotoneDownSquare size={7} />
              <Typography className="text">{item.time}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleComp;
