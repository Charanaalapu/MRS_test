import React, { useState, useEffect } from 'react';
import './Header.css';
import flag from '../Assets/flag.png';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../Assets/default-profile-logo.jpg'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Header = ({ userData }) => {

  const [open, setOpen] = React.useState(false);
  console.log(userData)
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        Logged Out
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [displayName, setDisplayName] = useState('');

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    if (userData !== null) {

    }
  }, [])

  const handleLogout = ()=>{
     localStorage.setItem('token', "")
     handleClick()
    setTimeout(() => {
      navigate('/');
    }, 500);
  }


  return (
    <>
      <div className='header-main'>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div onClick={() => navigate('/')} style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>MRS Portal</div>
        </div>
        <div style={{display:'flex', flexDirection:'column'}}>
        <div>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Logged Out"
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        action={action}
      />
      
    </div>
          <div onClick={toggleDropdown} style={{ cursor: 'pointer', position:'relative' }}>
            <img
              height="30px"
              src={logo}
              alt=''
              style={{ borderRadius: '50%', border:'2px solid black' }}
            />
            {dropdownOpen && (
              <div style={{ backgroundColor: 'white',border:'1px solid black', borderRadius: '8px', padding: '0.4rem',right:0, position:'absolute', width:'200px'  }} className='dropdown-content'>
                <div style={{display:'flex', flexDirection:'row', gap:'0.4rem', alignItems:'center', borderBottom:'2px solid grey'}} className='dropdown-menus'>
                  <div style={{display:'flex',alignItems:'center',padding:'0.4rem',}}>
                    <img  height="35px" width="35px" style={{borderRadius:'50%', border:'1px solid black'}} src={logo}></img>
                  </div>
                  <div style={{display:'flex', flexDirection:'column'}}>
                    <div style={{overflow:'hidden',wordWrap:'break-word'}}><strong >John Doe</strong></div>
                    {/* <div><strong>john@gmail.com</strong></div> */}
                  </div>
                </div>               
                { userData.userRole==="admin" && <div onClick={()=> navigate('/admin-panel')} className='dropdown-menus'><AdminPanelSettingsIcon /><strong>Go to Admin Console</strong></div>}
                <div className='dropdown-menus'><SettingsIcon /><strong>Settings</strong></div>
               
                <div onClick={handleLogout} className='dropdown-menus'><LogoutIcon /><strong>Logout</strong></div>
              </div>
            )}
        </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps)(Header);
