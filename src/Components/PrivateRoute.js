import { Route, Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  if (!token) {
    // Redirect to the login page if the user is not authenticated
    navigate('/');
    return null; 
  }
  
  // Render the protected component dynamically
  return <Route element={element} />;
};

export default PrivateRoute