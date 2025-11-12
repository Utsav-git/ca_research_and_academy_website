import { Box } from "@mui/material";
import FeaturedServicesCard from "../components/common/FeaturedServicesCard";
import HeroSection from "../components/common/HeroSection";
import MarketingInsights from "../components/common/MarketingInsights";
import QuickIntro from "../components/common/QuickIntro";
import UpcomingEvents from "../components/common/UpcomingEvents";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Box sx={{ px: 3, overflowY: "hidden" }}>
        <QuickIntro />
        <FeaturedServicesCard />
        <MarketingInsights />
        <UpcomingEvents />
      </Box>
    </>
  );
};

export default Home;
