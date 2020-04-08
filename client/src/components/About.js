import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FunfactCard from "./FunFactCard";
import createIcon from "../assets/createIcon.png";
import organizationIcon from "../assets/organizeIcon.png";
import shareIcon from "../assets/shareIcon.png";
import findIcon from "../assets/findIcon.png";

const cardInfo = [{
  image: createIcon,
  imgTitle: "Create Gifts",
  title: "Create",
  description: "Create and save new gift ideas to specific baskets or just to your profile to be used later."
}, {
  image: organizationIcon,
  imgTitle: "Organize Baskets",
  title: "Organize",
  description: "Keep organized of who gets what gift by assigning them to a basket! You can also keep track of gifts you've already given."
},{
  image: shareIcon,
  imgTitle: "Share Gifts",
  title: "Share",
  description: "Got a great gift idea you think others will love? Make it public for others to discover!"
}, {
  image: findIcon,
  imgTitle: "Find Gifts",
  title: "Discover",
  description: "Have a special event coming up but not sure where to start? Explore and discover other gift ideas others have shared."
}];

function About() {
  return(
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">About</Typography>
      </Grid>
      {cardInfo.map((item, index) => (
        <Grid item lg={3} md={3} xs={6} key={index}>
            <FunfactCard cardInfo={item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default About;
