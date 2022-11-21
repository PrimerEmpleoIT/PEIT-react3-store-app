import * as React from "react";
import {
  Box,
  Radio,
  RadioGroup,
  Typography,
  Button,
  Modal,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";
import { testimonials } from "../src/constants/testimonials";
import { CustomBtn } from "./buttons";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default function Testimonials() {
  const [review, setReview] = useState(0);
  const [open, setOpen] = React.useState(false);
  let aux;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (event: any) => {
    setReview(event.target.value);
  };

  if (testimonials[review]) {
    aux = {
      id: testimonials[review].id,
      author: testimonials[review].author,
      review: testimonials[review].review,
    };
  } else {
    aux = { error: true };
  }
  const handleSubmit = () => {
    alert("subir nueva review");
  };

  return (
    <Box width="calc(100% - 30px)" sx={{ padding: "1rem" }} bgcolor="#F5F9FF">
      <Box sx={{ display: "flex", marginBottom: "10px" }}>
        <Box>
          <FormatQuoteIcon />
        </Box>
        <Box>
          {aux.error ? (
            <Typography component={"h2"}>
              The testimony is not available
            </Typography>
          ) : (
            <Typography
              sx={{ fontSize: "18px", fontWeight: "400" }}
              component={"blockquote"}
            >
              {aux.review}
            </Typography>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "10px",
        }}
      >
        {aux.error ? (
          <Typography component={"h2"}>
            <b>The author is not available</b>
          </Typography>
        ) : (
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400" }}
            component={"h3"}
          >
            <b>{aux.author}</b>
          </Typography>
        )}
      </Box>

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <CustomBtn
          isPrimary
          handleOnClick={() => console.log("Leave Us A Review")}
          text="Leave Us A Review"
        />
        <RadioGroup defaultValue={0}>
          <Box sx={{ display: "flex" }}>
            <Radio
              sx={{ padding: 0 }}
              size="small"
              onClick={handleChange}
              value={0}
            />
            <Radio
              sx={{ padding: 0 }}
              size="small"
              onClick={handleChange}
              value={1}
            />
            <Radio
              sx={{ padding: 0 }}
              size="small"
              onClick={handleChange}
              value={2}
            />
            <Radio
              sx={{ padding: 0 }}
              size="small"
              onClick={handleChange}
              value={3}
            />
          </Box>
        </RadioGroup>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textAlign: "center" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Leave us a review
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ width: "100%", marginBottom: ".2rem" }}
              placeholder="Put your Name and Surname"
            ></TextField>
            <TextareaAutosize
              style={{ width: "100%" }}
              maxLength={300}
              placeholder="Put your Review"
            />
            <Button
              onClick={handleClose}
              variant={"outlined"}
              endIcon={<SendIcon />}
            >
              Send Review
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
