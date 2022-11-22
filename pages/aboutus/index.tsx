import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import SectionAbout from "../../components/AboutUs/SectionAbout";

export default function indexAboutUs() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100vw",
      }}
      width="100vw"
    >
      <Typography
        variant="caption"
        fontSize="12px"
        sx={{
          width: "100%",
          margin: {
            xs: "15px 0px 8px 15px",
            tablet: "21px 0px 13px 26px",
            desktop: "21px 0px 19px 122px",
          },
        }}
      >
        Home › About Us
      </Typography>
      <Typography
        variant="h4"
        fontSize={{
          xs: "18px",
          desktop: "32px",
        }}
        sx={{
          textAlign: "left",
          width: "100%",
          margin: {
            xs: "0px 0px 15px 15px",
            tablet: "0px 0px 13px 26px",
            desktop: "0px 0px 21px 122px",
          },
          fontWeight: "bold",
        }}
      >
        About Us
      </Typography>

      <SectionAbout
        title="A Family That Keeps On Growing"
        descriptionTop="We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store."
        descriptionBottom="Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success."
        image="https://cdn.shopify.com/s/files/1/0351/8106/8420/files/IMG_0833_480x480.JPG?v=1601174168"
        isBlack
      />

      <SectionAbout
        title="shop.com"
        descriptionTop="Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service."
        image="https://24.lv/images/thumbnails/500/350/detailed/343/alienware-pro-gaming-keyboard-module-02.jpg"
        isBlack={false}
      />

      <SectionAbout
        title="You´re In Safe Hands"
        descriptionTop="We always aim to please the home market, supplying great computers and hardware at great prices to non-corporate customers, through our large Melbourne CBD showroom and our online store."
        descriptionBottom="Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.

  *Performance compared to i7-9700. Specs varies by model."
        image="https://thermaltake-au.azureedge.net/media/catalog/product/cache/bd093b45df4312054ef694fa27ce31e9/db/imgs/pdt/gallery/CL-F038-PL14YL-A_4fadae79a1be490fabfc3ff69f63e5f0.jpg"
        isBlack
      />

      <SectionAbout
        title="The Highest Quality of Products"
        descriptionTop="We guarantee the highest quality of the products we sell. Several decades of successful operation and millions of happy customers let us feel certain about that. Besides, all items we sell pass thorough quality control, so no characteristics mismatch can escape the eye of our professionals."
        image="https://m.media-amazon.com/images/I/4122DXx8nEL._AC_.jpg"
        isBlack={false}
      />

      <SectionAbout
        title="Delivery to All Regions"
        descriptionTop="We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be."
        image="https://ocdn.eu/pulscms-transforms/1/oQQk9kqTURBXy84N2JmNDcxYWQwZTA5YTQ1MDFhZmQ3MDNiZTNhNWQ0My5qcGVnkpUDIADNA0TNAdaTBc0DFM0BvN4AAqEwBaExAA"
        isBlack
      />
    </Box>
  );
}
