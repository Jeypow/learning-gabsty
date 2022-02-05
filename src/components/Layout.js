import * as React from 'react';
import {Link} from 'gatsby';
 
const Layout = ({pageTitle, children}) => {
   return (
   <div>
       <title>{pageTitle}</title>
        <nav>
            <ul>
                <li><Link to= "/">index</Link>

                </li>
                <li><Link to= "/terceira">terceira</Link>

                </li>
            </ul>           
        </nav>
        <main>
            <h1>{pageTitle}</h1>
            {children}
        </main>
   </div>
   );
 };
 export default Layout;