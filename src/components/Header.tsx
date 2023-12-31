import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout } from "../redux/userReducer";

const Header = () => {

  const dispatch=useDispatch();

  const signout=async()=>{
      await signOut(auth);
      dispatch(logout());
  }

  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png"
          alt="gmail"
        />
      </div>

      <div className="header_middle">
        <SearchIcon />
        <input type="text" placeholder="search mail"/>
        <KeyboardArrowDownIcon />
      </div>

      <div className="header_right">
        <IconButton>
            <AppsIcon />
        </IconButton>
        
        <IconButton>
            <NotificationsIcon />
        </IconButton>
        <Avatar onClick={signout} className="headerRight_avatar" />
      </div>
    </div>
  );
};

export default Header;
