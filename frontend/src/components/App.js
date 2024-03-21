import { Routes, Route } from "react-router-dom";
import { MyContext  } from "./MyContext";
import Home from "../routes/Home";
import About from "../routes/About";
import WebDesign from "../routes/WebDesign";
import SEO from "../routes/SEO";
import Services from "../routes/Services";
import Layout from "./Layout";
import Frontend from "../routes/Frontend";
import PHP from "../routes/PHP";
import Node from "../routes/Node";
import WebDev from "../routes/WebDev";
import Overview from "../routes/Overview";
import VisionandMission from "../routes/VisionandMission";
import MilestonesandRewards from "../routes/MilestonesandRewards";
import OurTeam from "../routes/OurTeam";
import LegalStatusandEmpanelments from "../routes/LegalStatusandEmpanelments";
import WhatWeDo from "../routes/WhatWeDo";
import Projects from "../routes/Projects";
import Manan from "../routes/manan";
import MyComponent from "../routes/MyComponent";
import Gallery from "../routes/Gallery";
import ContactUs from "../routes/ContactUs";
import Donate from "../routes/Donate";
import Faucet from "../routes/Faucet";
import LoginAsUser from "../routes/LoginAsUser";
import LoginASAdmin from "../routes/LoginAsAdmin";
import LoginAsGovernment from "../routes/LoginAsGovernment";
import LoginAsCommitteeMember from "../routes/LoginAsCommitteeMember";
import Authentication from "../routes/authentication";
import Events from "../routes/Events";
import ViewDonations from "../routes/ViewDonations";
import UserEnroll from "../routes/UserEnroll";
import MiningPool from "../routes/MiningPool";
import ProposeIdea from "../routes/ProposeIdea";
import AttendMeetings from "../routes/AttendMeetings";
import AcceptApproval from "../routes/AcceptApproval";
import RaftAlgorithm from "../routes/RaftAlgorithm";
import GenerateProjectReport from "../routes/GenerateProjectReport";
import ViewAnnualReports from "../routes/ViewAnnualReports";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import SignUp from "../routes/SignUp";
import ForgotPassword from "../routes/ForgotPassword";
import SidenavUser from "./SidenavUser";
import SidenavCommittee from "./SidenavCommittee";
// import { menuItems } from "../lib/menuItems";


const App = () => {
  const[loginStatus, setLoginStatus] = React.useState(false);

  return (    
    <MyContext.Provider value={{loginStatus, setLoginStatus}}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="overview" element={<Overview />} />
          <Route path="vision-and-mission" element={<VisionandMission />} />
          <Route path="milestones-and-rewards" element={<MilestonesandRewards />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="legal-status-and-empanelments" element={<LegalStatusandEmpanelments />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery"element={<Gallery />} />
          <Route path="contactus"element={<ContactUs />} />
          <Route path="donate"element={<Donate />} />
          <Route path="faucet"element={<Faucet />} />
          <Route path="loginasuser"element={<LoginAsUser />} />
          <Route path="loginasadmin"element={<LoginASAdmin />} />
          <Route path="loginasgovernment"element={<LoginAsGovernment />} />
          <Route path="loginascommitteemember"element={<LoginAsCommitteeMember />} />
          <Route path="authentication"element={<Authentication />} />
          <Route path="forgotpassword"element={<ForgotPassword />} />
          <Route path="signup"element={<SignUp />} />
          <Route path="sidenavuser" element={<SidenavUser />} />
          <Route path="sidenavcommittee" element={<SidenavCommittee />} />
          <Route path="viewdonations" element={<ViewDonations />} />
          <Route path="userenroll" element={<UserEnroll />} />
          <Route path="miningpool" element={<MiningPool />} />
          <Route path="proposeidea" element={<ProposeIdea />} />
          <Route path="attendmeetings" element={<AttendMeetings />} />
          <Route path="acceptapproval" element={<AcceptApproval />} />
          <Route path="raftalgorithm" element={<RaftAlgorithm />} />
          <Route path="generateprojectreport" element={<GenerateProjectReport />} />
          <Route path="viewannualreports" element={<ViewAnnualReports />} />
          <Route path="manan"element={<Manan/>} />
          <Route path="mycomponent"element={<MyComponent/>} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </MyContext.Provider >
      
  );
};

export default App;
