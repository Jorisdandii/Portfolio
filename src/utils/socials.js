import { AiFillHome, AiOutlineFileDone, AiOutlineUser } from "react-icons/ai";
import { BsPersonWorkspace, BsTelephoneOutbound } from "react-icons/bs";
import { FaFacebook, FaGithub, FaTelegram, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const social = [
  {
    href: "github.com/jorisdandii",
    icon: <FaGithub />,
  },
  {
    href: "t.me/sirojiddin8617",
    icon: <FaTelegram />,
  },
  {
    href: "https://www.facebook.com/people/Sirojiddin-Tangirov/pfbid0gPWm5NvsEVX3CA8cnmM5YKvcynU47Q5cM2iaxZQEoHdYLhzSUzReWfn5UcoSe7wql/?locale=ko_KR",
    icon: <FaFacebook />,
  },
  {
    href: "twitter.com/",
    icon: <FaTwitter />,
  },
  {
    href: "https://www.instagram.com/sirojiddin8617/",
    icon: <AiFillInstagram />,
  },
];

export const nav_icons = [
  { href: "#home", icon: <AiFillHome />, text: "" },
  { href: "#about", icon: <AiOutlineUser />, text: "" },
  { href: "#portfolio", icon: <BsPersonWorkspace />, text: "text-2xl" },
  {
    href: "#skills",
    icon: <AiOutlineFileDone />,
    text: "text-3xl",
  },
  { href: "#contact", icon: <BsTelephoneOutbound />, text: "text-2xl" },
];
