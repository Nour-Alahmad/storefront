import React from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { removeFromCart } from "../../store/cart";
import { connect } from "react-redux";
import { styled } from '@mui/system';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
function Header(props) {
  const [anchor, setAnchor] = React.useState(null);

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'simple-popper' : undefined;
  const PopupBody = styled('div')(
    ({ theme }) => `
    width: max-content;
    padding: 12px 16px;
    margin: 8px;
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    box-shadow: ${
      theme.palette.mode === 'dark'
        ? `0px 4px 8px rgb(0 0 0 / 0.7)`
        : `0px 4px 8px rgb(0 0 0 / 0.1)`
    };
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    z-index: 1;
  `,
  );

  const grey = {
  50: '#f6f8fa',
  200: '#d0d7de',
  500: '#6e7781',
  700: '#424a53',
  900: '#24292f',
};

  return (
    <>
    <h1 style={{ float: "left", marginRight: "30px" }} >
        Nour Store
    </h1>

<Link style={{ float: "right", marginRight: "30px" }} to='/'>
  
  
  {/* <Button variant="contained">
      Cart ({props.myCart.length})
    </Button> */}
    <Button variant="contained" aria-describedby={id} type="button" onClick={handleClick}>
    Cart ({props.myCart.length})
</Button>
<Popup id={id} open={open} anchor={anchor}>
  <PopupBody>{props.myCart.length? props.myCart.map((item,index)=>{

      return(
        <> 
        <div key={index}>
            <button onClick={()=> props.removeFromCart({name:item.name})} style={{color:'red'}}>✘</button> <span key={index}> {item.name } :  {item.quantity}</span> <br/>
        </div>
      
        </>
      

      )
    }): <p>You Cart is empty</p>}</PopupBody>
</Popup>
    </Link>
   
       
    </>
  );
}

const mapStateToProps = (state) => ({
  myCart: state.cart.cart ,
   
});

const mapDispatchToProps = {

  removeFromCart,

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);