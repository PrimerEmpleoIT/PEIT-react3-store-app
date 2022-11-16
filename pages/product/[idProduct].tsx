import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import ProductInfo from '../../components/Product/ProductInfo';
import ProductSupport from '../../components/Product/ProductSupport';
import FeatureCard from '../../components/Product/FeatureCard';
import { useStores } from "../../store/root-store-context";

export default function Product(){
  const {  productsStore } = useStores();
    const router = useRouter();
    const route = (typeof(router.query.idProduct)==='string')?router.query.idProduct:'',
    product = productsStore.productById(parseInt(route));

    console.log(route);
    console.log(product)


    return(
        <Box sx={{display:'flex',flexDirection:'column',maxWidth:'1398px',minWidth:'100vw'}}>
            {(product==null)
            ?<h1>Cargando el producto</h1>
            :<Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <ProductInfo product={product}/>
            </Box>
            }
            <ProductSupport/>
            <FeatureCard/>
        </Box>
    )
}