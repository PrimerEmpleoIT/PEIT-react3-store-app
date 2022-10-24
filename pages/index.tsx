import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";


import Hero from "../components/Hero"
import Sponsors from '../components/Sponsors';
import { styled } from '@mui/system';




const index = () => {
  return (
    <>
      <Hero />
      <Sponsors />
    </>
  )


}

export default index