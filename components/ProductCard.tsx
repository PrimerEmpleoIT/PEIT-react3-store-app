import { Box } from "@mui/system";
import Star from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import Link from "next/link";

const ProductCard = (props: any) => {
  let max = props.rate; // max tiene que ser la puntuacion del producto
  let stock = props.stock;
  let colorStyle = props.stock ? "#78A962" : "#C94D3F";
  let reviews = [];
  for (let i = 0; i < max; i++) {
    reviews.push(true);
  }
  max = 5 - max;
  for (let i = 0; i < max; i++) {
    reviews.push(false);
  }

  return (
    <Link href={`/products/${props.indice}`}>
    <Box
      sx={{
        flexWrap: "wrap",
        padding: "0px 25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "235px",
        cursor:'pointer'
      }}
    >
      <Box
        sx={{
          color: `${colorStyle}`,
          display: "flex",
          alignItems: "center",
          alignSelf: "flex-start",
        }}
      >
        {stock ? (
          <CheckCircleIcon
            sx={{ color: "#78A962", width: "15px", height: "15px" }}
          ></CheckCircleIcon>
        ) : (
          <CallSharpIcon
            sx={{ color: "red", width: "15px", height: "15px" }}
          ></CallSharpIcon>
        )}
        {stock ? "In Stock" : "Check Avalaibility"}
      </Box>
      <Box
        component={"img"}
        src={props.img}
        sx={{
          width: "150px",
          alignSelf: "center",
        }}
      ></Box>
      <Box sx={{ display: "inline-flex", alignItems: "center" }}>
        {reviews.map((data, id) =>
          data ? (
            <Star
              key={id}
              sx={{ color: "orange", width: "13px", height: "13px" }}
            ></Star>
          ) : (
            <Star
              key={id}
              sx={{ color: "#CACDD8", width: "13px", height: "13px" }}
            ></Star>
          )
        )}
        <p style={{ paddingLeft: "15px" }}>reviews({props.reviews})</p>
      </Box>
      <Box
        sx={{
          width: "185px",
          height: "65px",
          fontWeight: "400",
          fontSize: "14px",
        }}
      >
        {props.title}
      </Box>
      <Box
        sx={{
          width: "184px",
          height: "75px",
          padding: "10px",
          alignItems: "center",
          display: "column",
        }}
      >
        <Box
          sx={{
            textDecorationLine: "line-through",
            color: "grey",
            fontWeight: "400",
            fontSize: "14px",
          }}
        >
          {`$ ${props.price}`}
        </Box>
        <Box
          sx={{
            textDecorationColor: "black",
          }}
        >
          {`$ ${props.price}`}
        </Box>
      </Box>
    </Box>
    </Link>
  );
};

export default ProductCard;
