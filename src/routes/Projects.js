import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Projects = () => {
  return (
    <div className="project-container" style={{Left: '170.1px' }}>
    <div className="header">
      <div className="icons">
        <i className="fas fa-plus"></i> {/* Add icon */}
        <Link to="/add-page"> {/* Link to Add Page */}
          <i className="fas fa-search"></i> {/* Search icon */}
        </Link>
      </div> 
      <h1 className="project-title ">
        Project Name</h1>
    </div>

    <div className="content">
      <div className="image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFBIfClRGBGC9n5jXCUGrggUr2wxZsjCw0oI4h_3GNHbeuWjH_-xGh7KKI1iSiW-rBB4&usqp=CAU"
          alt="Project Image"
          width="200"
          style={{ Top: '302.4px', Left: '170.1px' }}
        />
      </div>

      <div className="text" style={{ Top : '302.4px' , Left: '750.0px' }}>
        <h2>Miyawaki – A Modern Plantation Drive Method</h2>
        <p>Theme: Environment & Sustainability</p>
        <p>Partner Agency: Bristlecone India Limited</p>
        <p>Location: Pune</p>
        <p>Description: Y4D FOUNDATION'S TREE PLANTING INITIATIVES EMPLOY TRADITIONAL TREE PLANTING TECHNIQUES ALONG WITH THE...</p>
      </div>
    </div>

    <div className="buttons">
      <Link to="/read-more">Read More</Link>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  </div> 
  );
};

export default Projects;




