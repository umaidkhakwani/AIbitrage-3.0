import React, { useState } from "react";
import Modal from "react-modal";
import "../fonts/fonts.css";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const matches = useMediaQuery("(min-width:600px)");

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1000, // Adjust the zIndex for the overlay
        },
        content: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "black",
          backgroundColor: "rgb(0 0 0 / 53%)",

          color: "black",
          border: "none",
          borderRadius: "10px",
          padding: "20px",
          width: isSmScreen ? "80%" : "500px", // Adjust the width as needed
          height: isSmScreen ? "500px" : "300px", // Adjust the height as needed
          overflow: "hidden", // Prevent scrolling
          zIndex: 1001, // Adjust the zIndex for the modal content
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          border: "5px solid #50A883",
          transform: "translate(-50%, -50%)", // Center align the modal
          position: "relative", // Ensure the pseudo-element is positioned relative to the content
          boxShadow: "0 0 40px 20px #50A883", // Add white box shadow
        },
      }}
    >
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Mackinac",
            background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
            fontSize: "38px",
            fontStyle: "normal",
            textAlign: "center",
            padding:"0px 10px",
            borderRadius:"20px",
            marginBottom:"10px"
          }}
        >
          Cookies Settings
        </Typography>

        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Mackinac",
            fontSize: "12px",
            fontStyle: "normal",
            textAlign: "justify",
          }}
        >
          Welcome to our website<span style={{fontFamily:"Lora"}}>!</span> To ensure the best possible experience, we
          use cookies. These are used to personalize content, provide social
          media features, and analyze our traffic. By clicking <span style={{fontFamily:"Lora"}}>'Accept,'</span> you
          consent to our use of cookies. You can also manage your cookie
          preferences by selecting <span style={{fontFamily:"Lora"}}>'Cookie Settings.'</span> For more information,
          please read our Cookie Policy. Thank you for visiting<span style={{fontFamily:"Lora"}}>!</span>
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              // background: "#50A883",
              background:
              "linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)",
              color: "white",
              padding: "5px 20px",
              borderRadius: "20px",
              border: "none",
              margin: "5px 20px",
              fontFamily: "Rakkas",
            }}
            onClick={closeModal}
          >
            Accept
          </button>
          <button
            style={{
              background: "transparent",
              border: "0px solid black",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              fontFamily: "Rakkas",
            }}
            onClick={closeModal}
          >
            Reject
          </button>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalComponent;
