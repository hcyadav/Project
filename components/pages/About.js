import React from "react";

const About = ()  => {
return(
    <div className= "container">
        <div className="py-4">
            <h1>About project</h1>
            <p className="lead">
            PAGINATION IN REACT WITH CRUD OPERATION USING API......
            </p>
            <p className="lead">
            In Navbar thera are 4 pages i.e Home, About us, Contact us, Error page alongwith there is 'ADDUSER' button 
            on the right side of the navbar.
            
            </p>
            <p className="lead">
            #.ADDUSER button is use to Create the data.
            </p>
            <p className="lead">
            Home page fetch all API data and in last column I have created three button i.e VIEW,EDIT and DELETE.
            <h5>1.View button helps us to view any particular data.</h5>
            <h5>2.Edit button helps us to edit any data.</h5>
            <h5>3.Delete button is to delete the data.</h5>
            </p>
          
            <p className="lead">
            #.In About page i have describe the projects in details.

            </p>
            <p className="lead">
            #.In contact page i make form for contact purpose.
            </p>
           
        </div>
    </div>
);
};
export default About;