import type { FeaturedServiceCardType, NavItem } from "../types/types";

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
