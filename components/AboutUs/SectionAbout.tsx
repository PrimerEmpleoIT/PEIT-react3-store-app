import React from "react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

interface SectionAboutProps {
  title: string;
  descriptionTop: string;
  descriptionBottom?: string;
  image: string;
  isBlack: boolean;
}

const SectionAbout: React.FC<SectionAboutProps> = (props) => {
  const { title, descriptionTop, descriptionBottom, image, isBlack } = props;
  const isNotSmallerScreen = useMediaQuery("(min-width:900px)");

  return (
    <Box
      bgcolor={isBlack ? "black" : "white"}
      display="flex"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection={{
          xs: "column-reverse",
          tablet: isBlack ? "row" : "row-reverse",
        }}
        justifyContent={{
          xs: "space-between",
          desktop: "center",
        }}
        alignItems="center"
        padding={{
          xs: "32px",
          tablet: "32px 50px 32px 32px",
          desktop: "32px",
        }}
        width={{
          tablet: "90vw",
          md: "80vw",
        }}
        maxWidth="1240px"
        gap={{
          xs: "32px",
          desktop: "250px",
        }}
      >
        <Box
          sx={{
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          padding="16px"
        >
          <Typography
            variant={isNotSmallerScreen ? "h3" : "h4"}
            textAlign="left"
            fontSize={{
              xs: "32px",
              desktop: "44px",
            }}
            sx={{
              color: isBlack ? "white" : "black",
              marginBottom: "13px",
              width: "100%",
            }}
          >
            {title}
          </Typography>
          <Typography
            fontSize={{
              xs: "14px",
              desktop: "18px",
            }}
            sx={{
              color: isBlack ? "white" : "black",
              fontWeigth: "300",
              marginBottom: "24px",
            }}
          >
            {descriptionTop}
          </Typography>
          {descriptionBottom && (
            <Typography
              fontSize={{
                xs: "14px",
                desktop: "18px",
              }}
              sx={{
                color: isBlack ? "white" : "black",
                fontWeigth: "300",
                marginBottom: "24px",
              }}
            >
              {descriptionBottom}
            </Typography>
          )}
        </Box>

        <Box
          component={"img"}
          width={{
            xs: "100vw",
            tablet: "260px",
            desktop: "470px",
          }}
          height={{
            xs: "186px",
            tablet: "270px",
            desktop: "488px",
          }}
          src={image}
          sx={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

SectionAbout.defaultProps = {
  descriptionBottom: "",
};

export default SectionAbout;
