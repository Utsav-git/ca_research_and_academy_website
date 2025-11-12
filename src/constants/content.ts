import type {
  FeaturedServiceCardType,
  MarketInsightsType,
  NavItem,
} from "../types/types";

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export const featuredServicesCards: FeaturedServiceCardType[] = [
  {
    id: "1",
    title: "Live Trading",
    description:
      "Participate in real-time trading sessions to experience live market analysis and decision-making.",
  },
  {
    id: "2",
    title: "Mentorship",
    description:
      "Receive personalized guidance and one-on-one coaching to accelerate your trading skills and strategies.",
  },
  {
    id: "3",
    title: "Workshops",
    description:
      "Join interactive workshops to deepen your knowledge on trading techniques and market dynamics.",
  },
  {
    id: "4",
    title: "Market Analysis",
    description:
      "Access detailed market reports and insights to make informed trading decisions.",
  },
];

export const marketInsights: MarketInsightsType[] = [
  {
    id: "1",
    headline: "Nifty surges to 6-month high",
    summary: "Strong buying in banking and tech drives market optimism.",
    date: "2025-1-11",
  },
  {
    id: "2",
    headline: "US Inflation Softens",
    summary: "Dollar slips as CPI growth moderates, boosting risk assets.",
    date: "2025-2-10",
  },

  {
    id: "3",
    headline: "US Inflation Softens",
    summary: "Dollar slips as CPI growth moderates, boosting risk assets.",
    date: "2025-5-10",
  },

  {
    id: "3",
    headline: "US Inflation Softens",
    summary: "Dollar slips as CPI growth moderates, boosting risk assets.",
    date: "2025-12-10",
  },
  {
    id: "3",
    headline: "US Inflation Softens",
    summary: "Dollar slips as CPI growth moderates, boosting risk assets.",
    date: "2025-01-10",
  },
  {
    id: "3",
    headline: "US Inflation Softens",
    summary: "Dollar slips as CPI growth moderates, boosting risk assets.",
    date: "2025-04-10",
  },
  {
    id: "3",
    headline: "US Inflation Softens",
    summary: "Dollar slips as CPI growth moderates, boosting risk assets.",
    date: "2025-3-10",
  },
  {
    id: "3",
    headline: "US Inflation Softens",
    summary: "Dollar slips as CPI growth moderates, boosting risk assets.",
    date: "2025-8-10",
  },
  // ...add more tips/insights
];

export const events = [
  {
    id: "1",
    day: "27",
    month: "November",
    location: "Kolhapur",
    title: "Inflation",
    detailsUrl: "#",
  },
  {
    id: "2",
    day: "28",
    month: "November",
    location: "Pune",
    title: "Stock Investments for Begineers",
    detailsUrl: "#",
  },
  {
    id: "3",
    day: "05",
    month: "December",
    location: "Mumbai",
    title: "What is SIP?",
    detailsUrl: "#",
  },
  // Optionally, more events...
];
