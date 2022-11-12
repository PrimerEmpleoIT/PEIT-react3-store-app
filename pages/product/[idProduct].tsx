import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import ProductInfo from '../../components/Product/ProductInfo';
import ProductSupport from '../../components/Product/ProductSupport';

export default function Product(){
    const [product, setProduct] = useState<{
        id: number,
        title: string,
        description: string,
        details: string,
        specs: object,
        images: string,
        price: number,
        createdat:string,
        stock: number,
        category:number
      }| null>(null);
    const router = useRouter();
    const route = router.query.idProduct;

    useEffect(() => {
        fetch(`https://tech-store-api.onrender.com/products/${route}/?format=json`)
          .then((res) => res.json())
          .then((data) => {
            setProduct(data)
          })
      }, [])
    

    return(
        <Box>
            {(product==null)
            ?<h1>Cargando el producto</h1>
            :<Box sx={{
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                <ProductInfo product={product}/>
            </Box>
            }
            <ProductSupport/>
        </Box>
    )
}