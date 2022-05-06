import React from "react";
import FreePassForm from "../../../../components/pagesComps/gym/schedule/freePassForm/FreePassForm";
import ScheduleComp from "../../../../components/pagesComps/gym/schedule/scheduleComp/ScheduleComp";
import Image from "../../../../assets/gym/homeBack.jpg";
import { Typography } from "@mui/material";
const Schedule = () => {
  return (
    <div
      id="schedule"
      data-testid="scheduleContainer"
      style={{ backgroundImage: `url(${Image})` }}
      className="schedule-container"
    >
      <Typography className="layout-small-header">SCHEDULE</Typography>

      <div className="section-container">
        <ScheduleComp />
        <FreePassForm />
      </div>
    </div>
  );
};

export default Schedule;
