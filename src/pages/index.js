// first step ever time to creating nice new page 
//command to remenber "imr + tab"
import * as React from "react";
import {Link} from 'gatsby';
// Step 2 : define your componet
// command to remenber "Rafc + tab"
//homepage 
const Greeting  = () => {
  return (
    <main>
      <title>Home Page</title>
         <h1>ohayo gozaimasu</h1>
         <Link to = "/terceira">page one</Link>
         <p>salve marcos!</p>
         </main>
  );
};
 // step 3 : export your component
export default Greeting ; 