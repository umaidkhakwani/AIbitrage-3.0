import React from "react";
import { Grid, Paper, Typography, useMediaQuery } from "@mui/material";

import animation5 from "../images/animation5.gif";
import new2 from "../images/new2.jpg";
import new_bg3 from "../images/new_bg3.png";
import new_bg2_2 from "../images/blog_background.gif";

import about_bitrage from "../images/about_bitrage.svg";
import how_bitrage_works from "../images/how_bitrage_works.svg";

import "../fonts/fonts.css";
import FooterFunction from "../footer";
import { useTheme } from "@mui/system";

function Blog_page() {
  const theme = useTheme();
  const isMdLgScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Paper
        sx={{
          // backgroundImage: `url(${new_bg2_2})`,
          background: "transparent",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginTop: "250px" }}
        >
          {/* Image */}
          {isMdLgScreen && (
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <img
                src={about_bitrage}
                alt="Documentation Image"
                style={{
                  width: "80%",
                  height: "auto",
                  marginBottom: "100px",
                  position: "relative",
                  zIndex: "2",
                }}
              />
            </Grid>
          )}
          <Grid item xs={10} sm={10} md={6}>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: "center",
                // color: "white",
                marginTop: 2,
                fontFamily: "Mackinac",
                background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: 40,
                position: "relative",
                zIndex: "2",
              }}
            >
              What is AIBITRAGE?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: "left",
                color: "black",
                marginTop: 2,
                fontFamily: "Mackinac",
                fontSize: 14,
                position: "relative",
                zIndex: "2",
                marginBottom: "100px",
              }}
            >
              AIBITRAGE is an innovative platform under development to cater to
              the dynamic landscape of the cryptocurrency space. Our vision at
              AIBITRAGE is to deliver assured profits to all users within the
              crypto community. The platform is strategically designed to
              function as an advanced arbitrage machine
              <span style={{ fontFamily: "Lora" }}>,</span> leveraging
              revolutionary software. Our development team has meticulously
              crafted an algorithm with the capability to assess
              cryptocurrencies across various Centralized Exchanges{" "}
              <span style={{ fontFamily: "Lora" }}>(CEX's)</span>.
              <br />
              <br />
              This sophisticated algorithm is specifically engineered to
              identify and monitor arbitrage opportunities within well
              <span style={{ fontFamily: "Lora" }}>-</span>established
              cryptocurrencies<span style={{ fontFamily: "Lora" }}>,</span>{" "}
              including stalwarts like Bitcoin and Ethereum. It systematically
              records crucial details such as market conditions
              <span style={{ fontFamily: "Lora" }}>,</span> liquidity
              <span style={{ fontFamily: "Lora" }}>,</span> and other pertinent
              factors. Developed over an extensive two-year period
              <span style={{ fontFamily: "Lora" }}>,</span> encompassing
              thorough research and networking during the golden era from 2021
              onwards<span style={{ fontFamily: "Lora" }}>,</span>
              this algorithm stands as a valuable tool for users seeking
              insights into lucrative arbitrage opportunities.
              <br />
              <br />
              Users may understandably question the integration of the term{" "}
              <span style={{ fontFamily: "Lora" }}>"AI"</span>
              in this project<span style={{ fontFamily: "Lora" }}>,</span>{" "}
              prompting inquiries such as
              <span style={{ fontFamily: "Lora" }}>: "</span>Why is the word AI
              implemented in this project
              <span style={{ fontFamily: "Lora" }}>?"</span> The rationale
              behind this decision lies in the foundation of the algorithm,
              which was constructed utilizing cutting-edge AI technology. This
              decision was driven by the inherent learning capabilities of AI
              <span style={{ fontFamily: "Lora" }}>,</span> ensuring the
              platform consistently provides accurate and contemporary insights.
              The success of this approach validates the team
              <span style={{ fontFamily: "Lora" }}>'</span>s decision to harness
              the power of AI for this high-tech platform.
              <br />
              <br />
              <span
                style={{
                  textAlign: "center",
                  // color: "white",
                  marginTop: 2,
                  fontFamily: "Mackinac",
                  background: `linear-gradient(86deg, #861E85 6.15%, #F55AA3 51.84%, #25D366 96.08%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: 30,
                  position: "relative",
                  zIndex: "2",
                }}
              >
                How AIBITRAGE Works
              </span>
              <br />
              <br />
              AIBITRAGE operates on a systematic process that leverages
              arbitrage opportunities across multiple exchanges. The underlying
              concepts include:
              <br />
              <br />
              Concept 1: Arbitrage Execution
              <br />
              <br />
              AIBITRAGE identifies arbitrage opportunities between exchanges by
              comparing cryptocurrency prices, such as Bitcoin, on different
              platforms. For instance, if Bitcoin is priced at{" "}
              <span style={{ fontFamily: "Lora" }}>$40,000</span> on Binance and{" "}
              <span style={{ fontFamily: "Lora" }}>$40,500</span> on Kucoin, a
              1.25<span style={{ fontFamily: "Lora" }}>%</span> arbitrage opportunity is identified. The bot executes
              arbitrage by purchasing Bitcoin with USDT on Binance and selling
              it for USDT on Kucoin. Following the example, the bot purchases
              2.5 BTC on Binance for{" "}
              <span style={{ fontFamily: "Lora" }}>$100,000</span> USDT and
              sells 2.5 BTC on Kucoin for{" "}
              <span style={{ fontFamily: "Lora" }}>$101,250,</span> resulting in
              a profit of
              <span style={{ fontFamily: "Lora" }}>$1,250</span>.
              <br />
              <br />
              Concept 2: Fee Consideration
              <br />
              <br />
              Transaction fees <span style={{ fontFamily: "Lora" }}>(</span>0.1<span style={{ fontFamily: "Lora" }}>%</span> on buys and 0.1<span style={{ fontFamily: "Lora" }}>%</span> on sells<span style={{ fontFamily: "Lora" }}>)</span> are factored
              into the profit calculation.
              <br />
              The actual profit is calculated as Profit <span style={{ fontFamily: "Lora" }}>(%) =</span> Arbitrage <span style={{ fontFamily: "Lora" }}>(%) -
              0.2,</span> using the example<span style={{ fontFamily: "Lora" }}>,</span> resulting in an actual profit of{" "}
              <span style={{ fontFamily: "Lora" }}>$</span>1,050.
              <br />
              <br />
              Concept 3: Distribution of Assets
              <br />
              <br />
              After an arbitrage transaction, there is an imbalance of
              cryptocurrencies across exchanges that needs to be addressed.
              Following the example, a distribution plan is implemented to
              balance assets between exchanges, ensuring equitable distribution
              of BTC and USDT.
              <br />
              <br />
              Concept <span style={{ fontFamily: "Lora" }}>4</span>: Liquidity Limitation
              <br />
              <br />
              AIBITRAGE can only execute arbitrage up to the lowest available
              liquidity from the exchanges involved. For instance, if Binance
              has 5 BTC liquidity and Kucoin has 60,000 USDT, AIBITRAGE can only
              purchase 1.<span style={{ fontFamily: "Lora" }}>4</span>8 BTC on Binance due to the liquidity cap. This
              limitation can impact potential profits, as illustrated by the
              example where the potential profit of{" "}
              <span style={{ fontFamily: "Lora" }}>$</span>1,050 is reduced to{" "}
              <span style={{ fontFamily: "Lora" }}>$</span>630 due to
              insufficient liquidity.
              <br />
              <br />
              Concept 5: Safety and Order Execution Optimization
              <br />
              <br />
              To ensure profitability and reliability, AIBITRAGE intelligently
              divides trades into multiple small limit orders.
              <br />
              <br />
              This strategic approach serves to mitigate risks by promptly
              canceling any failed order from both sides, preventing partial
              fills and safeguarding the arbitrage process.
              <br />
              <br />
              The subdivision of the total arbitrage amount into smaller
              transactions significantly outweighs potential losses from failed
              orders or extra fees on partially filled cancelled orders,
              emphasizing our commitment to user safety and profitability
              <br />
              <br />{" "}
            </Typography>
          </Grid>

          {/* Image */}
          {isMdLgScreen && (
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <img
                src={how_bitrage_works}
                alt="Documentation Image"
                style={{
                  width: "80%",
                  height: "auto",
                  position: "relative",
                  zIndex: "2",
                }}
              />
            </Grid>
          )}
        </Grid>
        {/* <FooterFunction /> */}
      </Paper>
    </div>
  );
}

export default Blog_page;
