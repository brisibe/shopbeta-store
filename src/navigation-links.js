import { FaGamepad, FaLaptop, FaMobileAlt, FaTshirt } from "react-icons/fa";

export const navigation = [
  {
    name: "Fashion",
    icon: <FaTshirt />,
    url: "/fashion",
    color: "blue.500",
  },
  {
    name: "Gaming",
    icon: <FaGamepad />,
    url: "/gaming",
    color: "yellow.500",
  },
  {
    name: "Phones",
    icon: <FaMobileAlt />,
    url: "/phones",
    color: "green.500",
  },
  {
    name: "Laptops",
    icon: <FaLaptop />,
    url: "/laptops",
    color: "orange.500",
  },
];
