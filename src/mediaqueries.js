const { useMediaQuery } = require("@mui/material")



const isNotSmallerScreen = useMediaQuery("(min-width:900px)");
const isSmall = useMediaQuery("(max-width:500px)")


export default {
    isNotSmallerScreen,
    isSmall
}