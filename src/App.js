import React, {useState} from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import styledCom from 'styled-components';
import banner from './imgs/Banner1.jpg';
import outside from './imgs/Outside.jpg';
// components //
import Navbar from './components/Navbar.js';
import Menu from './components/Menu.js';
import Drinks from './components/Drinks.js';
import Events from './components/Events.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
const [home, setHome] = useState(true);
const [menu, setMenu] = useState(false);
const [drinks, setDrinks] = useState(false);
const [events, setEvents] = useState(false);
const [contact, setContact] = useState(false);

const handleHome = () => {
  setHome(true)      
    setMenu(false)
    setDrinks(false)
    setEvents(false)
    setContact(false)
};
const handleMenu = () => {
    setHome(false)      
  setMenu(true)
    setDrinks(false)
    setEvents(false)
    setContact(false)
};
const handleDrinks = () => {
    setHome(false)      
    setMenu(false)
  setDrinks(true)
    setEvents(false)
    setContact(false)
};
const handleEvents = () => {
    setHome(false)      
    setMenu(false)
    setDrinks(false)
  setEvents(true)
    setContact(false)
};
const handleContact = () => {
  setHome(false)      
  setMenu(false)
  setDrinks(false)
  setEvents(false)
setContact(true)
};

const ShowFooter = () => {
  if (home === true) {
    return(
    <Footer/>)
  };
  if (drinks === true) {
    return(
      <Footer/>
    )
  }
}

  return (
    <>
    <Wrapper>
      <Navbar 
        handleHome={handleHome}
        handleMenu={handleMenu}
        handleDrinks={handleDrinks}
        handleEvents={handleEvents}
        handleContact={handleContact}
      />
      {/* <Content>
      <Grid item lg={12} md={12}>
        <Banner/>
      </Grid>

      <Grid item xl={1} lg={1} md={1} sm={1} xs={1}></Grid>
        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}> 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Grid>
      <Grid item xl={1} lg={1} md={1} sm={1} xs={1}></Grid>

      </Content></>} */}
      {home && <Backdrop/>}
      {menu && <Menu/>}
      {drinks && <Drinks/>}
      {events && <Events/>}
      {contact && <Contact/>}
      </Wrapper>
      {home && <Footer/>}
      {drinks && <Footer/>}
      {events && <Footer/>}
    </>
  );
}

export default App;

// Styled Components //

const Content = styledCom(Grid).attrs({
  container: true
})`
position:absolute;
display:flex;
width: 70%;
top:20%;
font-size: 20px;
line-height: 30px;
text-align: center;
color:white;
`;

const Wrapper = styledCom.div`
height:100vh;
overflow:hidden;
display:flex;
align-items:center;
justify-content:center;
`;

const Banner = styledCom.img.attrs({
  src: banner, alt: 'Banner'
})`
width:80%;
justify-content: center;
`;

const Backdrop = styledCom.div`
background: url(${outside}) no-repeat center fixed;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
min-height: 100vh;
min-width: 100vw;
position:absolute;
z-index:-5;
display: table;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;`;
