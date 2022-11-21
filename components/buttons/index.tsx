import React from "react";
import { Button } from "@mui/material";

interface CustomBtnProps {
  text: string;
  isPrimary: boolean;
  handleOnClick: () => void;
}

export const CustomBtn: React.FC<CustomBtnProps> = (props) => {
  const { text, isPrimary, handleOnClick } = props;

  return (
    <Button
      sx={{
        backgroundColor: isPrimary ? "#FFF" : "#0156ff",
        color: isPrimary ? "#0156ff" : "#FFF",
        borderRadius: "35px",
        border: `2px solid ${isPrimary ? "#0156ff" : "#FFF"}`,
        width: {
          xs: "162px",
          mobile: "182px",
          tablet: "250px",
        },
        height: "37px",
        margin: "17.8px 0 20.23px 0",
        ":hover": {
          backgroundColor: isPrimary ? "#0156ff" : "#4280fc",
          color: isPrimary ? "#FFF" : "#0156ff",
          transition: "0.6s",
        },
        fontSize: "14px",
        fontWeight: "600",
      }}
      onClick={handleOnClick}
    >
      {text}
    </Button>
  );
};
