import Overview from '../routes/Overview';
import Layout from '../components/Layout';
import { Routes, Route  , Link } from 'react-router-dom';
const About = () => {
  return(
    <div>
      <Link to="/overview">Overview</Link>
      <Routes>
        
        <Route path="overview" element={<Overview />} />
      </Routes>
    </div>
  );
  };
  
  export default About;