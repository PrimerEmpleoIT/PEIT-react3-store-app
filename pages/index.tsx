import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import NewProductsSlider from "../components/slider";
import TypeProducts from "../components/TypeProducts";
import CardsInstagram from "../components/storiesInstagram/CardsInstagram"



const index = () => {
  return (
    <>
      <Hero />

      <NewProductsSlider />

      <TypeProducts index={0}/> 
      <TypeProducts index={1}/> 
      <TypeProducts index={2}/> 
      <TypeProducts index={3}/> 

      <Sponsors />
      <CardsInstagram/>
    </>
  );
};

export default index;
