import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";

interface MenuAccountProps {
  anchorElemAccount: null | HTMLElement;
  openAccount: boolean;
  handleClose: () => void;
}

const MenuAccount: React.FC<MenuAccountProps> = (props) => {
  const { anchorElemAccount, openAccount, handleClose } = props;

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorElemAccount}
      open={openAccount}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleClose}>
        <Typography fontSize={"12px"}>My Account</Typography>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Typography fontSize={"12px"}>My Wish List (0)</Typography>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Typography fontSize={"12px"}>Compare (0)</Typography>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Typography fontSize={"12px"}>Create an Account</Typography>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Typography fontSize={"12px"}>Sign In</Typography>
      </MenuItem>
    </Menu>
  );
};

export default MenuAccount;
