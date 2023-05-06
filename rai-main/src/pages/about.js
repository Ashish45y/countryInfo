import { Container, Typography } from "@mui/material";
import Image from "next/image";

const about = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        textTransform="uppercase"
        paddingTop="20px"
      >
        Ashish Rai
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ margin: "50px 25px" }}>
          <Image
            src="/profile.jpeg"
            alt="profile picture"
            width="350"
            height="400"
          />
        </div>
        <div style={{ fontSize: "1.1rem" }}>
          <p>
            I have been involved in various technology-related organizations
            such as GDG Lucknow and New Delhi, GDSC BBDNIIT, Lucknow, The
            Institution of Engineers, and Android Worldwide showcases my strong
            passion and commitment towards the technology field. Through my
            active participation in these organizations, I have honed my ability
            to work collaboratively with others towards a common goal.
          </p>

          <p>
            {" "}
            Additionally, my experience as a mentor for CS50&apos;s New
            Year&apos;s Seminars on Python, SQL, and Linux at Harvard University
            has provided me with a platform to share my knowledge and expertise
            with others, while also demonstrating my leadership skills. I am
            dedicated to continuous learning, and this experience has helped me
            adapt to new technologies and platforms, enabling me to stay updated
            with the latest trends and best practices in the field of
            technology.{" "}
          </p>

          <p>
            Overall, my involvement in various technology-related organizations,
            coupled with my leadership experience and dedication to continuous
            learning, make me an ideal candidate for the Covetous GGI Tech
            Leadership Program. I am excited about the prospect of contributing
            to this program and enhancing my knowledge and skills in the
            technology industry. I am confident that the program&apos;s unique
            opportunities for personal and professional growth will help me
            achieve my long-term career goals and make a positive impact in the
            technology industry.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default about;
