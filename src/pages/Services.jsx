import { Box, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import bgimag from "../img/bg-hero.jpg";

import PersonIcon from "@mui/icons-material/Person";
import { orange } from "@mui/material/colors";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

const Services = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [issecHover, setIssecHover] = useState(false);
  const [istheHover, setIstheHover] = useState(false);
  const [isforHover, setIsforHover] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [issecHover2, setIssecHover2] = useState(false);
  const [istheHover3, setIstheHover3] = useState(false);
  const [isforHover4, setIsforHover4] = useState(false);
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(to right,hsla(234, 38%, 18%, 0.9), hsla(234, 38%, 18%, 0.9)), url('${bgimag}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography sx={{ fontSize: "3.5rem", fontWeight: "bold" }}>
          Services
        </Typography>
        <Box sx={{ display: "flex", marginTop: 2 }}>
          <Typography sx={{ color: orange[400], marginX: 1 }}>
            HOME /{" "}
          </Typography>
          <Typography sx={{ color: orange[400], marginX: 1 }}>
            PAGES /{" "}
          </Typography>
          <Typography>Services</Typography>
        </Box>
      </Box>
      <Box sx={{ marginX: "6vw", marginY: "5rem" }}>
        <Grid container spacing={2}>
          <Grid item md={3} sm={6}>
            <Card
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              sx={{
                padding: "1.5rem 1.5rem",
                cursor: "crosshair",
                backgroundColor: "white", // default color
                transition:
                  "background-color 0.7s ease, color 0.6s ease, transform 0.4s ease",
                "&:hover": {
                  backgroundColor: "darkorange",
                  transform: "translateY(-10px)",
                  "& .MuiSvgIcon-root": {
                    color: "white", // icon fades smoothly
                  },
                  "& .hover-text": {
                    color: "white", // text fades smoothly
                  },
                },
              }}
            >
              <PersonIcon
                sx={{
                  color: isHovered ? "white" : orange[400],
                  fontSize: "7vw",
                  padding: 0,
                  borderRadius: 0,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1vh",
                  color: isHovered ? "white" : "black",
                }}
              >
                Fresh & Healthy
              </Typography>
              <Typography sx={{ color: isHovered ? "white" : "black" }}>
                Delicious meals made with fresh vegetables and balanced spices
                for every foodie.
              </Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={6}>
            <Card
              sx={{
                padding: "1.5rem 1.5rem",
                cursor: "crosshair",
                backgroundColor: "white", // default color
                transition:
                  "background-color 0.7s ease, color 0.6s ease, transform 0.4s ease",
                "&:hover": {
                  backgroundColor: "darkorange",
                  transform: "translateY(-10px)",
                  "& .MuiSvgIcon-root": {
                    color: "white", // icon fades smoothly
                  },
                  "& .hover-text": {
                    color: "white", // text fades smoothly
                  },
                },
              }}
            >
              <RestaurantIcon
                sx={{
                  color: orange[400],
                  fontSize: "7vw",
                  padding: 0,
                  borderRadius: 0,
                  transition: "color 0.6s ease",
                }}
              />
              <Typography
                variant="h5"
                className="hover-text"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1vh",
                  color: "black",
                  transition: "color 0.6s ease",
                }}
              >
                Street Food Vibes
              </Typography>
              <Typography
                className="hover-text"
                sx={{
                  color: "black",
                  transition: "color 0.6s ease",
                }}
              >
                Crispy snacks filled with tangy chutneys and bold flavours,
                perfect to enjoy anytime.
              </Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={6}>
            <Card
              onMouseEnter={() => setIstheHover(true)}
              onMouseLeave={() => setIstheHover(false)}
              sx={{
                padding: "1.5rem 1.5rem",
                cursor: "crosshair",
                backgroundColor: "white", // default color
                transition:
                  "background-color 0.7s ease, color 0.6s ease, transform 0.4s ease",
                "&:hover": {
                  backgroundColor: "darkorange",
                  transform: "translateY(-10px)",
                  "& .MuiSvgIcon-root": {
                    color: "white", // icon fades smoothly
                  },
                  "& .hover-text": {
                    color: "white", // text fades smoothly
                  },
                },
              }}
            >
              <ShoppingCartIcon
                sx={{
                  color: istheHover ? "white" : orange[400],
                  fontSize: "7vw",
                  padding: 0,
                  borderRadius: 0,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1vh",
                  color: istheHover ? "white" : "black",
                }}
              >
                Fast Food Deals
              </Typography>
              <Typography sx={{ color: istheHover ? "white" : "black" }}>
                Burgers, fries and pizzas served with cheesy dips and sauces,
                made hot and fresh everyday special.
              </Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={6}>
            <Card
              onMouseEnter={() => setIsforHover(true)}
              onMouseLeave={() => setIsforHover(false)}
              sx={{
                padding: "1.5rem 1.5rem",
                cursor: "crosshair",
                backgroundColor: "white", // default color
                transition:
                  "background-color 0.7s ease, color 0.6s ease, transform 0.4s ease",
                "&:hover": {
                  backgroundColor: "darkorange",
                  transform: "translateY(-10px)",
                  "& .MuiSvgIcon-root": {
                    color: "white", // icon fades smoothly
                  },
                  "& .hover-text": {
                    color: "white", // text fades smoothly
                  },
                },
              }}
            >
              <HeadsetMicIcon
                sx={{
                  color: isforHover ? "white" : orange[400],
                  fontSize: "7vw",
                  padding: 0,
                  borderRadius: 0,
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "1vh",
                  color: isforHover ? "white" : "black",
                }}
              >
                24/7 Support
              </Typography>
              <Typography sx={{ color: isforHover ? "white" : "black" }}>
                Friendly service with quick response to all your food delivery
                questions and helpful guidance anytime.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Services;
