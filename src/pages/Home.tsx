import { Box } from "@mui/material";
import FeaturedServicesCard from "../components/common/FeaturedServicesCard";
import HeroSection from "../components/common/HeroSection";
import MarketingInsights from "../components/common/MarketingInsights";
import QuickIntro from "../components/common/QuickIntro";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Box sx={{ px: 3 }}>
        <QuickIntro />
        <FeaturedServicesCard />
        <MarketingInsights />
      </Box>
    </>
  );
};

export default Home;
