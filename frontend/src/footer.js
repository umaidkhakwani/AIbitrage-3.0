import React, { useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import footer_img from "./images/footer.svg";
import Telegram from "./images/Telegram.png";
import Discord from "./images/Discord.png";
import Gitbook from "./images/Gitbook.png";
import Twitter from "./images/Twitter.png";
import new_bg2_2 from "./images/new_bg2_2.png";

import "./fonts/fonts.css";
import Header_Function from "./header";

import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function FooterFunction({ callback }) {
  const navigate = useNavigate();

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const matches = useMediaQuery("(min-width:600px)");

  const handleclick = (val) => {
    console.log("footer", val);
    callback(val);
  };

  return (
    <footer>
      <Box
        sx={{
          height: "2px",
          width: "100%",
          background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,

          margin: "0px auto 30px auto",
        }}
      ></Box>
      <Paper
        sx={{
          backgroundColor: "transparent",
          // backgroundImage: `url(${new_bg2_2})`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isSmScreen ? "center" : "center",
          textAlign: isSmScreen ? "center" : "center",
          // padding: isSmScreen ? "20px" : "0px", // Add padding for better readability on small screens
        }}
      >
        <Grid
          container
          sx={{ direction: "column", position: "relative", zIndex: "2" }}
        >
          {/* Footer Logo */}

          {/* <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              margin: "20px auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={footer_img}
              alt="footer"
              style={{ margin: "0px auto", height: "120px" }}
            />
          </Grid> */}

          {/* Footer Links and Texts*/}
          <Grid
            item
            sm={12}
            md={12}
            lg={8}
            sx={{ margin: "0px auto", height: "auto" }}
          >
            <Grid container sx={{ direction: "row", height: "100%" }}>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  margin: "0px auto 20px auto",
                  display: "flex",
                  justifyContent: "",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "20px" : "30px",

                    background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: "1.2",
                    textAlign: "center",
                    width:"fit-content",
                  }}
                >
                  Policies
                  <br />
                  <br />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",
                    color: "#861E85 ",
                    lineHeight: "1.2",
                    cursor: "pointer",
                    textAlign: "center",
                    // textDecoration: "underline",
                  }}
                  onClick={() => handleclick(10)}
                >
                  Terms of use
                  <br />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",
                    color: "#861E85 ",
                    lineHeight: "1.2",
                    cursor: "pointer",
                    textAlign: "center",
                    // textDecoration: "underline",
                  }}
                  onClick={() => handleclick(11)}
                >
                  Cookie Policy
                  <br />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",

                    color: "#861E85 ",
                    lineHeight: "1.2",
                    cursor: "pointer",
                    textAlign: "center",
                    // textDecoration: "underline",
                  }}
                  onClick={() => handleclick(12)}
                >
                  Privacy Policy
                  <br />
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  margin: "0px auto 20px auto",
                  display: "flex",
                  justifyContent: "",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "16px" : "30px",

                    background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                    width: "fit-content",
                    lineHeight: "1.2",
                  }}
                >
                  AIBITRAGE
                  <br />
                  <br />
                </Typography>
                {/* <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",

                    color: "#F55AA3 ",
                    textAlign: "center",
                    lineHeight: "1.2",
                  }}
                >
                  Trade/Swap
                  <br />
                </Typography> */}
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",

                    color: "#F55AA3",
                    lineHeight: "1.2",
                    cursor: "pointer",
                    textAlign: "center",
                    // textDecoration: "underline",
                  }}
                  // onClick={() => handleclick(13)}
                  onClick={() => navigate("/app")}
                >
                  Investor’s Pools
                  <br />
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  margin: "0px auto 20px auto",
                  display: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "20px" : "30px",
                    background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                    lineHeight: "1.2",
                  }}
                >
                  Developers
                  <br />
                  <br />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",

                    color: "#25D366 ",
                    lineHeight: "1.2",
                    // textDecoration: "underline",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleclick(1)}
                >
                  Docs
                  <br />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",

                    color: "#25D366 ",
                    lineHeight: "1.2",
                    // textDecoration: "underline",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleclick(14)}
                >
                  Bug Bounty
                  <br />
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  margin: "0px auto 20px auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "20px" : "30px",
                    background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    WebkitBackgroundClip: "text",
                    width: "fit-content",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                    lineHeight: "1.2",
                  }}
                >
                  Community
                  <br />
                  <br />
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Lora",
                    fontSize: isSmScreen ? "16px" : "20px",
                    color: "#F55AA3",
                    lineHeight: "1.2",
                    textAlign: "center",
                  }}
                >
                  <a
                    href="https://medium.com/@bitrage.ai"
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security best practice for opening links in a new tab
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Medium
                  </a>
                  <br />
                  <a
                    href="https://t.me/bitrageai"
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security best practice for opening links in a new tab
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Telegram
                  </a>
                  <br />
                  <a
                    href="https://x.com/bitrageai"
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer" // Security best practice for opening links in a new tab
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    X
                  </a>
                  <br />
                </Typography>
              </Grid>
            </Grid>
          </Grid>


          {/* Social Media icons */}

          {/* <Grid
            item
            sx={{ margin: "0px auto", height: "50px" }}
            sm={12}
            md={8}
            lg={8}
          >
            <Grid
              container
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Grid item sx={{ margin: "0px" }}>
              <a
                  href="https://x.com/bitrageai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img
                  src={Twitter}
                  alt="Twitter"
                  style={{ height: "30px", width: "35px" }}
                />
                </a>
              </Grid>
              <Grid item sx={{ margin: "0px 30px" }}>
                <img
                  src={Gitbook}
                  alt="Gitbook"
                  style={{ height: "30px", width: "35px" }}
                />
              </Grid>
              <Grid item sx={{ margin: "0px" }}>
                <a
                  href="https://t.me/bitrageai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={Telegram}
                    alt="Telegram"
                    style={{ height: "30px", width: "35px" }}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid> */}

          {/* Bottom White line */}

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
              sx={{
                height: "2px",
                width: "100%",
                background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                margin: "10px auto 10px auto",
              }}
            ></Box>
          </Grid>

          {/* Copyright */}

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              sx={{
                textAlign: "center",
                color: "black",
                display: "flex",
                justifyContent: "center",
                margin: "15px",
                alignItems: "center",
                fontFamily: "Poppins",
                fontSize: 14,
              }}
            >
              Copyright 2024. All Rights Reserved. Designed and Developed by
              AIBITRAGE Team.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </footer>
  );
}

export default FooterFunction;
