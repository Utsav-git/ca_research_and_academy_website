import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: 320,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        py: { xs: 6, md: 8 },
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 700,
          mb: 2,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        Trade. Learn. Succeed.
      </Typography>

      <Typography
        variant="h6"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 400,
          color: theme.palette.primary.contrastText,
          maxWidth: 500,
        }}
      >
        Empowering traders with smart strategies, market insights, and hands-on
        education for your financial success.
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        size="large"
        sx={{ fontWeight: 600, borderRadius: 4 }}
        component={Link}
        to="/services"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default HeroSection;
