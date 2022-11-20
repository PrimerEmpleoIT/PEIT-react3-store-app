import * as React from "react";
import { useState, useEffect } from "react";
import { useMediaQuery, Button } from "@mui/material";
import { Box } from "@mui/system";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import PaymentIcon from "@mui/icons-material/Payment";
import PhotoProduct from "./PhotoProduct";
import PayComponent from "./PayComponent";
import TabProduct from "./TabProduct";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductInfo(props: any) {
  const [value, setValue] = React.useState(0);
  const tablet = useMediaQuery("(min-width:768px)");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  let {
    title,
    description,
    details,
    specs,
    images,
    price,
    createdat,
    stock,
    category,
  } = props.product;
  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "1398px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {tablet ? (
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box sx={{ width: "50%", backgroundColor: "#F5F7FF" }}>
            <TabProduct
              title={title}
              description={description}
              details={details}
              specs={specs}
            />
          </Box>
          <Box sx={{ width: "50%" }}>
            <PayComponent price={price} />
            <PhotoProduct url={images} />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <PhotoProduct url={images} />
          <PayComponent price={price} />
          <TabProduct
            title={title}
            description={description}
            details={details}
            specs={specs}
          />
        </Box>
      )}
    </Box>
  );
}
