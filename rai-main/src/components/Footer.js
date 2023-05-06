import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <BottomNavigation>
        <Link href="https://github.com/Ashish45y" target="_blank">
          <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
        </Link>
        <Link href="/" className="link">
          Home
        </Link>
        <Link href="/about" className="link">
          About Me
        </Link>
        <Link href="https://www.linkedin.com/in/ashish-rai45" target="_blank">
          <BottomNavigationAction label="Linkedin" icon={<LinkedInIcon />} />
        </Link>
      </BottomNavigation>
    </>
  );
};

export default Footer;
