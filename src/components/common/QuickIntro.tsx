import { Avatar, Box, Divider, Typography } from "@mui/material";

const QuickIntro = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
        px: 3,
      }}
    >
      <Box sx={{ maxWidth: 600 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          About Trader
        </Typography>
        <Typography variant="body1" gutterBottom>
          I am an experienced trader with over 10 years of financial market
          expertise specializing in technical analysis, strategy development,
          and trader education.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" color="text.secondary">
          Credentials & Highlights:
        </Typography>
        <ul>
          <li>10+ years trading experience</li>
          <li>Certified Market Technician</li>
          <li>1000+ students mentored</li>
          <li>Regular speaker at leading financial conferences</li>
        </ul>
      </Box>
      <Avatar
        variant="square"
        alt="Intro Pic"
        src="https://plus.unsplash.com/premium_photo-1661602011150-6c6f8b9ba788?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
        sx={{ width: 360, height: 360, mb: { xs: 2, md: 0 } }}
      />
    </Box>
  );
};

export default QuickIntro;
