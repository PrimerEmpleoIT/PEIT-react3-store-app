import React from "react";
import { Box } from "@mui/material";

interface ActionBtnProps {
  icon: React.ReactNode;
  handleOnClick: () => void;
}

export const ActionBtn: React.FC<ActionBtnProps> = (props) => {
  const { icon, handleOnClick } = props;

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        borderRadius: "100%",
        border: "1px solid #CACDD8",
        color: "#CACDD8",
        width: "20px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleOnClick}
    >
      {icon}
    </Box>
  );
};
