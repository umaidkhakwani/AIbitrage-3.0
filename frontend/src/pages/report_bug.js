import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";

import bug from "../images/bug.png";
import bug_background from "../images/bug_background.png";

import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import report_bug from "../images/report_bug.gif";
import "../fonts/fonts.css";
import { useTheme } from "@mui/system";
import FooterFunction from "../footer";

function Report_bug() {
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div>
      <div style={{ position: "relative" }}>
        {/* Background Image Paper */}
        <Paper
          sx={{
            // backgroundImage: `url(${report_bug})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            padding: "0px 0px 100px 0px",
          }}
        >
          {/* Overlay Paper */}
          {/* <Paper
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
              zIndex: "1", // Place the overlay above the background image
            }}
          ></Paper> */}
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              margin: "150px 20px 0px 20px",
              position: "relative",
              zIndex: "2",
            }}
          >
            <Grid item xs={0} md={3}>
              {/* <img
            src={home2}
            alt="Documentation Image"
            style={{ width: "750px", height: "430px", marginTop: "0%", marginLeft:"-330px" }}
          /> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Container
                sx={{
                  background: `url(${bug}) center/cover`,
                  height: "400px",
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center", // Center-align the text within the container
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    fontFamily: "Lora",
                    // background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    // WebkitBackgroundClip: "text",
                    // WebkitTextFillColor: "transparent",
                    fontSize: 32,
                    marginBottom: 2, // Add margin-bottom for spacing
                  }}
                >
                  GET PAID UPTO $100,000
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",

                    fontFamily: "Mackinac",
                    fontSize: 16,
                    marginBottom: 2, // Add margin-bottom for spacing
                  }}
                >
                  If you report any bug or vulnerability at our Website
                </Typography>
                <button
                  style={{
                    marginTop: "10px",
                    width: "145px",
                    height: "42px",
                    borderRadius: "10px",
                    color: "#fff",
                    background:
                    "linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)",
                    textAlign: "center",
                    fontFamily: "Mackinac",
                    fontSize: "16px",
                  }}
                >
                  Report a Bug
                </button>
              </Container>

              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: "justify",
                  // color: "black",
                  marginTop: 2,
                  fontFamily: "Mackinac",
                  background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: 18,
                  padding: isMdScreen ? "0px 20px" : "0px",
                }}
              >
                At AIBitrage, we take security and the integrity of our app
                seriously. To ensure our users safety and maintain the highest
                standard of service, we are excited to announce our Bug Bounty
                Program. We invite all ethical hackers, cybersecurity experts,
                and tech enthusiasts to put our app to the test and help us
                identify any potential vulnerabilities or bugs. If you uncover a
                bug that could pose a security risk or compromise user data, we
                will reward you with a whopping <span style={{fontFamily:"Lora"}}>$100,000</span> as a token of our
                appreciation. Together, let<span style={{fontFamily:"Lora"}}>'</span>s fortify our platform and pave the
                way for a safer and more robust user experience. Happy bug
                hunting
              </Typography>
            </Grid>

            {/* Image */}
            <Grid item xs={0} sm={0} md={3}>
              {/* <img
                src={bug_background}
                alt="Documentation Image"
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "0%",
                  marginLeft: "-150px",
                }}
              /> */}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

export default Report_bug;
