// first step ever time to creating nice new page 
//command to remenber "imr + tab"
import * as React from "react";
import Layout from "../components/Layout";
import {StaticImage} from 'gatsby-plugin-image'
// Step 2 : define your componet
// command to remenber "Rafc + tab"
//homepage 
const Greeting  = () => {
  return (
    <Layout pageTitle="home">
 <p>my dogos.</p>
 <StaticImage
   alt="my dogs Mel and Gin"
   //src="https://cdn.discordapp.com/attachments/823376253267607573/895501618626314250/IMG_20211006_234307.jpg"
   src="../images/gin-mel.png"
   />
 
   </Layout>
  );
};
 // step 3 : export your component
export default Greeting ; 