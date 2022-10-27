import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


import Hero from "../components/Hero"
import Sponsors from '../components/Sponsors';

import TypeProducts from "../components/TypeProducts";


const index = () => {
  return (
    <>
      <Hero />
      <TypeProducts /> 
      <Sponsors />
    </>
  )


}

export default index