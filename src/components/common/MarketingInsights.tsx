import { Box, Card, CardContent, Typography } from "@mui/material";
import { marketInsights } from "../../constants/constants";
import { formatDate } from "../../utils/utils";
import { useEffect, useRef } from "react";

const MarketingInsights = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 270,
          behavior: "smooth",
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Box sx={{ py: 1 }}>
      <Typography variant="h5" gutterBottom align="center">
        Market Insights
      </Typography>
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          py: 2,
          px: 1,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {marketInsights.map((item) => (
          <Card key={item.id} sx={{ minWidth: 260, flex: "0 0 auto" }}>
            <CardContent>
              <Typography variant="subtitle2" color="primary">
                {formatDate(item.date)}
              </Typography>
              <Typography variant="h6">{item.headline}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.summary}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MarketingInsights;
