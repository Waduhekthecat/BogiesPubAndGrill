import styledCom from 'styled-components';
import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
  import Slide from '@mui/material/Slide';
  import Logo from '../imgs/Logo.jpg';
  import menu from '../imgs/menu.png';
  import facebook from '../imgs/facebook2.png';

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

const Navbar = ({ handleHome, handleMenu, handleDrinks, handleEvents, handleContact }) => {
    const [open, setOpen] = useState(false);

    const handleDialog = () => {
      !open ? setOpen(true) : setOpen(false);
    };
    console.log('mobile menu opened: ', {open})

    const handleDialogHome = () => {
      handleHome();
      setOpen(false);
    };
    const handleDialogMenu = () => {
      handleMenu();
      setOpen(false);
    };
    const handleDialogDrinks = () => {
      handleDrinks();
      setOpen(false);
    };
    const handleDialogEvents = () => {
      handleEvents();
      setOpen(false);
    };
    const handleDialogContact = () => {
      handleContact();
      setOpen(false);
    };

    return (
        <>
        <Nav>
           <BogiesLogo/>
           <Menu style={{cursor:'pointer'}}onClick={handleDialog}/>
             <NavLinks> 
                <Link><NavBtn onClick={handleHome}>Home</NavBtn></Link>
                <Link><NavBtn onClick={handleMenu}>Menu</NavBtn></Link>
                <Link><NavBtn onClick={handleDrinks}>Drinks</NavBtn></Link>
                <Link><NavBtn onClick={handleEvents}>Events</NavBtn></Link>
                <Link><NavBtn onClick={handleContact}>Contact</NavBtn></Link>
             </NavLinks> 
       </Nav>

    {/* nav modal */}
     <Dialog
        BackdropProps={{backgroundColor: 'black'}}
        fullScreen
        open={open}
        onClose={handleDialog}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ background:'black', position: 'absolute', zIndex:'1', height:'100vh', opacity:.9}}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1, textAlign:'center' }} variant="h3" component="div">
            </Typography>
            <Close
              edge="start"
              color="inherit"
              onClick={handleDialog}
              aria-label="close"
            >
              <CloseIcon style={{height:'40px', width:'40px'}}/>
            </Close>
          </Toolbar>
        </AppBar>
        <ListContainer>
          <DialogUl>
              <DialogBtn>
                <DialogBtnTxt onClick={handleDialogHome}>
                  <DialogBtnOuter>
                    <DialogBtnInner>
                      <span>Home</span>
                    </DialogBtnInner>
                  </DialogBtnOuter>
                </DialogBtnTxt>
              </DialogBtn>
              <DialogBtn>
                <DialogBtnTxt onClick={handleDialogMenu}>
                  <DialogBtnOuter>
                    <DialogBtnInner>
                      <span>Menu</span>
                    </DialogBtnInner>
                  </DialogBtnOuter>
                </DialogBtnTxt>
              </DialogBtn>
              <DialogBtn>
                <DialogBtnTxt onClick={handleDialogDrinks}>
                  <DialogBtnOuter>
                    <DialogBtnInner>
                      <span>Drinks</span>
                    </DialogBtnInner>
                  </DialogBtnOuter>
                </DialogBtnTxt>
              </DialogBtn>
              <DialogBtn>
                <DialogBtnTxt onClick={handleDialogEvents}>
                  <DialogBtnOuter>
                    <DialogBtnInner>
                      <span>Events</span>
                    </DialogBtnInner>
                  </DialogBtnOuter>
                </DialogBtnTxt>
              </DialogBtn>
              <DialogBtn>
                <DialogBtnTxt onClick={handleDialogContact}>
                  <DialogBtnOuter>
                    <DialogBtnInner>
                      <span>Contact</span>
                    </DialogBtnInner>
                  </DialogBtnOuter>
                </DialogBtnTxt>
              </DialogBtn>
              <SocialLi>
                <SocialOuter>
                  <SocialInner>
                    <a href="https://www.facebook.com/bogiespub2/">
                      <img src={facebook} alt=""/></a>
                  </SocialInner>
                </SocialOuter>
              </SocialLi>
          </DialogUl>
          </ListContainer>
      </Dialog>
     </>
    )
};

export default Navbar;

// Styled Components //

const Close = styledCom(IconButton).attrs({

})`
edge="start"
color="inherit"
onClick={handleDialog}
aria-label="close"
&:hover {
  transform: scale(1.3);
}
`;

