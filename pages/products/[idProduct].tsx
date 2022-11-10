import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import products from "../../src/constants/products";

export default function Product(){
    const [product, setProduct] = useState<{
        id: number,
        title: string,
        price: number,
        stock: boolean,
        rate: number,
        reviews: number,
        img: string,
      }| null>(null);
    const router = useRouter();
    const route = router.query.idProduct;

    useEffect(()=>{
        products.forEach(el => {
            if (el.id.toString() == route){
                setProduct(el)
            }
        })
    },[])

    return(
        <Box>
            {(product==null)
            ?<h1>Cargando el producto</h1>
            :<h1>listo</h1>
            }
        </Box>
    )
}