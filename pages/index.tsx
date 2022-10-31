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
      <TypeProducts index={0}/> 
      <TypeProducts index={1}/> 
      <TypeProducts index={2}/> 
      <TypeProducts index={3}/> 
      <Sponsors />
    </>
  )


}

export default index