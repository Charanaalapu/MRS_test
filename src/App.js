import './App.css';
import DashboardPartyWise from './Components/ConstituencyData/DashboardPartyWise';
import SignIn from './Components/SignUp_SignIn/SignIn';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/ConstituencyData/Dashboard';
import DashboardYearWise from './Components/ConstituencyData/DashboardYearWise';
import Constituency_Nav_Page from './Components/ConstituencyData/Constituency_Nav_Page';
import { Navigate } from 'react-router-dom';
// import PrivateRoute from './Components/PrivateRoute';
import homepage3 from './Components/HomePage/Main/Main';
import constituenciesPage from './Components/HomePage/Const_maps'
import AdminPanel from './Components/Admin Console/AdminPanel';
import Reset_pass from './Components/Password Reset Components/Reset_pass';
import Reset_instructions from './Components/Password Reset Components/Reset_instructions';
import Confirm_password from './Components/Password Reset Components/Confirm_password';


const PrivateRoute = ({ element: Element }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Redirect to the login page if the user is not authenticated
    return <Navigate to="/" />;
  }

  // Render the protected component
  return <Element />;
};

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/forget-password" element={<Reset_pass />} />
      <Route path="/npsp" element={<Confirm_password />} />
      <Route path="/reset_instructions" element={<Reset_instructions />} />
      <Route path='/home' element={<PrivateRoute element={homepage3} />} />
      <Route path='/constituencies' element={<PrivateRoute element={Constituency_Nav_Page } />} />
      <Route path='/party-wise-dashboard' element={<PrivateRoute element={DashboardPartyWise } />} />
      <Route path='/constituency-list' element={<PrivateRoute element={constituenciesPage } />} />
      <Route path='/dashboard-all-years' element={<PrivateRoute element={DashboardYearWise } />} />
      <Route path='/admin-panel' element={<PrivateRoute element={AdminPanel} />} />
      <Route path='/rsp' element={<PrivateRoute element={Reset_pass} />} />
    </Routes>
  </div>
  );
}

export default App;
