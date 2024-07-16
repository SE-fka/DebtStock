import React, { useState, useEffect } from 'react';
import Link from '../Link/Link';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { IconButton, useTheme,} from "@mui/material";
import { ColorModeContext} from "../../../styles/theme";
import { useContext } from "react";

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 200) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
 
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
         
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav lg-auto' style={{paddingLeft:"10%"}}>
           
            <li className='nav-item' style={{ paddingLeft: '10%', whiteSpace: 'nowrap' }}>
            <Link target='/' offset={-120} classes='nav-link'>
            <p> International Debt Stock and Education Expenditure Statistics.</p>
            </Link>
            </li>
          </ul>
        </div>
      </div>
      <IconButton onClick={colorMode.toggleColorMode}>
        {
          theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon style={{color:"767677"}}/>
          ) : (
            <LightModeOutlinedIcon />
          )
        }
      </IconButton> &nbsp;&nbsp;
    </nav>
  );
};

export default Nav;
