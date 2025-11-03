import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { featuredServicesCards } from "../../constants/constants";

const FeaturedServicesCard = () => {
  const [flippedId, setFlippedId] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)", // 1 column on extra-small (mobile)
          sm: "repeat(2, 1fr)", // 2 columns on small screens
          md: "repeat(3, 1fr)", // 3 columns on medium screens
          lg: "repeat(4, 1fr)", // 4 columns on large screens and up
        },

        gap: 16,
      }}
    >
      {featuredServicesCards.map((singleCard) => (
        <Card
          key={singleCard.id}
          sx={{ width: 250, height: 200, perspective: 1000 }}
        >
          <CardActionArea
            onClick={() => {
              handleCardClick(singleCard.id);
            }}
            sx={{
              width: "100%",
              height: "100%",
              position: "relative",
              transformStyle: "preserve-3d",
              transition: "transform 0.6s",
              transform:
                flippedId === singleCard.id ? "rotateY(180deg)" : "none",
            }}
          >
            <CardContent
              sx={{
                backfaceVisibility: "hidden",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.paper",
                // border: "ActiveBorder",
                zIndex: 2,
              }}
            >
              <Typography variant="h5" component="div" align="center">
                {singleCard.title}
              </Typography>
            </CardContent>

            <CardContent
              sx={{
                backfaceVisibility: "hidden",
                border: "ActiveBorder",
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                bgcolor: "background.default",
                transform: "rotateY(180deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <Typography variant="body1" color="text.secondary" align="center">
                {singleCard.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default FeaturedServicesCard;
