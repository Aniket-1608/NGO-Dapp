import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// styles
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//ngo header
//For NGO Committee members
//For Admin
//For User
//

//ngo -- For government login

// There will be 4 tabs Home ,Approvals, View Annual Reports Login
//In Home Page we will show a image slider in which we image will automatically slide after 3seconds ,the image slider should cover the entire screen

//In approvals approvals will be displayed in a table format in which government can either accept approval or reject approval.

//In View Annual Report Generate pie chart on No. of fund amount received for different category ,regionwise no of people donating

// For NGO Committee members

//There will be 7 tabs Home, About Us , Propose Idea , Create Event , View Donations, Login , Gallery

// In Home Page we will show a image slider in which we image will automatically slide after 3seconds ,the image slider should cover the entire screen

//In About Us Page we will show a dropdown. Dropdown will contain Overview Tab , Vision Tab, Our Team Tab , Partners/Sponsors Tab , Milestones and Rewards Tab

// In overview which contain some information about what we have done and will contain an introductory video




// https://lucid.app/lucidspark/f83ec346-d3fc-4344-9c52-f12b63dea573/edit?invitationId=inv_e546336a-ea45-4226-aa15-925a37e52c36