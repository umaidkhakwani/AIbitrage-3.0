import React, { useEffect, useRef, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useControlled,
} from "@mui/material";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import animation1 from "../images/animation1.gif";
import animation2 from "../images/animation2.gif";
import animation3 from "../images/animation3.gif";
import home2 from "../images/home2.gif";
import animation4 from "../images/animation4.gif";
import animation5 from "../images/animation5.gif";
import cards_color from "../images/cards.png";
import table_color from "../images/table_color.png";
import Telegram from "../images/Telegram.png";
import Discord from "../images/Discord.png";
import Twitter from "../images/Twitter.png";
import new1 from "../images/new1.jpg";
import new_bg2 from "../images/new_bg2.png";
import new_bg2_2 from "../images/new_bg2_2.png";
import new_bg3 from "../images/new_bg3.png";
import new2 from "../images/new2.jpg";
import new3 from "../images/new3.png";
import new_bg1 from "../images/new_bg1.png";
import background1 from "../images/homepage.svg";
import vid1 from "../images/vid1.mp4";
import home1 from "../images/home1.svg";
import btc_trend from "../images/btc_trend.svg";
import usdt_trend from "../images/usdt_trend.svg";
import eth_trend from "../images/eth_trend.svg";
import bnb_trend from "../images/bnb_trend.svg";
import xrp_trend from "../images/xrp_trend.svg";
import solana_trend from "../images/solana_trend.svg";

import bnb_chart from "../images/bnb_chart.png";
import btc_chart from "../images/btc_chart.png";
import usdt_chart from "../images/usdt_chart.png";
import eth_chart from "../images/eth_chart.png";

import btc from "../images/btc.png";
import bnb from "../images/bnb.png";
import usdt from "../images/usdt.png";
import eth from "../images/eth.png";
import xrp from "../images/xrp.png";
import solana from "../images/solana.png";

import graph1 from "../images/graph1.png";
import graph2 from "../images/graph2.png";
import graph3 from "../images/graph3.png";
import graph4 from "../images/graph4.png";
import graph5 from "../images/graph5.png";

import integration1 from "../images/integration1.png";
import integration2 from "../images/integration2.png";
import integration3 from "../images/integration3.png";
import integration4 from "../images/integration4.png";
import integration5 from "../images/integration5.png";
import integration6 from "../images/integration6.png";

import left_stairs from "../images/3.0/left_stairs.png";
import right_stairs from "../images/3.0/right_stairs.png";

import logo_animation from "../images/3.0/logo_animation.gif";

import newsletter from "../images/newsletter.svg";
import social1 from "../images/3.0/dextools.svg";
import social2 from "../images/3.0/etherscan.png";
// import social2 from "../images/3.0/etherscan.webp";
import social3 from "../images/3.0/fjord.png";
import social4 from "../images/3.0/telegram.webp";
import social5 from "../images/3.0/twitter.svg";
import social6 from "../images/3.0/uniswap.webp";

import top_logo from "../images/3.0/top_logo.svg";

import platform from "../images/3.0/animation.png";
import alien from "../images/3.0/alien.png";

import circle_satellite from "../images/3.0/circle_satellite.png";

import secure_swap from "../images/secure_swap.svg";
import secure_bridge from "../images/secure_bridge.svg";
import secure_investors from "../images/secure_investors.svg";
import about_bitrage from "../images/about_bitrage.svg";
import how_bitrage_works from "../images/how_bitrage_works.svg";

import c_logo from "../images/c_logo.png";
import tick_logo from "../images/tick_logo.png";
import b_logo from "../images/b_logo.png";
import play_logo from "../images/play_logo.png";

import SearchIcon from "@mui/icons-material/Search";
import FooterFunction from "../footer";

import "../fonts/fonts.css";
import Header_Function from "../header";
import FooterFunction_home from "./footer_home";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import Modal from "react-modal";
import ModalComponent from "./Modal";
import CustomModal from "./Modal";

import AOS from "aos";
import "aos/dist/aos.css";


const AcrylicContainer = styled(Container)`
  position: relative;
  border-radius: 20px; /* Adjust the border-radius as needed */
  overflow: hidden;
  padding-bottom: 30px;
  background: rgba(255, 255, 255, 0.1); /* Adjust the transparency as needed */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
`;

