import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { events } from "../../constants/content";
import { Room } from "@mui/icons-material";

const UpcomingEvents = () => {
  const theme = useTheme();
  const cardBgColors = [
    theme.palette.primary.main,
    theme.palette.secondary.main,
    theme.palette.warning.main, // Use theme.palette.info.main or any accent as desired
  ];
  const cardTextColors = [
    theme.palette.primary.contrastText,
    theme.palette.secondary.contrastText,
    theme.palette.warning.contrastText, // Adjust for your palette
  ];
  return (
    <Box sx={{ my: 5 }}>
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.text.secondary,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        Upcoming Events
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {events.map((event, idx) => (
          <Card
            key={event.id}
            sx={{
              background: cardBgColors[idx % cardBgColors.length],
              color: cardTextColors[idx % cardTextColors.length],
              boxShadow: 3,
              position: "relative",
              //   minWidth: "300px",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 4,
                pb: 3,
                px: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: "3rem",
                  mb: -1,
                  letterSpacing: 2,
                }}
              >
                {event.day}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                {event.month}
              </Typography>
              <Divider
                sx={{ width: 40, bgcolor: "rgba(255,255,255,0.4)", mb: 1 }}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  mb: 1,
                }}
              >
                <Room
                  sx={{
                    fontSize: 16,
                    color: cardTextColors[idx % cardTextColors.length],
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    color: cardTextColors[idx % cardTextColors.length],
                  }}
                >
                  {event.location}
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 500, mb: 1, textAlign: "center" }}
              >
                {event.title}
              </Typography>
              <Button
                sx={{
                  color: cardTextColors[idx % cardTextColors.length],
                  mt: 2,
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "1rem",
                  pl: 0,
                  ":hover": {
                    background: "none",
                    color: cardTextColors[idx % cardTextColors.length],
                    fontSize: "1.1rem",
                  },
                }}
                href={event.detailsUrl}
                endIcon={<span style={{ fontSize: "1.2em" }}>{"›"}</span>}
              >
                Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default UpcomingEvents;
