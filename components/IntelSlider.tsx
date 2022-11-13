import Glider from "react-glider";
import "glider-js/glider.min.css";
import { Box } from "@mui/material";

const IntelSlider = () => {
  return (
    <Glider
      className="glider-container"
      draggable
      hasDots
      slidesToShow={1}
      scrollLock
    >
      <div>
        <Box component={"img"}></Box>
      </div>
    </Glider>
  );
};
