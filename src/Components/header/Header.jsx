import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <h1 style={{ float: "left", marginRight: "30px" }} >
        Nour Store
    </h1>

<Link style={{ float: "right", marginRight: "30px" }} to='/'><Button variant="contained">
      Cart
    </Button></Link>
       
    </>
  );
}

export default Header;