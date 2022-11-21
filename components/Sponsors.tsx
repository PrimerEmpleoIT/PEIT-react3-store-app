import { Box } from "@mui/system";
import sponsor from "../src/constants/sponsor";

const Sponsors = (props: any) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      width="calc(100% - 30px)"
    >
      {sponsor.map((source, index) => {
        return (
          <Box
            component={"img"}
            src={source.img}
            alt={source.name}
            sx={{
              flex: "none",
              order: "0",
              flexGrow: "0",
              width: "127px",
              height: "66px",
              margin: "22px",
              "&:hover": {
                backgroundColor: "#ebebeb",
                transition: "0.2s",
              },
            }}
            key={index}
          />
        );
      })}
    </Box>
  );
};

export default Sponsors;
