import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import NewProductsSlider from "../components/slider";

const index = () => {
  return (
    <>
      <Hero />
      <NewProductsSlider />
      <Sponsors />
    </>
  );
};

export default index;
