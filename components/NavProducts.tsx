import Link from "next/link";
import { Box } from "@mui/system";
import { Typography, styled, useMediaQuery } from "@mui/material";
import navCategory from "../src/constants/navCategory";

const NavProducts = (props: any) => {
  const bigger = useMediaQuery("(min-width:900px)");
  let section: any = navCategory[props.in];

  const Content = styled(Box)`
    cursor: not-allowed;
    display: flex;
    border-bottom: 2px solid transparent;

    :hover {
      border-bottom: 2px solid #0156ff;
    }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        maxWidth: "1398px",
        width: "100%",
        textAlign: "left",
        gap: "1rem",
      }}
    >
      {section.items.map((subSection: any, j: number) => {
        return (
          <Content key={j}>
            <Link href={subSection.url}>
              <Typography
                fontSize={bigger ? "20px" : "16px"}
                sx={{
                  fontWeight: "600",
                  lineHeight: "20px",
                }}
              >
                {subSection.name}
              </Typography>
            </Link>
          </Content>
        );
      })}
    </Box>
  );
};

export default NavProducts;
