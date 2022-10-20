import Link from "next/link";
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box"

export default function NavbarComponents({handle}){
    return(
        <Box component={"nav"} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 1,
        }}>
            <Box component={"ul"} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                listStyle: 'none',
                fontWeight: 'bold'
            }}>
                <li>
                    <Link href={"/"}><a>Laptops</a></Link>
                </li>
                <li>
                    <Link href={"/"}><a>Desktop PCs</a></Link>
                </li>
                <li>
                    <Link href={"/"}><a>Networking Devices</a></Link>
                </li>
                <li>
                    <Link href={"/"}><a>Printers & Scanners</a></Link>
                </li>
                <li>
                    <Link href={"/"}><a>PC Parts</a></Link>
                </li>
                <li>
                    <Link href={"/"}><a>All Other Products</a></Link>
                </li>
                <li>
                    <Link href={"/"}><a>Repairs</a></Link>
                </li>
            </Box>
            <Button variant="outlined">Our Deals</Button>
            <SearchIcon sx={{
                cursor:'pointer'
            }} fontSize="large" onClick={(e)=>handle()}/>
        </Box>
    )
}