const ListContainer = styledCom.div`
padding:2em;
background-color: transparent;
max-width: 28em;
border: 0;
flex-grow: 0;
flex-shrink: 0;
flex-basis: auto;
z-index: 2;
width: 100%;
margin: 0 auto;
font-size: 20px;
font-style: normal;
font-weight: 500;
color: #999999;
line-height: 1.7;
-webkit-text-size-adjust: 100%;
-webkit-tap-highlight-color: rgba(0,0,0,0);
transition-property: transform;
transition-duration: 500ms;
transition-timing-function: cubic-bezier(0.400,0.000,0.200,1.000);
z-index:200;
`;

const DialogUl = styledCom.ul`
position: relative;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
padding-inline-start: 40px;
font-style: normal;
font-weight: 500;
color: #999999;
height: 810px;
min-width: 1px;
margin: 0;
padding: 0;
list-style: none;
align-items:center;
justify-content:center;
text-align: center;
font-family: "Quicksand",sans-serif;
font-size: 1em;
overflow: hidden;
overflow-wrap: break-word;
box-sizing: border-box;
transition-property: height;
transition-duration: 300ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
z-index:100;

@media(max-width: 786px) {
  position:absolute;
  top:-8%;
  transform:scale(.75)
}

`;

const DialogBtn = styledCom.li`
display: list-item;
text-align: -webkit-match-parent;
min-width: 1px;
font-size: 1em;
box-sizing: border-box;
align-items:center;
justify-content:center;
align-text:center;
`;

const DialogBtnTxt = styledCom.button`
opacity: 1;
transform: translate(0, 0);
font-size: 2em;
background-color: transparent;
border: 0;
transition-property: border-color,background-color,box-shadow,opacity,transform;
`;

const DialogBtnOuter = styledCom.div`
padding-top: 0.5em;
    padding-right: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 0.5em;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    display: flex;
    flex: 1 0 auto;
    position: relative;
    z-index: 2;
    height: 100%;
    border-radius: inherit;
    transform: translate3d(0, 0, 0);
    box-sizing: border-box;
    `;

    const DialogBtnInner = styledCom.div`
    color:white;
    flex-shrink: 1;
    min-width: 1px;
    max-width: 100%;
    margin-left: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      color:red;
    }
    `;

const SocialLi = styledCom.li`
  display: inline-flex !important;
  box-sizing: border-box;
  text-align: -webkit-match-parent;
  font-size: 1em;
  list-style: none;
`;

const SocialOuter = styledCom.div`
  padding-top: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 0.5em;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SocialInner = styledCom.div`
  flex-shrink: 1;
  min-width: 1px;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
      &:hover {
      transform: scale(1.1);
`;


const NavBtn = styledCom.button`
background:transparent;
color:white;
cursor: pointer;
width:70px;
height:30px;
font-size: 18px;
font-weight: 700;
border:none;
&:hover {
    transform: scale(1.3);
  }
  &:active {
    transform: scale(1.1);
  }
`;

const Menu = styledCom.img.attrs({
    src:menu, alt:'menu'
})`
display:none;
position:absolute; 
margin-top:20px;
margin-right:10px;
right:10%; 
height:50px; 
width:50px;
&:hover {
      transform: scale(1.1);
    transition: 200ms ease-in;
}
&:active {
    transform: scale(1)
}
@media (max-width: 1150px) {
    display:block;
    }
    @media(max-width: 1100px) {
      margin-right:-10px;
      }
      @media(max-width: 1000px) {
        margin-right:-15px;
        }
        @media(max-width: 900px) {
          margin-right:-20px;
          }
          @media(max-width: 800px) {
            margin-right:-30px;
            }
`;

const Nav = styledCom.nav`
position: absolute;
display: flex;
top: 0;
background: black;
border-bottom: white double;
height: 100px;
width: 100vw;
z-index: 100;
`;

const NavLinks = styledCom.ul`
position:absolute;
right:20%;
    @media (max-width: 1150px) {
    display:none;
    }
`;

const Link = styledCom.li`
right:10%;
margin-right:-40px;

`;

const BogiesLogo = styledCom.img.attrs({
    src: Logo, alt: 'Bogies Pub and Grill'
})`
margin-left:23%;
height:100px;
width:135px;
transition: 200ms ease-in;
@media(max-width: 1700px) {
  margin-left:21%;
  }
  @media(max-width: 1600px) {
    margin-left:18%;
    }
    @media(max-width: 1500px) {
      margin-left:15%;
      }
@media(max-width: 1400px) {
  margin-left:13%;
  }
@media(max-width: 1300px) {
  margin-left:11%;
  }
  @media(max-width: 1200px) {
    margin-left:9%;
    }
    @media(max-width: 1200px) {
      margin-left:8%;
      }
      @media(max-width: 1100px) {
        margin-left:7%;
        }
`;