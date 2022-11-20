import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import Navbar from "../navbar/Navbar";
import Testimonials from "../Testimonials";
import ServiceCards from "../ServiceCards";
import Footer from "../Footer";
import { useStores } from "../../store/root-store-context";
import { observer } from "mobx-react";
import { diffInDays } from "../../src/utils/diffInDays";
import Divider from "@mui/material/Divider";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { productsStore } = useStores();

  useEffect(() => {
    const diff = diffInDays(productsStore.lastUpdate, new Date());
    if (diff > 1) {
      // TODO: fix this
      productsStore.getProducts();
    }
  }, []);

  return (
    <Box
      sx={{
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
      <Header />
      <Navbar />
      <Divider />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Testimonials />
      <ServiceCards />
      <Footer />
    </Box>
  );
};

export default observer(Layout);
