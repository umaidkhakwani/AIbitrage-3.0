import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../fonts/fonts.css";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Launch_App_ModalComponent = ({launch_callback}) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const matches = useMediaQuery("(min-width:600px)");

  const closeModal = () => {
    console.log("close modal");
    setModalIsOpen(false);
    launch_callback(true);
  };
  const openModal = () => {
    console.log("open modal");
    setModalIsOpen(true);
  };

  useEffect(() => {
    console.log("useEffect triggered", modalIsOpen);
    if (!modalIsOpen) {
      closeModal(); // Ensure modal closes visually even if state change doesn't trigger re-render
    }
  }, [modalIsOpen]);
  


  return (
    <Modal
      isOpen={modalIsOpen} // Pass the boolean state value
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
          backgroundColor: "rgb(0 0 0 / 43%)",

          color: "white",
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
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            fontSize: "38px",
            fontStyle: "normal",
            textAlign: "center",
          }}
        >
          Launch App
        </Typography>

        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Mackinac",
            fontSize: "14px",
            fontStyle: "normal",
            textAlign: "justify",
          }}
        >
          Launch App is disable for mobile view. To access the app, please use a
          desktop or laptop.
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
            Cancel
          </button>
        </div>
      </Container>
    </Modal>
  );
};

export default Launch_App_ModalComponent;
