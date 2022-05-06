import { Typography } from "@mui/material";
import FormComp from "./form/FormComp";

const FreePassForm = () => {
  const onSubmit = () => {};

  return (
    <div className="comp-form-container">
      <div className="header-container">
        <Typography className="text">FREE PASS</Typography>
        <div className="line"></div>
      </div>
      <FormComp onSubmit={onSubmit} />
    </div>
  );
};

export default FreePassForm;