const GlowingEffectContainer = styled(Grid)`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40vh; /* Adjust the height as needed */
    background: linear-gradient(
      to top,
      rgba(80, 168, 131, 0.5),
      rgba(80, 168, 131, 0)
    );
    z-index: 1;
  }
`;

const tableData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    change: 5.01,
    price: 2400.33,
    image: btc,
  },
  {
    name: "USDT",
    symbol: "USDT",
    change: 2.32,
    price: 1.33,
    image: usdt,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    change: 0.63,
    price: 1032.73,
    image: eth,
  },
  {
    name: "Solana",
    symbol: "SOL",
    change: -0.63,
    price: 657.21,
    image: solana,
  },
  {
    name: "XRP Ripple",
    symbol: "XRP",
    change: -0.32,
    price: 23.56,
    image: xrp,
  },
  {
    name: "Binance",
    symbol: "BNB",
    change: -0.98,
    price: 3400.56,
    image: bnb,
  },
];

function Homepage({ callback }) {
  const navigate = useNavigate();

  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isXlScreen = useMediaQuery(theme.breakpoints.down("xl"));
  // const matches = useMediaQuery("(min-width:1020px)");
  const matches = useMediaQuery("(min-width: 1200px) and (max-width: 1600px)");
  const matches_600 = useMediaQuery(
    "(min-width: 600px) and (max-width: 630px)"
  );

  const [coinsData, setCoinsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");

  const coinMarketCap_Api = "bea15024-c66e-465e-89db-1d411266e961";
  const coinMarketCap_link = "https://pro-api.coinmarketcap.com";
  const apiEndpoint =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

  const headers = {
    "X-CMC_PRO_API_KEY": coinMarketCap_Api,
    Allow: "*/*",
  };

  const handleSubscribe = () => {
    console.log("Subscribed with email:", email);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = coinsData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const table_color2 = `url(${table_color})`;

  const handle_callback = (val) => {
    callback(val);
  };

  const handleClick = () => {
    navigate("/app");
  };

  // const handleApi = async () => {
  //   const nameAndPriceArray = [];

  //   axios
  //     // .get("http://127.0.0.1:3001/api/cryptocurrency")

  //     // .get("http://194.163.45.79:3001/api/cryptocurrency")
  //     .get("http://localhost:3001/api/cryptocurrency")
  //     .then((response) => {
  //       const data = response.data;
  //       console.log("showing data", data.data.coins);
  //       data.data.coins.forEach((coin) => {
  //         if (coin.symbol === "BNB") {
  //         } else {
  //           // console.log("coin :", coin.quote.USD.price);
  //           let name = coin.name;
  //           let price = parseFloat(coin.price);
  //           let symbol = coin.symbol;
  //           let change = parseFloat(coin.change);
  //           let image =
  //             coin.symbol === "BTC"
  //               ? btc
  //               : coin.symbol === "USDT"
  //               ? usdt
  //               : coin.symbol === "ETH"
  //               ? eth
  //               : coin.symbol === "SOL"
  //               ? solana
  //               : coin.symbol === "XRP"
  //               ? xrp
  //               : "";
  //           // const { name, "price" : quote: { USD: { price } } , "24hVolume": volume, change } = coin;
  //           nameAndPriceArray.push({ name, price, symbol, change, image });
  //         }
  //       });
  //       console.log("API Response:", response.data);
  //       console.log("nameAndPriceArray:", nameAndPriceArray);
  //       setCoinsData(nameAndPriceArray);
  //     })
  //     .catch((error) => {
  //       setCoinsData(tableData);
  //       console.error("Error:", error);
  //     });
  // };

  const coinRanking_Api =
    "coinrankingd2b0b03d2a23f60039cea51e31c9c19b00b3dab048c0bac8";

  const options = {
    headers: {
      "x-access-token": coinRanking_Api,
    },
  };

  const handleApi = async () => {
    const nameAndPriceArray = [];

    axios
      // .get("http://127.0.0.1:3001/api/cryptocurrency")

      // .get("http://194.163.45.79:3001/api/cryptocurrency")
      .get("https://api.coinranking.com/v2/coins?limit=6", options)
      .then((response) => {
        const data = response.data;
        console.log("showing data", data);
        console.log("showing data", data.data.coins);
        data.data.coins.forEach((coin) => {
          if (coin.symbol === "BNB") {
          } else {
            // console.log("coin :", coin.quote.USD.price);
            let name = coin.name;
            let price = parseFloat(coin.price);
            let symbol = coin.symbol;
            let change = parseFloat(coin.change);
            let image =
              coin.symbol === "BTC"
                ? btc
                : coin.symbol === "USDT"
                ? usdt
                : coin.symbol === "ETH"
                ? eth
                : coin.symbol === "SOL"
                ? solana
                : coin.symbol === "XRP"
                ? xrp
                : "";
            // const { name, "price" : quote: { USD: { price } } , "24hVolume": volume, change } = coin;
            nameAndPriceArray.push({ name, price, symbol, change, image });
          }
        });
        console.log("API Response:", response.data);
        console.log("nameAndPriceArray:", nameAndPriceArray);
        setCoinsData(nameAndPriceArray);
      })
      .catch((error) => {
        setCoinsData(tableData);
        console.error("Error:", error);
      });

    // name, quote.USD.price, symbol, quote.USD.percent_change_1h

    // const data = response.data;
    // console.log(data);
    // const nameAndPriceArray = [];

    // data.data.coins.forEach((coin) => {
    //   const { name, price, "24hVolume": volume, change } = coin;
    //   nameAndPriceArray.push({ name, price, volume, change });
    // });
    // console.log(nameAndPriceArray);
    // console.log(data);
    // setCoinsData(nameAndPriceArray);
    // return data;
    // } catch (error) {
    //   console.error("Error fetching data from the API:", error);
    //   throw error; // You can choose to handle or propagate the error as needed
    // }
    // try {
    //   const response = await axios.get(api_link);
    //   const data = response.data;
    //   const nameAndPriceArray = [];

    //   data.data.coins.forEach((coin) => {
    //     const { name, price, "24hVolume": volume, change } = coin;
    //     nameAndPriceArray.push({ name, price, volume, change });
    //   });
    //   console.log(nameAndPriceArray);
    //   console.log(data);
    //   setCoinsData(nameAndPriceArray);
    //   return data;
    // } catch (error) {
    //   console.error("Error fetching data from the API:", error);
    //   throw error; // You can choose to handle or propagate the error as needed
    // }
  };

  useEffect(() => {
    handleApi();
    const intervalId = setInterval(() => {
      handleApi();
    }, 60000);
  }, []);

  useEffect(() => {
    console.log("filteredData", filteredData);
  }, [filteredData]);

  useEffect(() => {
    AOS.init();
  }, []);
  // const dataToUse = coinsData ? coinsData : tableData;
  // console.log("dataToUse",dataToUse);

  return (
    <>
      <CssBaseline />

      {/* --------------------------------------  Front Page  ------------------------------------------ */}
      <Paper
        sx={{
          width: "100%",
          // height: "100vh",
          // backgroundImage: `url(${background1})`,
          // backgroundSize: "cover",
          // overflowY: "auto",
          margin: 0,
          // backgroundPosition: "center",
          padding: 0,
          // background: "black",
          background: "#FFF7F2",
          // willChange: "transform", // Add will-change property
          position: "relative", // Add position property
          zIndex: "2", // Add z-index property
        }}
      >
        <ModalComponent />
        <Box
          sx={{
            width: "100%",
            padding: isLgScreen ? "250px 0px 100px 0px" : "200px  0px 0px 0px",
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            {isLgScreen ? (
              ""
            ) : (
              <Grid
                item
                xs={12}
                md={12}
                lg={3}
                sx={{ width: "100%", height: "100%" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    // height: "100%",
                    height: matches ? "100%" : "500px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={left_stairs}
                    alt="logo"
                    style={{
                      width: "100%",
                      position: "relative",
                      // bottom: matches ? "250px" : "100px",
                      right: "15px",
                      zIndex: "-1",
                    }}
                  />
                </Box>
              </Grid>
            )}
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: isLgScreen ? "center" : "flex-end",
              }}
            >
              <Box
                sx={{
                  width: isMdScreen ? "80%" : "100%",
                  position: "relative",
                  right: isLgScreen ? "0px" : "0px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "36px" : "76px",
                    background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: isLgScreen ? "center" : "center",
                    lineHeight: "1.2",
                  }}
                >
                  Introducing a Pillar in the DEFI World
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "26px" : "28px",
                    color: "#a56feb",
                    textAlign: isLgScreen ? "center" : "center",
                    lineHeight: "1.2",
                  }}
                >
                  <br />
                  Powered by{" "}
                  <span
                    style={{
                      background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontSize:"36px",
                    }}
                  >
                    AIBITRAGE
                  </span>
                </Typography>

                <Box
                  sx={{
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: isLgScreen ? "center" : "center",
                  }}
                >
                  <button
                    style={{
                      display: "inline-block",
                      // padding: "10px 20px",
                      width: isMdScreen ? "100px" : "150px",
                      height: "50px",
                      border: "none",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)",
                      color: "#fff",
                      fontSize: "16px",
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "background 0.3s ease",
                      ":hover": {
                        // Pseudo-class styles for hover
                        background:
                          "linear-gradient(95deg, #A27BD3 0%, #9F9ADB 58.45%, #9ADBEC 90.51%)",
                      },
                    }}
                    onClick={() => handle_callback(0)}
                  >
                    Explore
                  </button>

                  {/* <button
                    style={{
                      // padding: "10px 20px",
                      width: isMdScreen ? "100px" : "150px",
                      height: "50px",
                      borderRadius: "10px",
                      background: "transparent",
                      color: "#fff",
                      fontSize: "16px",
                      cursor: "pointer",
                      marginLeft: "20px",
                      textDecoration: "none",
                      border: "2px solid #B529DD",
                      transition: "background 0.3s ease",
                      ":hover": {
                        // Pseudo-class styles for hover
                        background:
                          "linear-gradient(95deg, #A27BD3 0%, #9F9ADB 58.45%, #9ADBEC 90.51%)",
                      },
                    }}
                  >
                    Create
                  </button> */}
                </Box>
              </Box>
            </Grid>
            {isLgScreen ? (
              ""
            ) : (
              <Grid
                item
                xs={12}
                md={12}
                lg={3}
                sx={{ width: "100%", height: "100%" }}
              >
                <Box
                  sx={{
                    width: "100%",
                    // height: "100%",
                    height: matches ? "100%" : "500px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={right_stairs}
                    alt="logo"
                    style={{
                      width: "100%",
                      position: "relative",
                      // bottom: matches ? "250px" : "100px",
                      right: "15px",
                      zIndex: "-1",
                    }}
                  />
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>

        {/* --------------------------------------  Socials  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Container sx={{ width: isSmScreen ? "300px" : "100%" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Mackinac",
                fontSize: isSmScreen ? "26px" : "40px",
                fontWeight: "bold",
                background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              Our Socials
              <br />
              <br />
            </Typography>
            <Grid container>
              <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://x.com/bitrageai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social1}
                    alt="logo"
                    style={{
                      width: isSmScreen ? "70px" : "100px",
                      marginBottom: "30px",
                    }}
                  />
                </a>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://x.com/bitrageai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social2}
                    alt="logo"
                    style={{
                      width: isSmScreen ? "70px" : "100px",
                      marginBottom: "30px",
                    }}
                  />
                </a>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://x.com/bitrageai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social3}
                    alt="logo"
                    style={{
                      width: isSmScreen ? "70px" : "100px",
                      marginBottom: "30px",
                    }}
                  />
                </a>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://t.me/bitrageai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social4}
                    alt="logo"
                    style={{
                      width: isSmScreen ? "70px" : "100px",
                      marginBottom: "30px",
                    }}
                  />
                </a>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://x.com/bitrageai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={social5}
                    alt="logo"
                    style={{
                      width: isSmScreen ? "70px" : "100px",
                      marginBottom: "30px",
                    }}
                  />
                </a>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                md={2}
                lg={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={social6}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>


        {/* --------------------------------------  Video  ------------------------------------------ */}
        {/* <Box
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
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: isSmScreen ? "0px" : "40px 0px 0px 0px",
            }}
          >
            <Grid container>
              <Grid
                item
                xs={12} // For extra-small screens
                sm={12} // For small screens
                md={12} // For medium screens
                lg={12} // For large screens
                xl={12} // For extra-large screens
              >
                <video width="80%" height="80%" controls>
                  <source
                    src="/path/to/your/local/video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </Grid>
            </Grid>
          </Container>
        </Box> */}

        {/* --------------------------------------  Secure Bitcoin  ------------------------------------------ */}

        {/* <Box
            // data-aos="fade-up"
          sx={{
            width: "100%",
            height: "100%",
            background: "transparent",
            margin: "50px 0px",
          }}
        >
          <Container
            sx={{ width: isSmScreen ? "80%" : isMdScreen ? "60%" : "49%" }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "26px" : "30px",
                color: "#50A883",
                textAlign: "center",
                lineHeight: "1.2",
              }}
            >
              COMING to AIBITRAGE
              <br />
              <br />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Lora",
                fontSize: isSmScreen ? "16px" : "20px",
                textAlign: "center",
                color: "#ffff",
                lineHeight: "1.2",
              }}
            >
              Here at AIBIRAGE we are constantly building for you. We are making
              an ecosystem where users would be able to get the most out of
              AIBITRAGE’s Platform.
              <br />
              <br />
            </Typography>
          </Container>
          <Container
            sx={{ width: isSmScreen ? "80%" : isMdScreen ? "60%" : "100%" }}
          >
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={secure_swap}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={secure_bridge}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={4}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={secure_investors}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box> */}

        {/* --------------------------------------  AIBITRAGE REALM ------------------------------------------ */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "transparent",
            margin: "100px 0px",
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container sx={{ width: isSmScreen ? "90%" : "60%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "35px" :  isLgScreen ? "45px":"50px",
                    fontWeight: "bold",
                    background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  TAP INTO THE AIBITRAGE REALM
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "14px" : "16px",
                    color: "black",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  <br />
                  Experience pure AIBITRAGE opportunities from the high tech
                  algorithm we cultivated
                  <br />
                </Typography>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={circle_satellite}
                alt="logo"
                style={{ width: isSmScreen ? "70%" : "60%" , marginTop:"30px"}}
              />
            </Grid>
          </Grid>
        </Box>

        {/* --------------------------------------  GUARANTEED PROFITS ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "transparent",
            margin: "50px 0px",
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            {isMdScreen ? null : (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={how_bitrage_works}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
            )}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container
                sx={{
                  width: isSmScreen ? "90%" : "60%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: isMdScreen ? "center" : "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "35px" : isLgScreen ? "45px": "55px",
                    fontWeight: "bold",
                    background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  FINALLY GUARANTEED PROFITS
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "14px" : "16px",
                    color: "black",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  <br />
                  AIBITRAGE<span style={{fontFamily:"Lora"}}>'</span>S simple but effective strategy allow users who
                  stake to make a stable and well assured profits on their
                  investment
                  <br />
                </Typography>
                <button
                  style={{
                    // position: "absolute",
                    // top: "30px",
                    // right: "40px",
                    width: "130px",
                    height: "35px", // Set the height to match the image height
                    border: "none",
                    borderRadius: "15px",
                    marginTop: "10px",
                    background:
                    "linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)",

                    color: "#fff",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "background 0.3s ease",
                    fontSize: "11px",
                    zIndex: 101,
                  }}
                  onClick={() => handle_callback(4)}
                >
                  Explore
                </button>
              </Container>
            </Grid>
            {isMdScreen ? (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={how_bitrage_works}
                  alt="logo"
                  style={{ width: isSmScreen ? "80%" : "60%" }}
                />
              </Grid>
            ) : null}
          </Grid>
        </Box>

        {/* --------------------------------------  FLOURISHING INDEPENDENTLY ------------------------------------------ */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: "transparent",
            margin: "100px 0px",
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container sx={{ width: isSmScreen ? "90%" : "80%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "28px" :  isLgScreen ? "40px": "55px",
                    fontWeight: "bold",
                    background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  FLOURISHING INDEPENDENTLY
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Mackinac",
                    fontSize: isSmScreen ? "14px" : "16px",
                    color: "black",
                    textAlign: isMdScreen ? "center" : "left",
                    lineHeight: "1.2",
                  }}
                >
                  <br />
                  We take pride creatiing an algorithm that doesn<span style={{fontFamily:"Lora"}}>'</span>t depend on
                  the monetory value of the token itself. The algorithm will
                  continuously take advantage of any arbitrage opportunities it
                  stumbles upon.
                  <br />
                </Typography>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={about_bitrage}
                alt="logo"
                style={{ width: isSmScreen ? "80%" : "60%" }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* --------------------------------------  CryptoCap  ------------------------------------------ */}

        {/* <Box
          sx={{
            width: "100%",
            height: "100%",
            marginTop: "100px",
          }}
        >
          <Container>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "26px" : "30px",
                color: "#50A883",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              AIBITRAGE Features
              <br />
              <br />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Aclonica",
                fontSize: isSmScreen ? "16px" : "18px",
                color: "#B6B6B6",
                textAlign: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
              }}
            >
              Explore our sensational features to prepare your best investment
              in cryptocurrency
              <br />
              <br />
            </Typography>
          </Container>
          <Container sx={{ width: "80%", height: "100%" }}>
            <Grid container sx={{ width: "100%", height: "100%" }}>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={c_logo}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "40px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        Guaranteed Profits
                        <br />
                        <br />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        Buy and sell popular digital currencies, keep track of
                        them in the one place.
                      </Typography>
                    </Grid>
         
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={tick_logo}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "40px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        Swap Features
                        <br />
                        <br />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        We have implemented this for users that have vested
                        on our platform.
                      </Typography>
                    </Grid>

                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={b_logo}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "40px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        Cryptocurrency Variety
                        <br />
                        <br />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        Supports a variety of the most popular digital
                        currencies and always uptodate.
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={play_logo}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "40px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "14px",
                          lineHeight: "1.2",
                          color: "#ECF1F0",
                        }}
                      >
                        Tailored Pools
                        <br />
                        <br />
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "#B6B6B6",
                          lineHeight: "1.2",
                        }}
                      >
                        Select which pool is for you and lets get TRADING!
                      </Typography>
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Box> */}

        {/* --------------------------------------  Live Market Data  ------------------------------------------ */}

        {/* <Box
          sx={{
            width: "100%",
            height: "100%",
            marginTop: "100px",
          }}
        >
          <Container
            sx={{
              width: isMdScreen ? "80%" : "55%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Mackinac",
                fontSize: isSmScreen ? "26px" : "40px",
                fontWeight: "bold",
                background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                lineHeight: "1.2",
                marginBottom: "10px",
                width: "fit-content",
              }}
            >
              Live Market Data
              <br />
              <br />
            </Typography>
          </Container>


          <Container
            sx={{
              // background: "rgba(0, 0, 0, 0.40)", // Transparent background with 0.25 opacity
              backgroundColor: "rgb(0 0 0 / 13%)",

              borderRadius: "10px",
              width: "70%",
              marginTop: "0px",
            }}
          >
            <div style={{ overflowX: "auto" }}>
              <TableContainer>
                <Table>
                  <TableBody>
                    {
                      // [
                      //   {
                      //     name: "Bitcoin",
                      //     symbol: "BTC",
                      //     price: "$49990",
                      //     percentageChange: "+1.68%",
                      //     image: graph1,
                      //   },
                      //   {
                      //     name: "Ethereum",
                      //     symbol: "ETH",
                      //     price: "$3890",
                      //     percentageChange: "+0.68%",
                      //     image: graph2,
                      //   },
                      // ].
                      coinsData.map((row, index) =>
                        row.symbol === "BTC" ||
                        row.symbol === "ETH" ||
                        row.symbol === "USDT" ||
                        row.symbol === "SOL" ||
                        row.symbol === "XRP" ? (
                          <TableRow
                            key={index}
                            sx={{
                              borderBottom: "2px solid #2B2C3B", // Set the color of the bottom border
                            }}
                          >
                            <TableCell>
                              <img
                                src={row.image}
                                alt="logo"
                                style={{
                                  padding: isSmScreen
                                    ? "0px 10px"
                                    : "5px 0px 0px 0px",
                                  width: "40px",
                                  marginBottom: "10px",
                                }}
                              />
                            </TableCell>

                            <TableCell>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontFamily: "Mackinac",
                                  fontSize: "14px",
                                  color: "black",
                                }}
                              >
                                {row.name}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontFamily: "Mackinac",
                                  fontSize: "14px",
                                  color: "#B982FF",
                                }}
                              >
                                {row.symbol}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "14px",
                                  color: "black",
                                  background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                }}
                              >
                                $
                                {row && row.price
                                  ? row.price.toFixed(5)
                                  : "$43000"}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "14px",
                                  color:
                                    parseFloat(row.change) > 0
                                      ? "green"
                                      : "red",
                                }}
                              >
                                {parseFloat(row.change) > 0
                                  ? `+${row.change}%`
                                  : `${row.change}%`}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <img
                                src={
                                  index === 0
                                    ? graph1
                                    : index === 1
                                    ? graph2
                                    : index === 2
                                    ? graph3
                                    : graph4
                                }
                                alt={`Image for ${row.name}`}
                                style={{ width: "125px" }}
                              />
                            </TableCell>
                            <TableCell>
                              
                            </TableCell>
                          </TableRow>
                        ) : null
                      )
                    }
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Container>
        </Box> */}


        {/* --------------------------------------  Market Trends  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            bottom: isXlScreen ? "0px" : "0px",
            margin: "50px 0px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Mackinac",
              fontSize: isSmScreen ? "26px" : "40px",
              fontWeight: "bold",
              background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: "center",
              lineHeight: "1.2",
              width: "fit-content",
              margin: "10px auto",
            }}
          >
            Market Trend
          </Typography>
          <Container
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              container
              sx={{
                width: "80%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(0 0 0 / 13%)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={btc_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "black",
                        }}
                      >
                        $
                        {coinsData && coinsData[0] && coinsData[0].price
                          ? (coinsData[0]?.price).toFixed(4)
                          : "43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "rgb(46 46 46 / 60%)",
                          lineHeight: "1.2",
                        }}
                      >
                        {coinsData && coinsData[0] && coinsData[0].price
                          ? (coinsData[0]?.change).toFixed(6)
                          : "1.41"}
                        %{/* 1.41% */}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={btc_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  margin: "15px 0px",
                  alignItems: "center",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(0 0 0 / 13%)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={eth_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "black",
                        }}
                      >
                        $
                        {coinsData && coinsData[0] && coinsData[0].price
                          ? (coinsData[1]?.price).toFixed(4)
                          : "43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "rgb(46 46 46 / 60%)",
                          lineHeight: "1.2",
                        }}
                      >
                        {coinsData && coinsData[0] && coinsData[0].price
                          ? (coinsData[1]?.change).toFixed(6)
                          : "1.41"}
                        %
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={eth_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  margin: "15px 0px",
                  alignItems: "center",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(0 0 0 / 13%)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={xrp_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "black",
                        }}
                      >
                        $
                        {coinsData && coinsData[0] && coinsData[0].price
                          ? (coinsData[4]?.price).toFixed(4)
                          : "$43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "rgb(46 46 46 / 60%)",
                          lineHeight: "1.2",
                        }}
                      >
                        {coinsData && coinsData[0] && coinsData[0].change
                          ? (coinsData[4]?.change).toFixed(4)
                          : "$43000"}
                        %
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={bnb_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  margin: "15px 0px",
                  alignItems: "center",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(0 0 0 / 13%)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={usdt_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "black",
                        }}
                      >
                        $
                        {coinsData && coinsData[0] && coinsData[0].price
                          ? (coinsData[2]?.price).toFixed(4)
                          : "$43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "rgb(46 46 46 / 60%)",
                          lineHeight: "1.2",
                        }}
                      >
                        {coinsData && coinsData[0] && coinsData[0].change
                          ? (coinsData[2]?.change).toFixed(4)
                          : "$43000"}
                        %
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={usdt_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={4}
                sx={{
                  height: "100%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  margin: "15px 0px",
                  alignItems: "center",
                }}
              >
                <Container
                  sx={{
                    background: "transparent",
                    width: "220px",
                    height: "115px",
                    borderRadius: "10px",
                    backgroundColor: "rgb(0 0 0 / 13%)",
                    backdropFilter: "blur(8px)",
                    padding: "10px 0px",
                  }}
                >
                  <img
                    src={solana_trend}
                    alt="logo"
                    style={{
                      padding: isSmScreen ? "0px 10px" : "0px",
                      width: "150px",
                      marginBottom: "10px",
                    }}
                  />
                  <Grid
                    container
                    sx={{ padding: isSmScreen ? "0px 10px" : "0px" }}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "16px",
                          lineHeight: "1.2",
                          color: "black",
                        }}
                      >
                        $
                        {coinsData && coinsData[0] && coinsData[0].price
                          ? (coinsData[3]?.price).toFixed(4)
                          : "$43000"}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: "12px",
                          color: "rgb(46 46 46 / 60%)",
                          lineHeight: "1.2",
                        }}
                      >
                        {coinsData && coinsData[0] && coinsData[0].change
                          ? (coinsData[3]?.change).toFixed(4)
                          : "$43000"}
                        %
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                      <img
                        src={usdt_chart}
                        alt="logo"
                        style={{ width: "100px" }}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --------------------------------------  Integrations  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            marginTop: "100px",
          }}
        >
          <Container
            sx={{
              width: isSmScreen ? "300px" : "400px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Mackinac",
                fontSize: isSmScreen ? "26px" : "40px",
                fontWeight: "bold",
                background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                lineHeight: "1.2",
                width: "fit-content",
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Integrations
              <br />
              <br />
            </Typography>
            <Grid container>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration1}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration2}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration3}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration4}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration5}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4}>
                <img
                  src={integration6}
                  alt="logo"
                  style={{
                    width: isSmScreen ? "70px" : "100px",
                    marginBottom: "30px",
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* --------------------------------------  Platform  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            marginTop: "500px",
            background: "#002e42",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src={logo_animation}
            alt="logo"
            style={{
              width: isSmScreen ? "200px" : "180px",
              position: "absolute",
              top: "-400px",

              // marginBottom: "30px",
            }}
          />

          <img
            src={platform}
            alt="logo"
            style={{
              width: isSmScreen ? "100%" : "100%",
              marginTop: "-170px",
              // marginBottom: "30px",
            }}
          />

          <img
            src={alien}
            alt="logo"
            style={{
              width: isSmScreen ? "100%" : isLgScreen?"500px":"700px",
              margin: "0px auto",
              // marginBottom: "30px",
            }}
          />
        </Box>

        {/* --------------------------------------  Newsletter  ------------------------------------------ */}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            margin: "100px 0px",

            // background: `url(${newsletter})`, // Set the newsletter image as the background
            //   backgroundSize: "cover", // Optional: Adjust the background size
            //   backgroundPosition: "center", // Optional: Adjust the background position
          }}
        >
          <Container
            sx={{
              background: `url(${newsletter}) center`,
              width: "60%",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ margin: isMdScreen ? "20px 30px" : "20px 60px" }}>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Mackinac",
                  paddingTop: "40px",
                  fontSize: isSmScreen ? "26px" : "30px",
                  fontWeight: "bold",
                  background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                Sign up for our Newsletter
                <br />
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Mackinac",
                  fontSize: isSmScreen ? "12px" : "14px",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                }}
              >
                We have all been in this industry too long not to make the
                security of your funds our absolute top priority.
                <br />
                <br />
              </Typography>

              {/* Input field and Subscribe button */}

              <Box
                sx={{
                  display: "flex",
                  flexDirection: isSmScreen ? "column" : "row",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <TextField
                  label="Your email here"
                  variant="standard"
                  sx={{
                    marginRight: isSmScreen ? "0" : "10px",
                    marginBottom: "10px",
                    width: "70%",
                    color: "rgba(150, 142, 142, 0.56)", // Set the text color to white
                    "& input": {
                      color: "white", // Set the input text color to white
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "rgba(150, 142, 142, 0.56)", // Set the label color to white
                    },
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  style={{
                    width: "130px",
                    height: "40px", // Set the height to match the image height
                    border: "none",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </Box>
            </Box>
          </Container>
        </Box>
        {/* -------------------------------------- footer  ------------------------------------------ */}

        <Grid
          container
          spacing={0}
          sx={{
            marginTop: "0px",
            direction: "column",
            // backgroundImage: `url(${new_bg1})`,
          }}
        >
          <Grid item xs={12} md={12} lg={12}>
            <FooterFunction_home callback2={handle_callback} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Homepage;
